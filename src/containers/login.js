import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

import { login, loginSuccess, signup } from '../actions';

const LoginForm =  withRouter(({ history, login, loginSuccess, signup, user }) => {

  firebase.auth().onAuthStateChanged(usr => {
    if(usr) {
      loginSuccess(usr);
      history.push('/app');
    }
  });

    function doLogin(e) {
      e.preventDefault();
      const form = e.target;
      login(form.user.value, form.pass.value).then(action => {
        if(action.payload.email) {
          history.push('/app');
        }

      });
    }

    let userField, passField;

      return (
        <div>
          <form onSubmit={e => {
            doLogin(e);
          }}>
            <input
              type="text"
              name="user"
              placeholder="user"
              ref={(input) => {userField = input}}
            />
            <input
              type="password"
              name="pass"
              placeholder="password"
              ref={(input) => { passField = input }}
            />
            <button>Login!</button>
            <button onClick={e => {
              signup(userField.value, passField.value);
            }}>Signup</button>
          </form>
        </div>
    );
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({login, signup, loginSuccess}, dispatch);
};

const mapStateToProps = state => {
  return {user: state.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
