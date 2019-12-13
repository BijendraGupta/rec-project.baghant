import React from "react"
import '../styles/style.css'
import { NavLink } from 'react-router-dom'
import {browserHistory} from 'react-router';
// import { withRouter  } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import {setCookie, getCookie} from './cookies'
import logo from '../images/logor.png';
const history = createHistory();
export default class Header extends React.Component {

    constructor() {
        super();
        this.state = { menuCollapse: false }
    }

    redirectLogin(){
        // e.preventDefault();
        //  history.push('/login');
    //    this.context.router.history.push('/login');
       // return <Redirect to='/login'/>;
    //  <Redirect to={{ pathname: "/login"}} /> 
   history.push({pathname:'/login'});
    }

    menuIconCollapse() {
        this.setState({ menuCollapse: !this.state.menuCollapse });
    }

    redirectMenu(){
        window.red
    }

    render() {
        let isLoginByCookies=getCookie("tokenId")==""?false:true;
        return (
            <header>
                <div className="bag-navbar">
                    <div className="heading-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    <div className="bag-left">Coders of Bihar</div>
                    <div className="bag-right">
                    {isLoginByCookies &&
                        <NavLink className="bag-navitem" activeClassName="active" to="/home">Home</NavLink>}
                        {isLoginByCookies &&
                        <NavLink className="bag-navitem" activeClassName="active" to="/coursefinder">Course</NavLink>}
                        <NavLink className="bag-navitem" activeClassName="active" to="/about">About</NavLink>
                        {isLoginByCookies || this.props.isLogin===true?<
                            NavLink className="bag-navitem" to="/login"  activeClassName="active"  onClick={this.props.click}> Logout</NavLink>:
                            <NavLink className="bag-navitem" activeClassName="active" to="/login">Login</NavLink>}
                            {isLoginByCookies || this.props.isLogin===true?null:
                            <NavLink className="bag-navitem" activeClassName="active"  to="/signup">Sign Up</NavLink>}
                         <div className="bag-menuicon" onClick={this.menuIconCollapse.bind(this)}>
                                <div className="menu-bar"></div>
                                <div className="menu-bar"></div>
                                <div className="menu-bar"></div>
                         </div>
                    </div>
                    {this.state.menuCollapse && 
                     <div className="bag-menu">
                     {isLoginByCookies &&
                        <NavLink activeClassName="active" className="bag-navitem" to="/home">Home</NavLink>}
                        {isLoginByCookies && 
                        <NavLink activeClassName="active" className="bag-navitem" to="/coursefinder">Course</NavLink>}
                        <NavLink activeClassName="active" className="bag-navitem" to="/about">About</NavLink>
                        {isLoginByCookies || this.props.isLogin===true?<
                            NavLink className="bag-navitem"  activeClassName="active"  to="/login" onClick={this.props.click}> Logout</NavLink>:
                            <NavLink activeClassName="active" activeClassName="active"activeClassName="active" className="bag-navitem" to="/login">Login</NavLink>}
                            {isLoginByCookies || this.props.isLogin===true?null:
                            <NavLink activeClassName="active"className="bag-navitem"  to="/signup">Sign Up</NavLink>}
                    </div>
                    }
                </div>
            </header>
        );
    }

}