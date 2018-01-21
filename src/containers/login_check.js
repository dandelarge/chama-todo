import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';

import { loginSuccess } from '../actions';

const LoginCheck = ({user, loginSuccess}) => {
  if(!user.email) {
    return <Redirect to="/login"></Redirect>
  } else {
    return <Redirect to="/app"></Redirect>
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginSuccess
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCheck);
