const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use('/api', router);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allows all origins, you can restrict to localhost:4200 if needed
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/health', (req, res) => {
  res.status(200).send('OK');
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('JSON Server running on port ' + PORT);
});
