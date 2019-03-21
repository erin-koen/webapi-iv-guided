require('dotenv').config();
const server = require('./api/server.js');


//make the port dynamic - process brings in env object methods that allow postgres server to choose. If you don't have it hooked up, it'll go to 4000

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING || 'no message';

server.listen(port, () => {
  console.log(`\n*** ${greeting} Server Running on http://localhost:${port} ***\n`);
});
