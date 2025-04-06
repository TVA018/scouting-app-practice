import '../global.css'
import { ChangeEventHandler, Dispatch, SetStateAction, useContext, useState } from "react";
import { AppContext } from '../lib/context';

interface RadioProps {
  text: string;
  id: string;
  value: number;
  getOnChange: (value: number) => ChangeEventHandler<HTMLInputElement>;
}

function getUpdateProfileMethod(profileValue: number) {
  const context = useContext(AppContext);

  return () => context.profile = profileValue;
}

const Radio = ({text, id, value, getOnChange}: RadioProps) => {
  return (
    <div className="flex flex-row gap-2">
      <input type="radio" name="scouter-profile" id={id} value={value} onChange={getOnChange(value)} />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

const ProfileSelection = () => {
  const context = useContext(AppContext);

  const getOnChange = (value: number) => {
    return () => {
      if(context.setProfile){
        context.setProfile(value);
      }
    }
  }

  return (
    <div className="flex flex-row justify-center w-full gap-10">
      <div className="flex flex-col">
        <Radio text="Profile 1" id="radio-1" value={0} getOnChange={getOnChange} />
        <Radio text="Profile 2" id="radio-2" value={1} getOnChange={getOnChange} />
        <Radio text="Profile 3" id="radio-3" value={2} getOnChange={getOnChange} />
      </div>
      <div className="flex flex-col">
        <Radio text="Profile 4" id="radio-4" value={3} getOnChange={getOnChange} />
        <Radio text="Profile 5" id="radio-5" value={4} getOnChange={getOnChange} />
        <Radio text="Profile 6" id="radio-6" value={5} getOnChange={getOnChange} />
      </div>
    </div>
  )
}

export default ProfileSelection