import { createContext, Dispatch, SetStateAction } from "react";
import Constants from "./constants.ts";

export class AppData {
    // Home page
    scouterName?: string;
    profile: number = 0;
    matchNumber?: number;
    team?: number;
    teamNumbers?: number[];

    setScouterName?: Dispatch<SetStateAction<string | undefined>>;
    setMatchNumber?: Dispatch<SetStateAction<number | undefined>>;
    setProfile?: Dispatch<SetStateAction<number>>;
    setTeam?: Dispatch<SetStateAction<number | undefined>>;
    setTeamNumbers?: Dispatch<SetStateAction<number[] | undefined>>;


    flipField: boolean = false;
    setFlipField?: Dispatch<SetStateAction<boolean>>;

    public async retrieveTBAData(){
        if(!this.matchNumber){
            alert("NO MATCH NUMBER PROVIDED");
            return;
        } else if(!this.setTeamNumbers){
            alert("SET TEAM NUMBERS DOES NOT EXIST");
            return;
        }

        const extractTeamNumbers = (teamKeys: string[]) => {
            return teamKeys.map((teamKey) => parseInt(teamKey.slice(3)));
        }

        const request = await fetch(`${Constants.TBA_BASE_URL}/event/${Constants.EVENT_KEY}/matches/simple`, {
            method: "GET",
            headers: Constants.TBA_HEADERS
        });

        const json = await request.json();
        const targetMatch = json.find((e: {match_number: number}) => e.match_number == this.matchNumber);
        this.setTeamNumbers([
            ...extractTeamNumbers(targetMatch.alliances.red.team_keys),
            ...extractTeamNumbers(targetMatch.alliances.blue.team_keys)
        ]);
    }

    public partialClear(){
        // clears the data partially, keeping certain values such as the scouter name
        // have to use if statements because TypeScript sucks
        if(this.setMatchNumber) {this.setMatchNumber(undefined)}
        if(this.setTeamNumbers) {this.setTeamNumbers(undefined)}
        if(this.setProfile) {this.setProfile(0)}
    }

    // public fullClear(){
    //     this.scouterName = undefined;
    //     this.partialClear()
    // }
}

export const AppContext = createContext(new AppData());