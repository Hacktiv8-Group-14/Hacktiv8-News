import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepages';
import ProgrammingPage from './pages/ProgrammingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/programming' element={<ProgrammingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
