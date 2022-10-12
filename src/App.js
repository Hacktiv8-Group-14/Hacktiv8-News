import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepages';
import ProgrammingPage from './pages/ProgrammingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/programming' element={<ProgrammingPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
