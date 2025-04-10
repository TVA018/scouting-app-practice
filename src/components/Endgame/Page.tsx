import NavigationBar from "../NavigationBar.tsx";
import {useContext, useState} from "react";
import {AppContext} from "../../lib/context.ts";
import {EndgameClimb} from "../../lib/constants.ts";
import Radio from "../../gui/Radio.tsx";
import TimeInput from "../../gui/TimeInput.tsx";

interface RadioProps {
  climbType: EndgameClimb;
}

const ClimbRadio = ({climbType}: RadioProps) => {
  const context = useContext(AppContext);
  const climbName = climbType.toString();
  const radioName = `${climbName}-radio`;

  return <Radio text={climbName} id={radioName} name="endgame-climb" value={climbType} defaultChecked={context.endgameClimb == climbType} onChange={() => context.setEndgameClimb && context.setEndgameClimb(climbType)} />;
}

const Page = () => {
  const context = useContext(AppContext);

  [context.endgameClimb, context.setEndgameClimb] = useState(context.endgameClimb);
  [context.climbTime, context.setClimbTime] = useState(context.climbTime);

  // const onClimbTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // Clean the input to make sure it is in a proper format
  //
  // }

  return (
    <>
      <div className='flex flex-col h-full w-full gap-5 text-white items-center text-4xl'>
        <h1 className="text-4xl text-center font-bold text-white my-4">
          Endgame
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold my-2">Climb</h1>
          {EndgameClimb.asList.map((climbType: EndgameClimb) => <ClimbRadio climbType={climbType} />)}
        </div>
        <TimeInput id="scouter-name" name="scouter-name" width='w-60' value={context.climbTime} onChange={context.setClimbTime}>Time Climbed At (MM:SS)</TimeInput>
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;