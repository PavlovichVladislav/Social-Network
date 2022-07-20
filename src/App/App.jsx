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

const App = ({store}) => {
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
                  store={store}
                />}
            />
            <Route 
              path="/messages" 
              element={
                <DialogsContainer 
                  store={store}
                />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
} 

export default App;