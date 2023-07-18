import admin from 'firebase-admin';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
if (!admin.apps.length) {
  const serviceAccount = require('/db/serviceAccount');
// const serviceAccount=JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    
  });
}

export default admin
