const { postCreatePreferenceController } = require("../controllers/postCreatePreferenceController");

const postHandlerPreference = async (req, res) => {

  try {
    const { title, quantity, unit_price } = req.body;
    let respuesta = await postCreatePreferenceController( title, quantity, unit_price );
    res.status(200).send({
      answer: {
        respuesta,
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {
  postHandlerPreference
};