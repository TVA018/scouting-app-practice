import NavigationBar from "../NavigationBar.tsx";
import LabeledTextArea from "../../gui/LabeledTextArea.tsx";
import {useState} from "react";
import { useAppContext } from "../../lib/context.ts";

const Page = () => {
  const context = useAppContext();
  [context.commentary, context.setCommentary] = useState(context.commentary);

  return (
    <>
      <div className='flex flex-col h-full w-full gap-10 text-white items-center text-4xl'>
        <h1 className="text-4xl text-center font-bold text-white my-4">
          Submission
        </h1>
        <LabeledTextArea title="Commentary" value={context.commentary} onChange={(e) => context.setCommentary && context.setCommentary(e.target.value)} />
        <button className="text-xl bg-blue-500 hover:bg-blue-300 w-40 h-10 rounded-2xl border-1" onClick={() => {
          context.onSubmit();
        }}>Submit</button>
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;