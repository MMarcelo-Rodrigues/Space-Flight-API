// Configuração inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Forma de ler JSON /middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json())

// Rota inicial / endpoint
app.get('/', (req, res) =>{
    // mostrar req

    res.json({ message: 'oi nodeJS' })
})


// Entregar uma porta
mongoose.connect(
    'mongodb+srv://Marcelo:159357@api-cluster.rvnqr.mongodb.net/bancospace?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('Conectado ao MongoDB')
        app.listen(3000)
    })
    .catch((err) => console.log(err))