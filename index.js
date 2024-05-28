const axios = require("axios");
const server = require("./src/server");
const PORT = 3000;

conn.sync({ force: true }).then(() => { 
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
//force es importante sin force hay error; false no reinicia la base de datos