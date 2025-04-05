import './global.css'
import LabeledInput from './components/LabeledInput.tsx';
import ProfileSelection from "./components/ProfileSelection.tsx";
import {useState} from "react";

function App() {
  const [profileSelected, setProfileSelected] = useState("");

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
          {/*<LabeledInput inputType="number" id="team-number" name="team-number" width='w-40'>Team<br/>Number</LabeledInput>*/}
          <LabeledInput inputType="text" id="scouter-name" name="scouter-name" width='w-40'>Scouter Name</LabeledInput>
          <LabeledInput inputType="number" id="match-number" name="match-number" width='w-40'>Match Number</LabeledInput>
        </div>
        <ProfileSelection setProfile={setProfileSelected} />
        <p>{profileSelected}</p>
      </form>
    </>
  )
}

export default App