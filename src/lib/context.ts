import { createContext, Dispatch, SetStateAction, useContext } from "react";
import Constants, {EndgameClimb} from "./constants.ts";

interface MatchData {
    scouterName?: string,
    teamNumber: number
};

export class AppData {
    // Home page
    scouterName: string = "";
    profile: number = 0;
    matchNumber?: number;
    team?: number;
    matchData?: MatchData[];

    setScouterName?: Dispatch<SetStateAction<string>>;
    setMatchNumber?: Dispatch<SetStateAction<number | undefined>>;
    setProfile?: Dispatch<SetStateAction<number>>;
    setTeam?: Dispatch<SetStateAction<number | undefined>>;
    setMatchData?: Dispatch<SetStateAction<MatchData[] | undefined>>;

    flipField: boolean = false;
    setFlipField?: Dispatch<SetStateAction<boolean>>;

    // Auto
    autoCoral: number[] = Array(4).fill(0);
    autoAlgae: {processor: number, barge: number} = {
        processor: 0,
        barge: 0
    };
    autoMobility: boolean = false;

    setAutoCoral: Dispatch<SetStateAction<number>>[] = Array(4).fill(undefined);
    setAutoAlgae: {processor?: Dispatch<SetStateAction<number>>, barge?: Dispatch<SetStateAction<number>>} = {
        processor: undefined,
        barge: undefined
    };
    setAutoMobility?: Dispatch<SetStateAction<boolean>>;

    // Teleop
    teleopCoral: number[] = Array(4).fill(0);
    teleopAlgae: {processor: number, barge: number} = {
        processor: 0,
        barge: 0
    };
    teleopFoul: number = 0;
    teleopDefense: boolean = false;

    setTeleopCoral: Dispatch<SetStateAction<number>>[] = Array(4).fill(undefined);
    setTeleopAlgae: {processor?: Dispatch<SetStateAction<number>>, barge?: Dispatch<SetStateAction<number>>} = {
        processor: undefined,
        barge: undefined
    };
    setTeleopFoul?: Dispatch<SetStateAction<number>>;
    setTeleopDefense?: Dispatch<SetStateAction<boolean>>;

    // Endgame
    endgameClimb: EndgameClimb = EndgameClimb.None;
    climbTime: string = "00:00";

    setEndgameClimb?: Dispatch<SetStateAction<EndgameClimb>>;
    setClimbTime?: Dispatch<SetStateAction<string>>;

    // Submit
    commentary: string = "";
    setCommentary?: Dispatch<SetStateAction<string>>;

    public async retrieveMatchData(){
        if(!this.matchNumber){
            return;
        } else if(!this.setMatchData){
            alert("SET MATCH DATA DOES NOT EXIST");
            return;
        }

        // Getting scouter name
        let scouterNames;

        try {
            const scouterNameRequest = await fetch(`${Constants.BACK_END_URL}match/${this.matchNumber}`, {
                method: "GET",
            });
    
            scouterNames = await scouterNameRequest.json();
        } catch(error) {
            console.warn(error)
            scouterNames = Array(6).fill(undefined).map(_ => {return {scouterName: undefined}});
        }

        // Getting team numbers
        const extractTeamNumbers = (teamKeys: string[]) => {
            return teamKeys.map((teamKey) => parseInt(teamKey.slice(3)));
        }

        const tbaRequest = await fetch(`${Constants.TBA_BASE_URL}/event/${Constants.EVENT_KEY}/matches/simple`, {
            method: "GET",
            headers: Constants.TBA_HEADERS
        });

        const json = await tbaRequest.json();
        const targetMatch = json.find((e: {match_number: number}) => e.match_number == this.matchNumber);
        
        if(!targetMatch){
            alert(`MATCH ${this.matchNumber} IS OUT OF BOUNDS`);
            return;
        }

        const parsedTeamNumbers = [
            ...extractTeamNumbers(targetMatch.alliances.red.team_keys),
            ...extractTeamNumbers(targetMatch.alliances.blue.team_keys)
        ];

        // Creating match data
        this.matchData = [];

        for(let i = 0; i < 6; i++){
            this.matchData.push({
                scouterName: scouterNames[i].scouterName,
                teamNumber: parsedTeamNumbers[i]
            });
        }

        this.setMatchData(this.matchData);
    }

    public stringify(){
        return JSON.stringify({
            scouterName: this.scouterName,
            matchNumber: this.matchNumber,
            teamNumber: this.matchData && this.matchData[this.profile].teamNumber,
            profileIndex: this.profile + 1,
            auto: {
                coral: [...this.autoCoral],
                algae: {
                    processor: this.autoAlgae.processor,
                    barge: this.autoAlgae.barge
                },
                mobility: this.autoMobility
            },
            teleop: {
                coral: [...this.teleopCoral],
                algae: {
                    processor: this.teleopAlgae.processor,
                    barge: this.teleopAlgae.barge
                },
                fouls: this.teleopFoul,
                defense: this.teleopDefense
            },
            endgame: {
                climbType: this.endgameClimb.toString(),
                climbTime: this.climbTime
            },
            commentary: this.commentary
        });
    }

    public async onSubmit(){
        // upload the data to google sheets

        // clears the data partially, keeping certain values such as the scouter name
        // have to use if statements because TypeScript sucks
        // It's ok to set values directly because switching back to other pages will re-render the components
        try {
            await fetch(`${Constants.BACK_END_URL}scouting-data/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: this.stringify()
            });
            console.log("TEST 2");
        } catch(error){
            console.warn(error);
            alert("COULD NOT ACCESS BACK-END, DATA WAS NOT WRITTEN TO THE GOOGLE SHEETS.");
        }

        // Home page
        if(this.matchNumber) this.matchNumber = parseInt(`${this.matchNumber}`) + 1;
        this.retrieveMatchData();
        console.log("TEST");
        
        // Auto
        for(let i = 0; i < this.autoCoral.length; i++){
            this.autoCoral[i] = 0;
        }

        this.autoAlgae.barge = 0;
        this.autoAlgae.processor = 0;
        this.autoMobility = false;

        // Teleop
        for(let i = 0; i < this.teleopCoral.length; i++){
            this.teleopCoral[i] = 0;
        }

        this.teleopAlgae.barge = 0;
        this.teleopAlgae.processor = 0;
        this.teleopFoul = 0;
        this.teleopDefense = false;

        // Endgame
        this.endgameClimb = EndgameClimb.None;
        this.climbTime = "00:00";

        if(this.setCommentary) this.setCommentary("");
    }

    // public fullClear(){
    //     this.scouterName = undefined;
    //     this.partialClear()
    // }
}

export const AppContext = createContext<AppData | undefined>(undefined);
export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error("NO APP CONTEXT EXISTS");
    }

    return context;
}