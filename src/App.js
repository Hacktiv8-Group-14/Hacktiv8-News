import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CovidPage from './pages/CovidPage';
import Error from './pages/Error';
import HomePage from './pages/HomePage';
import IndonesiaPage from './pages/IndonesiaPage';
import ProgrammingPage from './pages/ProgrammingPage';
import SavedPage from './pages/SavedPage';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/indonesia' element={<IndonesiaPage/>}/>
          <Route path='/programming' element={<ProgrammingPage/>}/>
          <Route path='/saved' element={<SavedPage/>}/>
          <Route path='/covid' element={<CovidPage/>}/>
          <Route path='/q=:value' element={<Search/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
