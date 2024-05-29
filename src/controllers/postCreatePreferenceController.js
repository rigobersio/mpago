const { MercadoPagoConfig, Preference,} = require("mercadopago");

require("dotenv").config();
const { ACCESS_TOKEN } = process.env;

const client = new MercadoPagoConfig({
  access_token: 'process.env.ACCESS_TOKEN',
});



const postCreatePreferenceController = async ( title, quantity, unit_price, idempotencyKey) => {
  try {
    const body = {
      items: [
        {
          title: title,
          quantity: Number(quantity),
          unit_price: Number(unit_price),
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


    const result = await preference.create({ body }, {
      headers: {
        'x-idempotency-key': idempotencyKey
      }
    });

    if (result.body.id) {
      return result.body.id;
    } else {
      console.log(`Hay un problema con el body o el id. Este es el body: ${result}`);
      return null;
    }
  } catch (error) {
    console.error("Error al crear preferencia:", error.message);
    throw new Error("Error al crear preferencia");
  }
};


module.exports = { postCreatePreferenceController };


/*
res
res.json({
  id: result.id,
});
*/