const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/Product');
// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
//   params: {limit: '25', brand: 'Adidas'},
//   headers: {
//     'x-rapidapi-key': '62036fde62msh24624331ddd8c61p138b56jsncafff2443cc8',
//     'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com'
//   }
// };

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// app.get('/loadShoes', (req, res) => {
//   axios.request(options).then(function (response) {
//     response.data.results.forEach(({id, name, brand, image, retailPrice}) => {
//       if(image.original){
//         var myProduct =  new Product({
//           id,
//           title: name,
//           brand,
//           imageUrl: image.original,
//           price: retailPrice,
//           sizes: [8, 9, 10, 12]
  
//         });
//         myProduct.save();
//       }
//     })
//   }).catch(function (error) {
//     console.error(error);
//   });
//     res.send('loaded!');
// });

app.get('/getProducts', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.use((req, res) => {
    res.send('Not Found!');
});

mongoose.set('debug', false);
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/kickz', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
