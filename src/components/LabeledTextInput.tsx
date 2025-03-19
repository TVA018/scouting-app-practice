import '../global.css'

interface Properties {
    children: any;
    id: string;
    name: string;
    width?: string;
}

const LabeledTextInput = ({id, name, children, width}: Properties) => {
  const divTailwindCSS = `flex flex-col ${width} align-center`

  return (
    <div className={divTailwindCSS}>
        <label className="text-md text-center w-full" htmlFor={id}>{children}</label>
        <input type="text" className='border-b-2 border-white text-md text-center w-full' id={id} name={name}></input>
    </div>
  )
}

export default LabeledTextInput