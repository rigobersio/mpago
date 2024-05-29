const { MercadoPagoConfig, Preference,} = require("mercadopago");

require("dotenv").config();
const { ACCESS_TOKEN } = process.env;

const client = new MercadoPagoConfig({
  access_token: 'process.env.ACCESS_TOKEN',
});



const postCreatePreferenceController = async ( title, quantity, unit_price) => {
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