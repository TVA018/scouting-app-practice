import { useContext, useState } from "react";
import Incrementer from "../../gui/Incrementer.tsx";
import NavigationBar from "../NavigationBar.tsx";
import { AppContext } from "../../lib/context.ts";

const Page = () => {
  const context = useContext(AppContext);

  [context.autoCoral[0], context.setAutoCoral[0]] = useState(context.autoCoral[0]);
  [context.autoCoral[1], context.setAutoCoral[1]] = useState(context.autoCoral[1]);
  [context.autoCoral[2], context.setAutoCoral[2]] = useState(context.autoCoral[2]);
  [context.autoCoral[3], context.setAutoCoral[3]] = useState(context.autoCoral[3]);

  return (
    <>
      <div className='flex flex-col h-full w-full gap-4 text-white items-center text-4xl'>
        THIS IS THE AUTO PAGE
        <div className="flex flex-row flex-wrap w-60 gap-5">
          {[...Array(4).keys()].map((i) => <Incrementer text={`Level ${i + 1} Coral`} value={context.autoCoral[i]} onChange={context.setAutoCoral[i]} />)}
        </div>
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;