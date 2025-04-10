import '../global.css'
import {Dispatch, ReactNode, SetStateAction} from "react";

interface Properties {
    children: ReactNode;
    value: string;
    id: string;
    name: string;
    width?: string;
    inputType?: string;
    onChange?: Dispatch<SetStateAction<any>>; // What value of the app data does this input change
}

const LabeledInput = ({id, name, children, value, width, inputType = "text", onChange}: Properties) => {
  const divTailwindCSS = `flex flex-col ${width} align-center`;

  return (
    <div className={divTailwindCSS}>
        <label className="text-xl text-center text-white w-full" htmlFor={id}>{children}</label>
        <input type={inputType} className='text-white border-b-2 border-white text-lg text-center w-full' value={value} id={id} name={name} onChange={(e) => onChange && onChange(e.target.value)}></input>
    </div>
  )
}

export default LabeledInput