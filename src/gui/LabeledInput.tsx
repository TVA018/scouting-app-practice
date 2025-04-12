import '../global.css'
import {Dispatch, ReactNode, SetStateAction} from "react";

interface Properties {
    children: ReactNode;
    value: string;
    id: string;
    name: string;
    width?: string;
    inputType?: string;
    onChange: (newValue: string) => void;
    onBlur?: () => void;
}

const LabeledInput = ({id, name, children, value, width, inputType = "text", onChange, onBlur}: Properties) => {
  const divTailwindCSS = `flex flex-col ${width} align-center`;

  return (
    <div className={divTailwindCSS}>
        <label className="text-xl text-center text-white w-full" htmlFor={id}>{children}</label>
        <input 
          type={inputType} 
          className='text-white border-b-2 border-white text-lg text-center w-full' 
          value={value} 
          id={id} 
          name={name} 
          onChange={(e) => onChange(e.target.value)} 
          onBlur={onBlur}
        />
    </div>
  )
}

export default LabeledInput