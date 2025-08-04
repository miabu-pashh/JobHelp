// googleDocsHelper.js
import { gapi } from "gapi-script";

// 👇 Replace these with your actual credentials
const CLIENT_ID =
  "738387978108-jvdrd54d7iov6r1602290mk0k2pdj8qm.apps.googleusercontent.com";
const API_KEY = "AIzaSyAc7tP11lunnGDDcsSnlFDIlhGW5d278fs";
const SCOPES =
  "https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.file";

export const initGapiClient = () => {
  return new Promise((resolve, reject) => {
    gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [
            "https://docs.googleapis.com/$discovery/rest?version=v1",
          ],
          scope: SCOPES,
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};

export const signInAndCreateDoc = async (coverLetterContent) => {
  try {
    await gapi.auth2.getAuthInstance().signIn();

    const response = await gapi.client.docs.documents.create({
      title: "Generated Cover Letter",
    });

    const documentId = response.result.documentId;

    // Replace body with cover letter
    await gapi.client.docs.documents.batchUpdate({
      documentId,
      requests: [
        {
          insertText: {
            location: { index: 1 },
            text: coverLetterContent.replace(/\n/g, "\n\n"),
          },
        },
      ],
    });

    // Open in new tab
    window.open(
      `https://docs.google.com/document/d/${documentId}/edit`,
      "_blank"
    );
  } catch (err) {
    console.error("❌ Google Docs creation error:", err);
    alert("Google Docs integration failed. Check console for details.");
  }
};
