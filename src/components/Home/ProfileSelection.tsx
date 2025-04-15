import '../../global.css';
import Radio from "../../gui/Radio.tsx";
import { useAppContext } from '../../lib/context.ts';

interface ProfileRadioProps {
  baseText: string;
  id: string;
  value: number;
}

const ProfileRadio = ({baseText, id, value}: ProfileRadioProps) => {
  const context = useAppContext();
  const profileIdentifier = (context.matchData && typeof context.matchData[value].scouterName === "string") ? context.matchData[value].scouterName : baseText;
  const teamNumber = ((context.matchData && typeof context.profile == "number") ? ` (${context.matchData[value].teamNumber})` : "");
  const text = profileIdentifier + teamNumber;

  const onChange = () => {
    if(context.setProfile){
      context.setProfile(value);
    }
  }

  return <Radio text={text} name="scouter-profile" id={id} value={value} onChange={onChange} defaultChecked={context.profile == value} />;
}

function ProfileSelection() {
  const context = useAppContext();
  const allianceContainerClass = "flex flex-col text-2xl gap-2";

  const RedAlliance = () => {
    return (
      <div className={allianceContainerClass}>
        <h1 className="text-center font-semibold text-xl text-red-500">RED ALLIANCE</h1>
        <ProfileRadio baseText="Profile 1" id="radio-1" value={0} />
        <ProfileRadio baseText="Profile 2" id="radio-2" value={1} />
        <ProfileRadio baseText="Profile 3" id="radio-3" value={2} />
      </div>
    );
  };

  const BlueAlliance = () => {
    return (
      <div className={allianceContainerClass}>
        <h1 className="text-center font-semibold text-xl text-blue-500">BLUE ALLIANCE</h1>
        <ProfileRadio baseText="Profile 4" id="radio-4" value={3} />
        <ProfileRadio baseText="Profile 5" id="radio-5" value={4} />
        <ProfileRadio baseText="Profile 6" id="radio-6" value={5} />
      </div>
    );
  };

  return (
    <div className="flex flex-row justify-center w-full gap-10">
      {context.flipField ? <BlueAlliance /> : <RedAlliance />}
      {context.flipField ? <RedAlliance /> : <BlueAlliance />}
    </div>
  );
}

export default ProfileSelection