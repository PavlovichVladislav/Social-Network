import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';
import Dialogs from '../components/Dialogs/Dialogs';

const App = ({appState, dispatch}) => {
  return (
    <Router>
      <div className='appWrapper'>
        <Header/>
        <Navbar/>
        <div className='appWrapperContent'>
          <Routes>
            <Route 
              path="/profile" 
              element={
                <Profile 
                  state={appState.profilePage}
                  dispatch={dispatch}
                />}
            />
            <Route 
              path="/messages" 
              element={
                <Dialogs 
                  state={appState.messagesPage}
                />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
} 

export default App;