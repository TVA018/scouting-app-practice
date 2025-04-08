import { useContext, useState } from "react";
import Incrementer from "../../gui/Incrementer.tsx";
import NavigationBar from "../NavigationBar.tsx";
import { AppContext } from "../../lib/context.ts";

const CoralSection = () => {
  const context = useContext(AppContext);

  [context.autoCoral[0], context.setAutoCoral[0]] = useState(context.autoCoral[0]);
  [context.autoCoral[1], context.setAutoCoral[1]] = useState(context.autoCoral[1]);
  [context.autoCoral[2], context.setAutoCoral[2]] = useState(context.autoCoral[2]);
  [context.autoCoral[3], context.setAutoCoral[3]] = useState(context.autoCoral[3]);

  return (
    <div className="flex flex-row flex-wrap w-80 justify-around gap-5">
      {[...Array(4).keys()].map((i) => <Incrementer text={`Level ${i + 1} Coral`} value={context.autoCoral[i]} onChange={context.setAutoCoral[i]} />)}
    </div>
  );
}

const AlgaeSection = () => {
  const context = useContext(AppContext);

  [context.autoAlgae.processor, context.setAutoAlgae.processor] = useState(context.autoAlgae.processor);
  [context.autoAlgae.barge, context.setAutoAlgae.barge] = useState(context.autoAlgae.barge);

  return (
    <div className="flex flex-col items-center">
      <Incrementer text="Processor" value={context.autoAlgae.processor} onChange={context.setAutoAlgae.processor} />
      <Incrementer text="Barge" value={context.autoAlgae.barge} onChange={context.setAutoAlgae.barge} />
    </div>
  );
}

const MobilitySection = () => {
  const context = useContext(AppContext);
  [context.autoMobility, context.setAutoMobility] = useState(context.autoMobility);

  return (
    <div className="flex flex-row justify-center gap-1 items-center">
      <input className="w-3 h-3" type="checkbox" id="auto-mobility" defaultChecked={context.autoMobility} onChange={(event) => context.setAutoMobility && context.setAutoMobility(event.target.checked)} />
      <label className="text-xl" htmlFor="auto-mobility">Mobility</label>
    </div>
  );
}

const Page = () => {
  return (
    <>
      <div className='flex flex-col h-full w-full gap-10 text-white items-center text-4xl'>
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