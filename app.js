const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'));

app.use("/", function (req, res, next) {
    // hacé tu logueo acá
    // llamá a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
    res.send("HOLA")
    next()
});

app.use("/nahuel", function(req, res, next) {
	res.send("Estoy en  '/nahuel'")
})



app.listen(3000, function(){
	console.log("listening on port 3000!")
})