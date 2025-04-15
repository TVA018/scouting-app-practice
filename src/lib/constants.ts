type Constants = {
  TBA_BASE_URL?: string,
  EVENT_KEY?: string,
  TBA_KEY?: string;
  TBA_HEADERS?: {"X-TBA-Auth-Key": string};
  FIELD_IMAGE_URL?: string,
  BACK_END_URL: string
}

const Constants: Constants = {
  BACK_END_URL: "http://865test.ddns.net/"//"http://localhost:3000/"
};

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

export default Constants;
export {EndgameClimb};