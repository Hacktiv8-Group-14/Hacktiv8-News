import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CovidPage from './pages/CovidPage';
import Error from './pages/Error';
import Homepage from './pages/Homepages';
import ProgrammingPage from './pages/ProgrammingPage';
import SavedPage from './pages/SavedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/programming' element={<ProgrammingPage/>}/>
          <Route path='/saved' element={<SavedPage/>}/>
          <Route path='/covid' element={<CovidPage/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
