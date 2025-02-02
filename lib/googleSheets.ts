import { google } from "googleapis";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// ✅ Fix: Correct key.json path
const KEY_PATH = path.resolve(process.cwd(), "lib", "key.json");

if (!fs.existsSync(KEY_PATH)) {
  throw new Error(`Missing key.json file at path: ${KEY_PATH}`);
}

const credentials = JSON.parse(fs.readFileSync(KEY_PATH, "utf8"));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});
console.log(process.env.GOOGLE_SHEET_ID!)
console.log(process.env.GOOGLE_SHEET_RANGE!)
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
      quote:row[2] || 'No quote provided',
      image: row[3] || "/default-image.jpg",
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

