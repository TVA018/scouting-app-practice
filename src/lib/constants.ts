import {google, sheets_v4} from "googleapis";
import { auth } from "googleapis/build/src/apis/abusiveexperiencereport";

type Constants = {
  TBA_BASE_URL?: string,
  EVENT_KEY?: string,
  TBA_KEY?: string;
  TBA_HEADERS?: {"X-TBA-Auth-Key": string};
  FIELD_IMAGE_URL?: string,
}

const Constants: Constants = {};

Constants.TBA_BASE_URL = "https://www.thebluealliance.com/api/v3";
Constants.EVENT_KEY = "2025oncmp1";
Constants.TBA_KEY = "6AnlS4ogXVcazxDAFcnruwP4FnIlhWVV6qr7sSvgB7ibel11yeXnaOgxKyaXHtEQ";
Constants.TBA_HEADERS = {
  "X-TBA-Auth-Key": Constants.TBA_KEY,
};

class EndgameClimb {
  static readonly None = new EndgameClimb("None");
  static readonly Park = new EndgameClimb("Park");
  static readonly Shallow = new EndgameClimb("Shallow");
  static readonly Deep = new EndgameClimb("Deep");

  static readonly asList = [
    EndgameClimb.None,
    EndgameClimb.Park,
    EndgameClimb.Shallow,
    EndgameClimb.Deep,
  ];

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  toString(){
    return this.name;
  }
}

class SheetsManager {
  sheetsId: string;
  client?: any;
  googleSheets?: sheets_v4.Sheets;

  // Create client instance
  static readonly auth = new google.auth.GoogleAuth({
    keyFile: "./sheetsCredentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  });

  constructor(sheetsId: string){
    this.sheetsId = sheetsId;

    this.create();
  }

  async create(){
    this.client = await SheetsManager.auth.getClient();
    this.googleSheets = google.sheets({
      version: "v4",
      auth: this.client
    });

    const metaData = await this.googleSheets.spreadsheets.get({
      auth: auth,
      spreadsheetId: this.sheetsId
    });

    console.log(metaData);
  }
}

export default Constants;
export {EndgameClimb, SheetsManager};