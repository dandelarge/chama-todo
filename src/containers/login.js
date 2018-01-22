import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

import { login, loginSuccess, signup, googleLogin } from '../actions';

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
        <div className="mdl-card mdl-shadow--2dp login-card">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Welcome!</h2>
          </div>
          <div className="mdl-card__actions">
            <form onSubmit={e => {
              doLogin(e);
            }}>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                id="user"
                type="text"
                name="user"
                ref={(input) => {userField = input}}
              />
              <label
                className="mdl-textfield__label"
                htmlFor="user">
                email
              </label>
              </div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                  className="mdl-textfield__input"
                  type="password"
                  name="pass"
                  id="pass"
                  ref={(input) => { passField = input }}
                />
                <label
                  className="mdl-textfield__label"
                  htmlFor="pass">
                  password
                </label>
              </div>
              <div className="login-buttons">
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                  Login!
                </button>
                <span>Or</span>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  onClick={e => {
                  signup(userField.value, passField.value);
                }}>Signup</button>
              </div>
            </form>
          </div>
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={googleLogin}>Sign in with Google</button>
        </div>

    );
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({login, signup, loginSuccess, googleLogin}, dispatch);
};

const mapStateToProps = state => {
  return {user: state.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
