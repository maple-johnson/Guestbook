import  express from 'express';
import  mariadb from 'mariadb';
import dotenv from 'dotenv';
import { validateForm } from './services/validation.js';

dotenv.config();

const pool = mariadb.createPool({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_DATABASE,
     port: process.env.DB_PORT
});

async function connect() {
     try {
          const conn = await pool.getConnection();
          console.log('Connected to the database');
          return conn;
     } catch (err) {
          console.log(`Error connecting to the database ${err}`);
     }
}

const app = express();
const PORT = process.env.APP_PORT ||  3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
     res.render('home');
});
app.get('/admin', async (req, res) => {
     const conn = await connect();
     const signed = await conn.query('SELECT * FROM signed');
     console.log(signed);
     res.render('guests', { signed });
});

app.post('/submit-guest', async (req, res) => {

     const guest = {
          fname: req.body.fname,
          lname: req.body.lname,
          jtitle: req.body.jtitle,
          company: req.body.company,
          linkedin: req.body.linkedin,
          email: req.body.email,
          howmet: req.body.howmet,
          other: req.body.other,
          message: req.body.message,
          maillist: req.body.maillist,
          format: req.body.format,
     }

     const result = validateForm(guest);
     if(!result.isValid) {
          console.log(result.errors);
          res.send(result.errors);
          return;
     }

     const conn =  await connect();

     const insertQuery = await conn.query(`INSERT INTO signed 
          (firstName, lastName, jobTitle, company, linkedIn, email, howMet, other, message, mailList, format) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, 
          [guest.fname, guest.lname, guest.jtitle, guest.company, guest.linkedin, guest.email, guest.howmet, guest.other, guest.message, guest.maillist, guest.format]);

     res.render('confirmation', { guest });
});

app.listen(PORT, () => {
     console.log(`Server is running at http://localhost:${PORT}`);
});
