// import { google } from 'googleapis';

// const CLIENT_ID = '<your-client-id>';
// const CLIENT_SECRET = '<your-client-secret>';
// const REDIRECT_URI = 'http://localhost:3000/auth/callback';
// const REFRESH_TOKEN = '<your-refresh-token>';
// const FOLDER_ID = '<your-folder-id>';

// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );

// oauth2Client.setCredentials({
//   refresh_token: REFRESH_TOKEN,
// });

// const drive = google.drive({
//   version: 'v3',
//   auth: oauth2Client,
// });

// async function uploadPhoto(file) {
//   try {
//     // Create a new file metadata object
//     const fileMetadata = {
//       name: file.name,
//       parents: [FOLDER_ID],
//     };

//     // Create a new media upload object
//     const media = {
//       mimeType: file.type,
//       body: file,
//     };

//     // Upload the file to Google Drive
//     const uploadedFile = await drive.files.create({
//       resource: fileMetadata,
//       media: media,
//       fields: 'webViewLink',
//     });

//     // Return the public URL of the uploaded file
//     const fileUrl = uploadedFile.data.webViewLink;
//     return fileUrl;
//   } catch (error) {
//     console.error(error);
//   }
// }
