import CovidPage from "../pages/CovidPage";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import IndonesiaPage from "../pages/IndonesiaPage";
import ProgrammingPage from "../pages/ProgammingPage";
import SavedPage from "../pages/SavedPage";
import Search from "../pages/Search";

export const route = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/indonesia",
    element: IndonesiaPage,
  },
  {
    path: "/programming",
    element: ProgrammingPage,
  },
  {
    path: "/saved",
    element: SavedPage,
  },
  {
    path: "/covid",
    element: CovidPage,
  },
  {
    path: "/q=:value",
    element: Search,
  },
  {
    path: "*",
    element: Error,
  },
];

export default { route };
