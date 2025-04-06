import {useContext} from "react";
import {AppContext} from "../../lib/context.ts";

const RetrieveDataButton = () => {
  const context = useContext(AppContext);
  const onClick = () => context.retrieveTBAData();

  return (
    <div className='flex flex-row w-full justify-around h-10'>
      <button itemType="button" className="cursor-pointer text-white bg-blue-950 w-40 h-full rounded-md hover:bg-blue-800" type="button" onClick={onClick}>Retrieve Data</button>
    </div>
  )
}

export default RetrieveDataButton;