import '../global.css'
import {ChangeEvent, Dispatch, ReactNode, SetStateAction, useState} from "react";

interface Properties {
  children: ReactNode;
  value: string;
  id: string;
  name: string;
  width?: string;
  onChange?: Dispatch<SetStateAction<any>>; // What value of the app data does this input change
}

const TimeInput = ({id, name, children, value, width, onChange}: Properties) => {
  const divTailwindCSS = `flex flex-col ${width} align-center border-b-2 border-white`;
  const maxMinutes = 3;

  const [minutes, setMinutes] = useState(value.slice(0, 2));
  const [seconds, setSeconds] = useState(value.slice(3, 5));

  const updateTime = (currentMinutes: string, currentSeconds: string) => {
    if(!onChange){ return; }

    const newTime = `${currentMinutes.padStart(2, '0')}:${currentSeconds.padStart(2, '0')}`;
    onChange(newTime);
  }

  const minutesChanged = (event: ChangeEvent<HTMLInputElement>) => {
    let strippedMinutes = event.target.value.replace(/\D/g, "");
    const minutesNumber = Math.max(Math.min(parseInt(strippedMinutes), maxMinutes), 0);
    strippedMinutes = minutesNumber.toString().padStart(2, "0");
    setMinutes(strippedMinutes);

    updateTime(strippedMinutes, seconds);
  }

  const secondsChanged = (event: ChangeEvent<HTMLInputElement>) => {
    let strippedSeconds = event.target.value.replace(/\D/g, "");
    const minutesNumber = Math.max(Math.min(parseInt(strippedSeconds), 59), 0);
    strippedSeconds = minutesNumber.toString().padStart(2, "0");
    setSeconds(strippedSeconds);

    updateTime(minutes, strippedSeconds);
  }

  return (
    <div className={divTailwindCSS}>
      <label className="text-xl text-center text-white w-full" htmlFor={id}>{children}</label>
      <div className="flex flex-row justify-center items-center gap-1">
        <input type="number" min="0" max={maxMinutes} className='text-white text-xl text-right w-full' value={minutes} id={`${id}-minutes`} name={`${name}-minutes`} onChange={minutesChanged}></input>
        <span className="text-white text-xl text-center font-bold">:</span>
        <input type="number" min="0" max="59" className='text-white text-xl text-left w-full' value={seconds} id={`${id}-seconds`} name={`${name}-seconds`} onChange={secondsChanged}></input>
      </div>
    </div>
  )
}

export default TimeInput