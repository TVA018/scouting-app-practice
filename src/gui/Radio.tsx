import {ChangeEventHandler} from "react";

interface RadioProps<T> {
  text: string;
  id: string;
  name: string,
  value: T;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
}

const Radio = <T,>({text, id, name, value, onChange, defaultChecked=false}: RadioProps<T>) => {
  return (
    <div className="flex flex-row gap-2">
      <input type="radio" name={name} id={id} value={`${value}`} onChange={onChange} defaultChecked={defaultChecked} />
      <label className="text-white text-xl" htmlFor={id}>{text}</label>
    </div>
  )
}

export default Radio;