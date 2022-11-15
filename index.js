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
    userName:'Jorge Lopez',
    userPassword:'password1'
})
});

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { userName } = req.body;
    const { userPassword } = req.body;

    if (!userName || !userPassword){
        res.status(418).send({message: 'we need username and password!'})
    }
    res.send({
        newUser: `Hello ${userName} with password of ${userPassword} your ID is ${id}`,
    })
});