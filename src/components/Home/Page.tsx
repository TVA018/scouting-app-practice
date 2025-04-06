import '../../global.css'
import LabeledInput from '../../gui/LabeledInput.tsx';
import ProfileSelection from "../../components/Home/ProfileSelection.tsx";
import {useContext, useState} from "react";
import { AppContext } from '../../lib/context.ts';
import RetrieveDataButton from "../../components/Home/RetrieveDataButton.tsx";
import NavigationBar from "../../components/NavigationBar.tsx";

function Page() {
  const context = useContext(AppContext);

  // Initialize state hooks
  [context.scouterName, context.setScouterName] = useState();
  [context.matchNumber, context.setMatchNumber] = useState();
  [context.profile, context.setProfile] = useState(0);
  [context.team, context.setTeam] = useState();
  [context.teamNumbers, context.setTeamNumbers] = useState();
  [context.flipField, context.setFlipField] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full justify-center">
        <h1 className="text-lg text-center text-white my-4">
          Home
        </h1>
        <form className="flex flex-col justify-center w-full gap-10">
          <div className='flex flex-row w-full justify-center gap-10 my-4'>
            <LabeledInput inputType='text' id="scouter-name" name="scouter-name" width='w-40' onChange={context.setScouterName} >Scouter Name</LabeledInput>
            <LabeledInput inputType='number' id="match-number" name="match-number" width='w-40' onChange={context.setMatchNumber} >Match Number</LabeledInput>
          </div>
          <ProfileSelection />
          <RetrieveDataButton />
        </form>
        <div className="flex flex-row justify-center w-full my-4">
          <img className={`w-150 h-auto${context.flipField ? " scale-x-[-1]" : ""}`} src="/scouting-app-practice/gameField.png" alt="image of field" />
        </div>
        <div className="flex flex-row justify-center w-full my-0">
          <input type="checkbox" id="flip-field" onChange={(e) => context.setFlipField && context.setFlipField(e.target.checked)} />
          <label className="text-white" htmlFor="flip-field" >Flip Field</label>
        </div>
      </div>
      <NavigationBar />
    </>
  )
}

export default Page