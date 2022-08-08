import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HeaderContainer from '../components/Header/HeaderContainer';
import Navbar from '../components/Navbar/Navbar';
import ProfileContainer from '../components/Profile/ProfileContainer';
import DialogsContainer from '../components/Dialogs/DialogsContainer';
import UsersContainer from '../components/Users/UsersContainer';

const App = (props) => {
  return (
    <Router>
      <div className='appWrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='appWrapperContent'>
          <Routes>
            <Route 
              path="/profile/:userId" 
              element={<ProfileContainer/>}
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