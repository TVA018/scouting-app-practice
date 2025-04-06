import {ChangeEventHandler} from "react";

interface RadioProps {
  text: string;
  id: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
}

const Radio = ({text, id, value, onChange, defaultChecked=false}: RadioProps) => {
  return (
    <div className="flex flex-row gap-2">
      <input type="radio" name="scouter-profile" id={id} value={value} onChange={onChange} defaultChecked={defaultChecked} />
      <label className="text-white" htmlFor={id}>{text}</label>
    </div>
  )
}

export default Radio;