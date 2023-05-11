const express = require('express');
const { RedsysAPI } = require('redsys-api');
const router = express.Router();

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const merchantParams = 
      
    {
      "DS_MERCHANT_AMOUNT": "145",
      "DS_MERCHANT_CURRENCY": "978",
      "DS_MERCHANT_CVV2": "123",
      "DS_MERCHANT_EXPIRYDATE": "1512",
      "DS_MERCHANT_MERCHANTCODE": "YOUR_MERCHANT_CODE",
      "DS_MERCHANT_ORDER": "1446068581",
      "DS_MERCHANT_PAN": "454881********04",
      "DS_MERCHANT_TERMINAL": "1",
      "DS_MERCHANT_TRANSACTIONTYPE": "0",
      "DS_MERCHANT_MERCHANTURL": "http://www.prueba.com/urlNotification.php",
      "DS_MERCHANT_URLOK": "https://www.prueba.com/ok",
      "DS_MERCHANT_URLKO": "https://www.prueba.com/fail"
    };


    const merchantKey = 'YOUR_MERCHANT_KEY';
    const redsysAPI = new RedsysAPI();

    const signature = redsysAPI.sign(merchantParams, merchantKey);
    const merchantParamsStr = JSON.stringify(merchantParams);
    const merchantParamsBase64 = Buffer.from(merchantParamsStr).toString('base64');
    
    const paymentRequest = {
      Ds_Signature: signature,
      Ds_SignatureVersion: 'HMAC_SHA256_V1',
      Ds_MerchantParameters: merchantParamsBase64
    };
    await fetch('	https://sis-t.redsys.es:25443/sis/rest/iniciaPeticionREST', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentRequest)
    });

    // Aquí se procesa el resultado de la solicitud de pago y se integran los tokens comprados en MetaMask
    // ...

    res.status(200).json({ message: 'Payment processed successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error processing payment.' });
  }
});

module.exports = router;
