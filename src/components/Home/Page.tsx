import '../../global.css'
import LabeledInput from '../../gui/LabeledInput.tsx';
import ProfileSelection from "../../components/Home/ProfileSelection.tsx";
import {useContext, useState} from "react";
import { AppContext } from '../../lib/context.ts';
import RetrieveDataButton from "../../components/Home/RetrieveDataButton.tsx";
import fieldImage from "/gameField.png";
import NavigationBar from "../../components/NavigationBar.tsx";

function Page() {
  const context = useContext(AppContext);

  // Initialize state hooks
  [context.scouterName, context.setScouterName] = useState(context.scouterName);
  [context.matchNumber, context.setMatchNumber] = useState(context.matchNumber);
  [context.profile, context.setProfile] = useState(context.profile);
  [context.team, context.setTeam] = useState(context.team);
  [context.teamNumbers, context.setTeamNumbers] = useState(context.teamNumbers);
  [context.flipField, context.setFlipField] = useState(context.flipField);

  return (
    <>
      <div className="flex flex-col w-full justify-start mb-22">
        <h1 className="text-4xl text-center text-white font-bold my-4">
          Home
        </h1>
        <form className="flex flex-col justify-center w-full gap-10">
          <div className='flex flex-row w-full justify-center gap-10 my-4'>
            <LabeledInput inputType='text' id="scouter-name" name="scouter-name" width='w-40' initialText={context.scouterName} onChange={context.setScouterName} >Scouter Name</LabeledInput>
            <LabeledInput inputType='number' id="match-number" name="match-number" width='w-40' initialText={context.matchNumber?.toString()} onChange={context.setMatchNumber} >Match Number</LabeledInput>
          </div>
          <ProfileSelection />
          <RetrieveDataButton />
        </form>
        <div className="flex flex-row justify-center w-full my-4">
          <img className={`w-150 h-auto${context.flipField ? "" : " scale-x-[-1]"}`} src={fieldImage} alt="image of field" />
        </div>
        <div className="flex flex-row justify-center items-center w-full my-0 gap-1.5">
          <input className="w-4 h-4" type="checkbox" id="flip-field" defaultChecked={context.flipField} onChange={(e) => context.setFlipField && context.setFlipField(e.target.checked)} />
          <label className="text-white text-xl" htmlFor="flip-field" >Flip Field</label>
        </div>
      </div>
      <NavigationBar />
    </>
  )
}

export default Page