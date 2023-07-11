import admin from '../../db/firebaseAdmin';

export default async function handler(req, res) {
  // Use Firebase Admin SDK here
  const firestore = admin.firestore();

  if (req.method === 'POST') {
    const data = req.body;

    try {

      const userRef = firestore.collection('users').doc();
      await userRef.set(data);


      const agendaRef = firestore.collection('agenda');
      const currentTime = new Date();
      const currentDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());

      const existingMeetingsQuery = await agendaRef
        .where('meeting_Time', '>=', admin.firestore.Timestamp.fromDate(currentTime))
        .where('meeting_Time', '<', admin.firestore.Timestamp.fromDate(new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 17)))
        .get();
      const existingTomorrowMeetings = await agendaRef
        .where('meeting_Time', '>=', admin.firestore.Timestamp.fromDate(new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1, 9)))
        .where('meeting_Time', '<', admin.firestore.Timestamp.fromDate(new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1, 17)))
        .get();

      let nextMeetingTime;

      if (existingMeetingsQuery.empty && isWithinWorkingHours(currentTime)) {

        nextMeetingTime = new Date(currentTime.getTime() + 20 * 60000); // Adding 20 minutes in milliseconds
      } else {
        const latestNextMeeting = existingMeetingsQuery.docs.reduce((latest, doc) => {
          const meetingTime = doc.data().meeting_Time.toDate();
          return meetingTime > latest ? meetingTime : latest;
        }, new Date(0));

        if (isWithinWorkingHours(latestNextMeeting)) {
          // If the latest next meeting falls within working hours, add 20 minutes to it
          nextMeetingTime = new Date(latestNextMeeting.getTime() + 20 * 60000); // Adding 20 minutes in milliseconds
        } else {
          // Schedule the next meeting for the next day at 9 AM
          if(existingTomorrowMeetings.empty)
          {nextMeetingTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1, 9);
          }
          else {
            const tomorrowNextMeeting = existingTomorrowMeetings.docs.reduce((latest, doc) => {
              const meetingTime = doc.data().meeting_Time.toDate();
              return meetingTime > latest ? meetingTime : latest;
            }, new Date(0));
            if (isWithinWorkingHours(tomorrowNextMeeting)) {
              // If the tomorrow next meeting falls within working hours, add 20 minutes to it
              nextMeetingTime = new Date(tomorrowNextMeeting.getTime() + 20 * 60000); // Adding 20 minutes in milliseconds
            }
          }
        }
      }

      // Create a new phone call meeting document in the agenda collection
      await agendaRef.add({
        phone_Number: data.phone,
        meeting_Time: admin.firestore.Timestamp.fromDate(nextMeetingTime),
        client: data,
        event_Date: data.eventDate,
        contact_Time: currentTime
      });

      res.status(200).json({ message: 'User record added to Firestore', nextMeetingTime, client: data });
    } catch (error) {
      console.error('Error adding user record:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

function isWithinWorkingHours(date) {
  const hour = date.getHours();
  return hour >= 9 && hour < 17;
}
