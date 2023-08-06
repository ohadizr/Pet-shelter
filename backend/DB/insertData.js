// const express = require('express');
// const {MongoClient} = require('mongodb');
// const client= new MongoClient('mongodb://localhost:27017');

// async function run() {
    
//     await client.connect();
//     const db= client.db('PetsApi');
//     const collection= db.collection('pets');
//     const results = await collection.find({}).toArray();
//     console.log('results to MongoDB0 -DB',results);


//     client.close()
// }
// run()


// // const app = express();
// // app.use(express.json());
// // const port = 8000;


// // app.get('/', (req, res) => {
// //     res.send('Hello World!');
// // });

// // app.listen(port, async () => {
// //     console.log(`Server is running on port ${port}`)

// // })


