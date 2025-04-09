import { useContext } from "react";
import Incrementer from "../../gui/Incrementer.tsx";
import NavigationBar from "../NavigationBar.tsx";
import { AppContext } from "../../lib/context.ts";

const CoralSection = () => {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-row flex-wrap w-80 justify-around gap-8">
      {[...Array(4).keys()].map((i) => <Incrementer text={`Level ${i + 1} Coral`} value={context.teleopCoral[i]} onChange={context.setTeleopCoral[i]} />)}
    </div>
  );
}

const AlgaeSection = () => {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-row items-center gap-8">
      <Incrementer text="Processor" value={context.teleopAlgae.processor} onChange={context.setTeleopAlgae.processor} />
      <Incrementer text="Barge" value={context.teleopAlgae.barge} onChange={context.setTeleopAlgae.barge} />
    </div>
  );
}

const FoulSection = () => {
  const context = useContext(AppContext);

  return (
    <>
      <Incrementer text="Fouls" value={context.teleopFoul} onChange={context.setTeleopFoul} />
    </>
  );
}

const DefenseSection = () => {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-row justify-center items-center w-35 my-0 gap-1.5">
      <input className="w-4 h-4" type="checkbox" id="auto-mobility" defaultChecked={context.teleopDefense} onChange={(event) => context.setTeleopDefense && context.setTeleopDefense(event.target.checked)} />
      <label className="text-2xl font-medium" htmlFor="auto-mobility">Defense</label>
    </div>
  );
}

const Page = () => {
  return (
    <>
      <div className='flex flex-col h-auto w-full gap-10 pb-10 text-white items-center text-4xl'>
        <h1 className="text-4xl text-center text-white font-bold my-4">
          Teleop
        </h1>
        <CoralSection />
        <AlgaeSection />
        <div className="flex flex-row items-center gap-8">
          <FoulSection />
          <DefenseSection />
        </div>
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;