const express = require('express')
const app = express();
const port  = 5000;

app.get('/', (req, res) => {
    res.send('Running my crud server')
})

// mydbuser1
// o0hpgXpBGgFtKDx6


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mydbuser1:o0hpgXpBGgFtKDx6@cluster0.v21cd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
  try {
    await client.connect();
    const database = client.db("foodMaster");
    const usersCollection = database.collection("users");
    // create a document to insert
    const doc = {
      name: "special one",
      email: "special@hotmail.com",
    }
    const result = await usersCollection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// client.connect(err => {
//   const collection = client.db("foodMaster").collection("users");
//   // perform actions on the collection object
//   const user = {name:'Alamgir Hossen', email:'alamgir@gmail.com', phone:'017223636363'}
//   collection.insertOne(user)
//   .then(()=>{
//     console.log('insert successfully')
//   })

//   console.log('Hitting the database');
//   // client.close();
// });



app.listen(port, () => {
    console.log('app is listening at port', port)
})