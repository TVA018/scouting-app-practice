import { Dispatch, SetStateAction } from "react";

interface IncrementerProps {
    text: string;
    value: number;
    onChange?: Dispatch<SetStateAction<number>>;
}

const Incrementer = ({text, value, onChange}: IncrementerProps) => {
    if(!onChange){ return; }

    const increment = () => onChange(value + 1);
    const decrement = () => onChange(Math.max(value - 1, 0)); // Prevent number from going into the negatives
    const parentDivTCSS = `flex flex-col justify-center items-center w-35`;
    const childDivTCss = `flex flex-row w-35 items-center justify-center`;
    const buttonHTMLClass = "w-12 h-12 bg-blue-950 rounded-4xl text-xl hover:bg-blue-800";

    return (
        <div className={parentDivTCSS}>
            <h1 className="text-center text-xl">{text}</h1>
            <div className={childDivTCss}>
                <button className={buttonHTMLClass} onClick={decrement}>-</button>
                <h1 className="w-10 text-center text-2xl">{value}</h1>
                <button className={buttonHTMLClass} onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Incrementer