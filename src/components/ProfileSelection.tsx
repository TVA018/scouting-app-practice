import '../global.css'
import {useContext} from "react";
import { AppContext } from '../lib/context';
import Radio from "../gui/Radio.tsx";

interface ProfileRadioProps {
  baseText: string;
  id: string;
  value: number;
}

const ProfileRadio = ({baseText, id, value}: ProfileRadioProps) => {
  const context = useContext(AppContext);
  const profileIdentifier = baseText;
  const teamNumber = ((context.teamNumbers && typeof context.profile == "number") ? ` (${context.teamNumbers[value]})` : "");
  const text = profileIdentifier + teamNumber;

  const onChange = () => {
    if(context.setProfile){
      context.setProfile(value);
    }
  }

  return <Radio text={text} id={id} value={value} onChange={onChange} defaultChecked={context.profile == value} />;
}

const ProfileSelection = () => {
  return (
    <div className="flex flex-row justify-center w-full gap-10">
      <div className="flex flex-col">
        <h1 className="text-center text-red-500">RED ALLIANCE</h1>
        <ProfileRadio baseText="Profile 1" id="radio-1" value={0} />
        <ProfileRadio baseText="Profile 2" id="radio-2" value={1} />
        <ProfileRadio baseText="Profile 3" id="radio-3" value={2} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-center text-blue-500">BLUE ALLIANCE</h1>
        <ProfileRadio baseText="Profile 4" id="radio-4" value={3} />
        <ProfileRadio baseText="Profile 5" id="radio-5" value={4} />
        <ProfileRadio baseText="Profile 6" id="radio-6" value={5} />
      </div>
    </div>
  )
}

export default ProfileSelection