import {ChangeEventHandler, useEffect, useRef} from "react";

interface Properties {
  title: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const LabeledTextArea = ({title, value, onChange}: Properties) =>{
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if(!textareaRef.current) return;

    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [value]);

  return (
    <div className="flex flex-col items-center w-80 gap-2">
      <h1 className="text-center text-3xl w-full">{title}</h1>
      <textarea
        ref={textareaRef}
        className="text-base w-full border-1 m-0 p-0 max-h-120"
        placeholder="Commentary goes here (optional)..."
        value={value}
        onChange={onChange} />
    </div>
  );
}

export default LabeledTextArea;