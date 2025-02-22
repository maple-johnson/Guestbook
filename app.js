import  express from 'express';

const app = express();
const PORT = 3000;
const signed = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
     res.render('home');
});
app.get('/admin', (req, res) => {
     res.render('guests', { signed });
});

app.post('/submit-guest', (req, res) => {

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
          dateTime: new Date()
     }

     // Verify name and email was input
     if (guest.fname == "" || guest.lname == "" || guest.email == "")
     {
          // If not, send error message
          res.send('Invalid Input: Please submit at least a first name, last name and email.');
     }
     else
     {
          // Fill in the form data
          signed.push(guest);

          //Test operations:
          console.log(signed);

          // Respond to the user with a confirmation page
          res.render('confirmation', { signed });
     }

});

app.listen(PORT, () => {
     console.log(`Server is running at http://localhost:${PORT}`);
});
