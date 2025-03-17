import React, { Children } from 'react';

interface Properties {
    children: any;
    id: string;
    name: string;
    width?: string;
}

const LabeledTextInput = ({id, name, children, width="4"}: Properties) => {
  return (
    <div className='flex flex-col align-center'>
        <label className={`text-md text-center w-${width}`} htmlFor={id}>{children}</label>
        <input type="text" className='border-b-2 border-white text-md text-center' id={id} name={name}></input>
    </div>
  )
}

export default LabeledTextInput