const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


const data = require('./data/categories.json')



app.use(cors());

app.get('/', (req, res)=>{
    res.send('dragon is running');

})

app.get('/categories', (req, res)=>{
    res.send(data);

})




app.listen(port,()=>{
    console.log(`dragon api is running on ${port}` )
})