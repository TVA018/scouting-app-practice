import { useContext, useState } from "react";
import Incrementer from "../../gui/Incrementer.tsx";
import NavigationBar from "../NavigationBar.tsx";
import { AppContext } from "../../lib/context.ts";

const CoralSection = () => {
  const context = useContext(AppContext);

  [context.teleopCoral[0], context.setTeleopCoral[0]] = useState(context.teleopCoral[0]);
  [context.teleopCoral[1], context.setTeleopCoral[1]] = useState(context.teleopCoral[1]);
  [context.teleopCoral[2], context.setTeleopCoral[2]] = useState(context.teleopCoral[2]);
  [context.teleopCoral[3], context.setTeleopCoral[3]] = useState(context.teleopCoral[3]);

  return (
    <div className="flex flex-row flex-wrap w-80 justify-around gap-5">
      {[...Array(4).keys()].map((i) => <Incrementer text={`Level ${i + 1} Coral`} value={context.teleopCoral[i]} onChange={context.setTeleopCoral[i]} />)}
    </div>
  );
}

const AlgaeSection = () => {
  const context = useContext(AppContext);

  [context.teleopAlgae.processor, context.setTeleopAlgae.processor] = useState(context.teleopAlgae.processor);
  [context.teleopAlgae.barge, context.setTeleopAlgae.barge] = useState(context.teleopAlgae.barge);

  return (
    <div className="flex flex-col items-center">
      <Incrementer text="Processor" value={context.teleopAlgae.processor} onChange={context.setTeleopAlgae.processor} />
      <Incrementer text="Barge" value={context.teleopAlgae.barge} onChange={context.setTeleopAlgae.barge} />
    </div>
  );
}

const FoulSection = () => {
  const context = useContext(AppContext);

  [context.teleopFoul, context.setTeleopFoul] = useState(context.teleopFoul);

  return (
    <>
      <Incrementer text="Fouls" value={context.teleopFoul} onChange={context.setTeleopFoul} />
    </>
  );
}

const DefenseSection = () => {
  const context = useContext(AppContext);

  [context.teleopDefense, context.setTeleopDefense] = useState(context.teleopDefense);

  return (
    <div className="flex flex-row justify-center gap-1 items-center">
      <input className="w-3 h-3" type="checkbox" id="auto-mobility" defaultChecked={context.teleopDefense} onChange={(event) => context.setTeleopDefense && context.setTeleopDefense(event.target.checked)} />
      <label className="text-xl" htmlFor="auto-mobility">Defense</label>
    </div>
  );
}

const Page = () => {
  return (
    <>
      <div className='flex flex-col h-full w-full gap-10 text-white items-center text-4xl'>
        <h1 className="text-4xl text-center text-white my-4">
          Teleop
        </h1>
        <CoralSection />
        <AlgaeSection />
        <FoulSection />
        <DefenseSection />
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;