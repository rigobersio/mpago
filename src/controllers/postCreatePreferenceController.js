const { MercadoPagoConfig, Preference,} = require("mercadopago");
const axios = require("axios");

require("dotenv").config();
const { ACCESS_TOKEN } = process.env;

const client = new MercadoPagoConfig({
  access_token: process.env.ACCESS_TOKEN,
});



const postCreatePreferenceController = async () => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.unit_price),
          currency_id: "ARS",
        }
      ],
      back_urls: {
        success: "http://www.mercadopago.com",
        failure: "http://www.google.com",
        pending: "http://www.wikipedia.com",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);


    const result = await preference.create({ body });

    if (result.id) {
      return result.id;
    } else if (result) {
      return console.log(`hay un problema con el body o el id. este es el body: ${result}`);
    }
  } catch (error) {
    console.error("Error al crear preferencia:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  };

};


module.exports = { postCreatePreferenceController };


/*
res
res.json({
  id: result.id,
});
*/