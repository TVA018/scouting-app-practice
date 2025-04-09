import { useContext } from "react";
import Incrementer from "../../gui/Incrementer.tsx";
import NavigationBar from "../NavigationBar.tsx";
import { AppContext } from "../../lib/context.ts";

const CoralSection = () => {
  const context = useContext(AppContext);


  return (
    <div className="flex flex-row flex-wrap w-80 justify-around gap-8">
      {[...Array(4).keys()].map((i) => <Incrementer text={`Level ${i + 1} Coral`} value={context.autoCoral[i]} onChange={context.setAutoCoral[i]} />)}
    </div>
  );
}

const AlgaeSection = () => {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-row items-center gap-8">
      <Incrementer text="Processor" value={context.autoAlgae.processor} onChange={context.setAutoAlgae.processor} />
      <Incrementer text="Barge" value={context.autoAlgae.barge} onChange={context.setAutoAlgae.barge} />
    </div>
  );
}

const MobilitySection = () => {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-row justify-center items-center w-full my-0 gap-1.5">
      <input className="w-4 h-4" type="checkbox" id="auto-mobility" defaultChecked={context.autoMobility} onChange={(event) => context.setAutoMobility && context.setAutoMobility(event.target.checked)} />
      <label className="text-xl font-medium" htmlFor="auto-mobility">Mobility</label>
    </div>
  );
}

const Page = () => {
  return (
    <>
      <div className='flex flex-col h-auto w-full gap-10 pb-10 text-white font-bold items-center text-4xl'>
        <h1 className="text-4xl text-center text-white my-4">
          Auto
        </h1>
        <CoralSection />
        <AlgaeSection />
        <MobilitySection />
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;