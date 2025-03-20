import '../global.css'
import {ReactNode} from "react";

interface Properties {
    children: ReactNode;
    id: string;
    name: string;
    width?: string;
    inputType?: string;
}

const LabeledInput = ({id, name, children, width, inputType="text"}: Properties) => {
  const divTailwindCSS = `flex flex-col ${width} align-center`;

  return (
    <div className={divTailwindCSS}>
        <label className="text-md text-center w-full" htmlFor={id}>{children}</label>
        <input type={inputType} className='border-b-2 border-white text-md text-center w-full' id={id} name={name}></input>
    </div>
  )
}

export default LabeledInput