import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './com/MainPage';
import Calculate from './com/Calculate';
import Login from './com/Login';
import Registration from './com/Registration';
import CleaningChat from './com/CleaningChat';

function App() {
  return (
      <Router>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<MainPage/>}/>
              <Route exact path="/Calculate" element={<Calculate/>}/>
              <Route exact path="/Login" element={<Login/>}/>
              <Route exact path="/Registration" element={<Registration/>}/>
              <Route exact path="/CleanChat" element={<CleaningChat/>}/>
              <Route path="/*" element={<DefaultLayout/>}/>
            </Routes>
          </div>
      </Router>
  );
}

function DefaultLayout() {
  return (
    <>
      <div className="Content">
        <Routes>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </div>
    </>
  );
}

function NotFound() {
  return (
    <div className="App">
      <h1 class="text-6xl font-bold text-red-500">404</h1>
    </div>    
  );
}
export default App;
