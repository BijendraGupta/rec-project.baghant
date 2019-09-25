import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/home'
import Login from './containers/login'
import Signup from './containers/signup'
import About from './components/about'
import CourseFinder from './containers/course-finder'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import CourseDisc from './containers/course-disc'
import Header from './components/header';
import PasswordRecovery from  './containers/passwordrecovery'
import Footer from './components/footer';
import {connect} from 'react-redux';
import {clearTokenId} from './redux/action/action'
import {setCookie, getCookie} from './components/cookies'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      spinerClass:""
    }
  }
  render() {
    
    let spinerClass=this.props.isSpiner===true?"spinnerClass":"";
    return (
      <BrowserRouter> 
      <div className={spinerClass}>       
      <Header  isLogin={this.props.isLogin} click={this.props.clearTokenId}/>
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/coursefinder' exact component={CourseFinder} />
          <Route path='/home' exact component={Home} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/about' exact component={About} />
          <Route path='/coursedisc/:coursedetails' exact component={CourseDisc} />
          <Route path='/passwordrecovery' exact component={PasswordRecovery} />
        </Switch>           
        <Footer />
        </div>
      </BrowserRouter> 
    );
  }
}

const mapStateToProps=state=>{
  return {
    isLogin:state.user["authSuccess"]!=null?state.user["authSuccess"]["data"]["idToken"]!=null:false,
    isSpiner:state.user["spinner"]!=null?state.user["spinner"]:false
  };
}

const mapDispatchToProps=(dispatch)=>({
  clearTokenId:()=>{
    setCookie("tokenId","",0);
    setCookie("UserName","");
    return dispatch(clearTokenId());
}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

