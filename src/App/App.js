import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';
import Dialogs from '../components/Dialogs/Dialogs';

const App = (props) => {

  return (
    <Router>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper__content'>
          <Routes>
            <Route 
              path="/profile" 
              element={
                <Profile 
                  state={props.appState.profilePage}
                  dispatch={props.dispatch}
                />}
            />
            <Route 
              path="/messages" 
              element={
                <Dialogs state={props.appState.messagesPage}/>} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
} 

export default App;