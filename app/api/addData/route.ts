import { google } from "googleapis";
import { authenticateGoogleSheets } from "../../../lib/googleauth";
import { NextRequest, NextResponse } from "next/server";

// Named export for POST method
export async function POST(req: NextRequest) {
  try {
    const sheets = await authenticateGoogleSheets();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const sheetId = "1rNs0mY5NF1Br9ZvCIb7yY14xI6a-10fGQhRb42Q8RQ8";

    // Create a new sheet dynamically
    const newSheetTitle = `Sheet_${Date.now()}`; // Using timestamp to create a unique sheet name
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: sheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: newSheetTitle, // Setting the new sheet's title
              },
            },
          },
        ],
      },
    });

    // Append data to the newly created sheet
    const range = `${newSheetTitle}!A:C`; // Referencing the newly created sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message]],
      },
    });

    return NextResponse.json({ message: "Data added successfully!" });
  } catch (error) {
    console.error("Error adding data to Google Sheets:", error);
    return NextResponse.json({ message: "Failed to add data" }, { status: 500 });
  }
}
