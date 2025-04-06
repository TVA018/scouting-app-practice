import {Link} from "react-router-dom";

interface ButtonProps {
  text: string,
  url: string
}

const RedirectButton = ({text, url}: ButtonProps) => {
  return (
    <Link to={url}>
      <button className="text-md bg-blue-950 text-white h-20 w-[19vw] rounded-md">{text}</button>
    </Link>
  )
}

const NavigationBar = () => {
  return (
    <div className="absolute bottom-0 flex flex-row justify-between w-full my-0">
      <RedirectButton text="HOME" url="/" />
      <RedirectButton text="AUTO" url="/auto" />
      <RedirectButton text="TELEOP" url="/teleop" />
      <RedirectButton text="END" url="/endgame" />
      <RedirectButton text="SUBMIT" url="/submit" />
    </div>
  )
}

export default NavigationBar;