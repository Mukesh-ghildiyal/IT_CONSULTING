import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();


export async function authenticateGoogleSheets() {
  try {
  const decodedServiceAccount = Buffer.from(process.env.GOOGLE_CREDENTIALS!, 'base64').toString('utf-8');
const credentials = JSON.parse(decodedServiceAccount);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return google.sheets({ version: "v4", auth });
  } catch (error) {
    console.error("Google Sheets Authentication Error:", error);
    throw error;
  }
}
