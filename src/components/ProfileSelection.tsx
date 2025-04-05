import '../global.css'
import {Dispatch, SetStateAction} from "react";

interface RadioProps {
  text: string;
  id: string;
  value: string;
  setProfile: Dispatch<SetStateAction<string>>
}

interface ProfileSelectionProps {
  setProfile: Dispatch<SetStateAction<string>>
}

const Radio = ({text, id, value, setProfile}: RadioProps) => {
  return (
    <div className="flex flex-row gap-2">
      <input type="radio" name="scouter-profile" id={id} value={value} onChange={() => setProfile(value)} />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

const ProfileSelection = ({setProfile}: ProfileSelectionProps) => {
  return (
    <div className="flex flex-row justify-center w-full gap-10">
      <div className="flex flex-col">
        <Radio text="Profile 1" id="radio-1" value="0" setProfile={setProfile} />
        <Radio text="Profile 2" id="radio-2" value="1" setProfile={setProfile} />
        <Radio text="Profile 3" id="radio-3" value="2" setProfile={setProfile} />
      </div>
      <div className="flex flex-col">
        <Radio text="Profile 4" id="radio-4" value="3" setProfile={setProfile} />
        <Radio text="Profile 5" id="radio-5" value="4" setProfile={setProfile} />
        <Radio text="Profile 6" id="radio-6" value="5" setProfile={setProfile} />
      </div>
    </div>
  )
}

export default ProfileSelection