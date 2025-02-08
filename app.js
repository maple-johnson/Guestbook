import  express from 'express';

const app = express();
const PORT = 3000;
const signed = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
     res.sendFile(`${import.meta.dirname}/views/home.html`);
});
app.get('/admin/signed', (req, res) => {
     res.send(signed);
});

app.listen(PORT, () => {
     console.log(`Server is running at http://localhost:${PORT}`);
});

app.post('/submit-guest', (req, res) => {
     // Fill in the form data
     signed.push(req.body);

     //Test operations:
     console.log(req.body);

     // Respond to the user with a confirmation page
     res.sendFile(`${import.meta.dirname}/views/confirmation.html`);

});
