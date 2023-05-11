
const express = require('express');
const paymentRouter = require('./src/controllers/payment');
const integrateTokens = require('./src/controllers/tokens');
const claveEspecifica = require('./src/controllers/clave');


const app = express();
app.use('/payment', paymentRouter);
app.use('/tokens', integrateTokens);
app.use('/claveEspecifica', claveEspecifica );
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
