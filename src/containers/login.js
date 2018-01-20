import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions';

  const LoginForm =  withRouter(({ history, login, user }) => {

    const doLogin = (e, hostory) => {
      e.preventDefault();
      const form = e.target;
      login(form.user.value, form.pass.value);
      if(user.loggedIn) {
        history.push('/app');
      }
    };

    return (
      <div>
        <form onSubmit={e => doLogin(e, history)}>
          <input type="text" name="user" placeholder="user" />
          <input type="password" name="pass" placeholder="password"/>
          <button> Login!</button>
        </form>
      </div>
  )});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({login}, dispatch);
};

const mapStateToProps = state => {
  return {user: state.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
