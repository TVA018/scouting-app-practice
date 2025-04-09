import NavigationBar from "../NavigationBar.tsx";
import {useContext, useState} from "react";
import {AppContext} from "../../lib/context.ts";
import {EndgameClimb} from "../../lib/constants.ts";
import Radio from "../../gui/Radio.tsx";

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
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;