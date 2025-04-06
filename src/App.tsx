import './global.css'
import LabeledInput from './components/LabeledInput.tsx';
import ProfileSelection from "./components/ProfileSelection.tsx";
import {useContext, useState} from "react";
import { AppContext } from './lib/context.ts';

function App() {
  const context = useContext(AppContext);

  [context.scouterName, context.setScouterName] = useState();
  [context.matchNumber, context.setMatchNumber] = useState();
  [context.profile, context.setProfile] = useState();

  return (
    <>
      <div className="flex flex-col w-full justify-center my-4">
        <h1 className="text-lg text-center">
            Home
        </h1>
      </div>

      <form className="flex flex-col w-full gap-10">
        {/*<div className='flex flex-row w-full justify-center gap-10 my-4'>*/}
        {/*  <LabeledInput id="scouter-name" name="scouter-name" width='w-xs'>Scouter Name</LabeledInput>*/}
        {/*</div>*/}
        <div className='flex flex-row w-full justify-center gap-10 my-4'>
          {/*<LabeledInput id="team-number" name="team-number" width='w-40'>Team<br/>Number</LabeledInput>*/}
          <LabeledInput inputType='text' id="scouter-name" name="scouter-name" width='w-40' onChange={context.setScouterName} >Scouter Name</LabeledInput>
          <LabeledInput inputType='number' id="match-number" name="match-number" width='w-40' onChange={context.setMatchNumber} >Match Number</LabeledInput>
        </div>
        <ProfileSelection />
        <input type="button" value="Retrieve Data" onClick={() => context.retrieveTBAData()} />
        <p className='w-full text-center'>{context.scouterName}</p>
      </form>
    </>
  )
}

export default App