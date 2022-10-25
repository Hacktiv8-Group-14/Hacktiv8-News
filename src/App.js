import { BrowserRouter, Route, Routes } from "react-router-dom";
import { route } from "./component/atoms/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {route?.map((e) => (
          <Route path={e.path} element={<e.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
