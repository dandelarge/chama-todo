import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Redirect} from 'react-router-dom';
import { login, logout } from '../actions'

const LoginCheck = ({user}) => {

  console.log(user);

  if(!user.loggedIn) {
    return <Redirect to="/login"></Redirect>
  }

  return <Redirect to="/app"></Redirect>


  //   return (
  //     <div>
  //       <h2>{getLoginStatus(props.user)}</h2>
  //       <button onClick={e => {
  //         props.login('Daniel', '123');
  //         console.log(props.user.loggedIn);
  //       }}> Login!</button>
  //       <button onClick={e => props.logout('Daniel')}> Logout :(</button>
  //     </div>
  //   );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    logout
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCheck);
