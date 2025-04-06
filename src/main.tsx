import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import HomePage from "./components/Home/Page.tsx";
import AutoPage from "./components/Auto/Page.tsx";
import TeleopPage from "./components/Teleop/Page.tsx";
import EndgamePage from "./components/Endgame/Page.tsx";
import SubmitPage from "./components/Submit/Page.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
