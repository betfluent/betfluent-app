import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get('/', (_req, res) => {
  res.json({ msg: 'Hello world!' });
});

// start the Express server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`server started at http://localhost:${port}`);
});
