import admin from 'firebase-admin';
import dotenv from 'dotenv';


dotenv.config();
if (!admin.apps.length) {

const serviceAccount=JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Add other Firebase Admin SDK configuration options if needed
  });
}

export default admin
