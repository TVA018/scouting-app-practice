import {Link} from "react-router-dom";

interface ButtonProps {
  text: string,
  url: string
}

const RedirectButton = ({text, url}: ButtonProps) => {
  const currentPathName = window.location.pathname;
  const targetLink = `/scouting-app-practice${url}`;
  const normal = "bg-blue-950";
  const light = "bg-blue-800";
  const buttonColors = `${(currentPathName == targetLink) ? light : normal} hover:${light}`;
  const buttonClass = `text-md ${buttonColors} cursor-pointer text-white h-20 w-[19vw] rounded-md`;

  return (
    <Link to={targetLink}>
      <button className={buttonClass}>{text}</button>
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