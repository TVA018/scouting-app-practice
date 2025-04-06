import '../global.css'
import {Dispatch, ReactNode, SetStateAction} from "react";

interface Properties {
    children: ReactNode;
    initialText?: string;
    id: string;
    name: string;
    width?: string;
    inputType?: string;
    onChange: Dispatch<SetStateAction<any>>; // What value of the app data does this input change
}

const LabeledInput = ({id, name, children, initialText, width, inputType = "text", onChange}: Properties) => {
  const divTailwindCSS = `flex flex-col ${width} align-center`;

  return (
    <div className={divTailwindCSS}>
        <label className="text-md text-center text-white w-full" htmlFor={id}>{children}</label>
        <input type={inputType} className='text-white border-b-2 border-white text-md text-center w-full' defaultValue={initialText} id={id} name={name} onChange={(e) => onChange(e.target.value)}></input>
    </div>
  )
}

export default LabeledInput