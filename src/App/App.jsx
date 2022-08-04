import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';
import DialogsContainer from '../components/Dialogs/DialogsContainer';
import UsersContainer from '../components/Users/UsersContainer';

const App = (props) => {
  return (
    <Router>
      <div className='appWrapper'>
        <Header/>
        <Navbar/>
        <div className='appWrapperContent'>
          <Routes>
            <Route 
              path="/profile" 
              element={<Profile/>}
            />
            <Route 
              path="/messages" 
              element={<DialogsContainer/>} 
            />
            <Route
              path="/users" 
              element={<UsersContainer/>} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
} 

export default App;