import { createContext, Dispatch, SetStateAction } from "react";
import Constants from "./constants.ts";

export class AppData {
    // Home page
    scouterName?: string;
    profile?: number;
    matchNumber?: number;

    setScouterName?: Dispatch<SetStateAction<string | undefined>>;
    setMatchNumber?: Dispatch<SetStateAction<number | undefined>>;
    setProfile?: Dispatch<SetStateAction<number | undefined>>;
    setTeam?: Dispatch<SetStateAction<number | undefined>>;

    team?: string;

    flipField: boolean = false;

    public async retrieveTBAData(){
        if(!this.matchNumber){
            alert("NO MATCH NUMBER PROVIDED");
            return;
        }

        const request = await fetch(`${Constants.TBA_BASE_URL}/event/${Constants.EVENT_KEY}/matches/simple`, {
            method: "GET",
            headers: Constants.TBA_HEADERS
        });

        const json = await request.json();
        const targetMatch = json.find((e: {match_number: number}) => e.match_number == this.matchNumber);

        console.log(targetMatch);
    }

    public partialClear(){
        // clears the data partially, keeping certain values such as the scouter name
        this.matchNumber = undefined;
        this.team = undefined;
    }

    public fullClear(){
        this.scouterName = undefined;
        this.partialClear()
    }
}

export const AppContext = createContext(new AppData());