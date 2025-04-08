import {Link} from "react-router-dom";

interface ButtonProps {
  text: string,
  url: string
}

const RedirectButton = ({text, url}: ButtonProps) => {
  return (
    <Link to={`/scouting-app-practice${url}`}>
      <button className="text-md bg-blue-950 hover:bg-blue-800 cursor-pointer text-white h-20 w-[19vw] rounded-md">{text}</button>
    </Link>
  )
}

const NavigationBar = () => {
  return (
    <div className="sticky bottom-2 flex flex-row justify-around w-full">
      <RedirectButton text="HOME" url="/" />
      <RedirectButton text="AUTO" url="/auto" />
      <RedirectButton text="TELEOP" url="/teleop" />
      <RedirectButton text="END" url="/endgame" />
      <RedirectButton text="SUBMIT" url="/submit" />
    </div>
  )
}

export default NavigationBar;