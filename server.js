const express = require('express');
var app = express();

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, ()=> {
      console.log(`Server is running on port ${port}`);
});