import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

// const base64EncodedServiceAccount = process.env.GOOGLE_CREDENTIALS;
const decodedServiceAccount = Buffer.from(process.env.GOOGLE_CREDENTIALS!, 'base64').toString('utf-8');
const credentials = JSON.parse(decodedServiceAccount);

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

console.log(process.env.GOOGLE_SHEET_ID!);
console.log(process.env.GOOGLE_SHEET_RANGE!);
// console.log(process.env.GOOGLE_CREDENTIALS!);

const sheets = google.sheets({ version: "v4", auth });

export async function getTestimonials() {
  try {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const range = process.env.GOOGLE_SHEET_RANGE!;

    if (!sheetId || !range) {
      throw new Error("Missing Google Sheets environment variables.");
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) return [];

    return rows.slice(1).map((row, index) => ({
      id: index + 1,
      name: row[0] || "Unknown",
      designation: row[1] || "No Designation",
      quote: row[2] || "No quote provided",
      image: row[3] || "/default-image.jpg",
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}