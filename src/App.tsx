// THIS FILE SETS UP THE CONTEXT'S STATES AND ROUTING BEFOREHAND
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/Home/Page.tsx";
import AutoPage from "./components/Auto/Page.tsx";
import TeleopPage from "./components/Teleop/Page.tsx";
import EndgamePage from "./components/Endgame/Page.tsx";
import SubmitPage from "./components/Submit/Page.tsx";
import { SheetsManager } from "./lib/constants.ts";

const router = createBrowserRouter([
  {
    path: "/scouting-app-practice/",
    element: <HomePage />
  },
  {
    path: "/scouting-app-practice/auto",
    element: <AutoPage />
  },
  {
    path: "/scouting-app-practice/teleop",
    element: <TeleopPage />
  },
  {
    path: "/scouting-app-practice/endgame",
    element: <EndgamePage />
  },
  {
    path: "/scouting-app-practice/submit",
    element: <SubmitPage />
  },
]);

const App = () => {
  const testSheets = new SheetsManager("1lGAAYk_YGrNcs8Q-9KaKpuw68rTI_vqCP4hokhLk_u0");

  return (
    <RouterProvider router={router} />
  );
}

export default App;