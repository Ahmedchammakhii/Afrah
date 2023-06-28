export default async function handler(req, res) {
    if (req.method === 'POST') {
    //   const db = await connectToDatabase();
  
      // Perform MongoDB operations or any other logic for the POST request
      // Example: Save data to MongoDB and send the response
    //   const collection = db.collection('mycollection');
    //   await collection.insertOne(req.body); // Assuming the data is passed in the request body
    const data = req.body
    // console.log(data)
      res.status(200).json({ message: 'Data saved to MongoDB' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }