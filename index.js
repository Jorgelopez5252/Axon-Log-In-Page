const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.listen(
    PORT, 
    () => console.log(`its alive on http://localhost:${PORT}`)
)

app.get('/users', (req, res) => {
res.status(200).send({
    id:1,
    userEmail:'jolopez@axon.com',
    userPassword:'password1'
})
});

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { userEmail } = req.body;
    const { userPassword } = req.body;

    if (!userEmail || !userPassword){
        res.status(418).send({message: 'we need username and password!'})
    }
    res.send({
        newUser: `Hello ${userEmail} with password of ${userPassword} your ID is ${id}`,
    })
});