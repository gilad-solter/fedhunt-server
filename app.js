import express from 'express';
import 'dotenv/config';
 
const app = express();
 
app.get('/', (req, res) => {
    res.send('hi there!');
});

app.listen(3000, () =>
  console.log('fedhunt-server app lurking in the dark of port 3000...'),
);