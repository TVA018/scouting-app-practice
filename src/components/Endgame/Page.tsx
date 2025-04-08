import NavigationBar from "../NavigationBar.tsx";
import {useContext, useState} from "react";
import {AppContext} from "../../lib/context.ts";

const Page = () => {
  const context = useContext(AppContext);
  [context.endgameClimb, context.setEndgameClimb] = useState(context.endgameClimb);

  return (
    <>
      <div className='flex flex-col h-full w-full gap-10 text-white items-center text-4xl'>
        <h1 className="text-4xl text-center text-white my-4">
          Endgame
        </h1>
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;