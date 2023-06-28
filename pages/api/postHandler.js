import admin from '../../db/firebaseAdmin'
export default async function handler(req, res) {
    // Use Firebase Admin SDK here
    const firestore = admin.firestore();
      if (req.method === 'POST') {
      const data = req.body;
  
      try {
        // Create a new user document in Firestore
        const userRef = firestore.collection('users').doc();
        await userRef.set(data);
  
        res.status(200).json({ message: 'User record added to Firestore' });
      } catch (error) {
        console.error('Error adding user record:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }