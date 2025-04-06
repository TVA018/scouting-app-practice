import './global.css'
import LabeledInput from './gui/LabeledInput.tsx';
import ProfileSelection from "./components/ProfileSelection.tsx";
import {useContext, useState} from "react";
import { AppContext } from './lib/context.ts';

function App() {
  const context = useContext(AppContext);

  // Initialize state hooks
  [context.scouterName, context.setScouterName] = useState();
  [context.matchNumber, context.setMatchNumber] = useState();
  [context.profile, context.setProfile] = useState(0);
  [context.team, context.setTeam] = useState();
  [context.teamNumbers, context.setTeamNumbers] = useState();

  return (
    <>
      <div className="flex flex-col w-full justify-center my-4">
        <h1 className="text-lg text-center text-white">
            Home
        </h1>
        <form className="flex flex-col justify-center w-full gap-10">
          <div className='flex flex-row w-full justify-center gap-10 my-4'>
            <LabeledInput inputType='text' id="scouter-name" name="scouter-name" width='w-40' onChange={context.setScouterName} >Scouter Name</LabeledInput>
            <LabeledInput inputType='number' id="match-number" name="match-number" width='w-40' onChange={context.setMatchNumber} >Match Number</LabeledInput>
          </div>
          <ProfileSelection />
          <div className='flex flex-row w-full justify-around h-10'>
            <input className="cursor-pointer text-white bg-blue-950 w-40 h-full rounded-md hover:bg-blue-800 active:" type="button" value="Retrieve Data" onClick={() => context.retrieveTBAData()} />
          </div>
        </form>
        <img src="./gameField.png" alt="image of field" />
      </div>
    </>
  )
}

export default App