import admin from '../../db/firebaseAdmin';
export default async function agendaHandler(req, res) {
    if (req.method === 'GET') {
      try {
        const firestore = admin.firestore();
        const agendaRef = firestore.collection('agenda');
        const snapshot = await agendaRef.orderBy('contact_Time', 'desc').get();
//   console.log("snapshot",snapshot)
        const agenda = [];
        snapshot.forEach((doc) => {
          agenda.push(doc.data());
        });
  
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(agenda);
      } catch (error) {
        console.error('Error fetching agenda:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  