// THIS FILE SETS UP THE CONTEXT'S STATES AND ROUTING BEFOREHAND
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/Home/Page.tsx";
import AutoPage from "./components/Auto/Page.tsx";
import TeleopPage from "./components/Teleop/Page.tsx";
import EndgamePage from "./components/Endgame/Page.tsx";
import SubmitPage from "./components/Submit/Page.tsx";
import {useContext, useState} from "react";
import {AppContext} from "./lib/context.ts";

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
  const context = useContext(AppContext);

  // REFACTOR TO SIMPLIFY WITH LOOPS LATER (i.e. CORAL)

  // Home
  [context.scouterName, context.setScouterName] = useState(context.scouterName);
  [context.matchNumber, context.setMatchNumber] = useState(context.matchNumber);
  [context.profile, context.setProfile] = useState(context.profile);
  [context.team, context.setTeam] = useState(context.team);
  [context.teamNumbers, context.setTeamNumbers] = useState(context.teamNumbers);
  [context.flipField, context.setFlipField] = useState(context.flipField);

  // Auto
  [context.autoCoral[0], context.setAutoCoral[0]] = useState(context.autoCoral[0]);
  [context.autoCoral[1], context.setAutoCoral[1]] = useState(context.autoCoral[1]);
  [context.autoCoral[2], context.setAutoCoral[2]] = useState(context.autoCoral[2]);
  [context.autoCoral[3], context.setAutoCoral[3]] = useState(context.autoCoral[3]);

  [context.autoAlgae.processor, context.setAutoAlgae.processor] = useState(context.autoAlgae.processor);
  [context.autoAlgae.barge, context.setAutoAlgae.barge] = useState(context.autoAlgae.barge);

  [context.autoMobility, context.setAutoMobility] = useState(context.autoMobility);

  // Teleop
  [context.teleopCoral[0], context.setTeleopCoral[0]] = useState(context.teleopCoral[0]);
  [context.teleopCoral[1], context.setTeleopCoral[1]] = useState(context.teleopCoral[1]);
  [context.teleopCoral[2], context.setTeleopCoral[2]] = useState(context.teleopCoral[2]);
  [context.teleopCoral[3], context.setTeleopCoral[3]] = useState(context.teleopCoral[3]);

  [context.teleopAlgae.processor, context.setTeleopAlgae.processor] = useState(context.teleopAlgae.processor);
  [context.teleopAlgae.barge, context.setTeleopAlgae.barge] = useState(context.teleopAlgae.barge);

  [context.teleopFoul, context.setTeleopFoul] = useState(context.teleopFoul);

  [context.teleopDefense, context.setTeleopDefense] = useState(context.teleopDefense);

  // Endgame
  [context.endgameClimb, context.setEndgameClimb] = useState(context.endgameClimb);

  return <RouterProvider router={router} />;
}

export default App;