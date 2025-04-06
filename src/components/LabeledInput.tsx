import '../global.css'
import {Dispatch, ReactNode, SetStateAction} from "react";

interface Properties {
    children: ReactNode;
    id: string;
    name: string;
    width?: string;
    inputType?: string;
    onChange: Dispatch<SetStateAction<any>>; // What value of the app data does this input change
}

const LabeledInput = ({id, name, children, width, inputType = "text", onChange}: Properties) => {
  const divTailwindCSS = `flex flex-col ${width} align-center`;

  return (
    <div className={divTailwindCSS}>
        <label className="text-md text-center w-full" htmlFor={id}>{children}</label>
        <input type={inputType} className='border-b-2 border-white text-md text-center w-full' id={id} name={name} onChange={(e) => onChange(e.target.value)}></input>
    </div>
  )
}

export default LabeledInput