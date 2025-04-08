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
    const parentDivTCSS = `flex flex-col justify-center items-center w-30`;
    const childDivTCss = `flex flex-row w-30 items-center justify-center`;
    const buttonHTMLClass = "w-8 h-8 bg-blue-950 rounded-4xl text-base hover:bg-blue-800";

    return (
        <div className={parentDivTCSS}>
            <h1 className="text-center text-lg">{text}</h1>
            <div className={childDivTCss}>
                <button className={buttonHTMLClass} onClick={decrement}>-</button>
                <h1 className="w-10 text-center text-lg">{value}</h1>
                <button className={buttonHTMLClass} onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Incrementer