import './App.css';
import { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Component } from 'react';
import { connect } from 'react-redux';

import HeaderContainer from '../components/Header/HeaderContainer';
import Navbar from '../components/Navbar/Navbar';
import ProfileContainer from '../components/Profile/ProfileContainer';
// import DialogsContainer from '../components/Dialogs/DialogsContainer';
import UsersContainer from '../components/Users/UsersContainer';
import Login from '../components/Login/LoginContainer';

import Preloader from '../components/common/Preloader/Preloader';

import { initializeApp } from '../Store/Reducers/appReducer';

const DialogsContainer = lazy(() => import('../components/Dialogs/DialogsContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render () {
    if (!this.props.initialized) return <Preloader/>

    return (
      <Router>
        <div className='appWrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='appWrapperContent'>
            <Suspense fallback={<Preloader/>}>
              <Routes>
                <Route 
                  path="/profile/:userId" 
                  element={<ProfileContainer/>}
                />
                <Route 
                  path="/messages" 
                  element={
                    <DialogsContainer/>
                  } 
                />
                <Route
                  path="/users" 
                  element={<UsersContainer/>} 
                />
                <Route
                  path="/login" 
                  element={<Login/>} 
                />
              </Routes>
            </Suspense>
          </div>
        </div>
      </Router>
    )
  }
} 

const mapStateToProps = (state) => ({initialized: state.app.initialized})

export default  connect(mapStateToProps, { initializeApp })(App);