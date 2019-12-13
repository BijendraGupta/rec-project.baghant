import React from "react"

import '../styles/signup.css'
import dp from '../images/profile.JPG';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import TermsAndConditionPopup from '../components/terms-and-condition-popup'
import {connect} from 'react-redux';
import {doRegister} from '../redux/action/action'
import {reset} from 'redux-form';
import  * as actions from '../redux/action/auth'
import  * as constant from '../constants/constant'
import {setCookie, getCookie} from '../components/cookies'

const validate = values => {
    const errors = {}
    if (!values.emailId) {
      errors.emailId = 'Enter Mail Id'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)) {
      errors.emailId = 'Invalid email address'
    }
    if (!values.mobileNo) {
      errors.mobileNo = 'Enter Mobile No'
    } else if (isNaN(Number(values.mobileNo))) {
      errors.mobileNo = 'Must be a number'
    } else if (values.mobileNo.length !=10) {
        errors.mobileNo = 'Sorry, Mobile Number must be 10 digit Number'
    }    
    if(values.rePassword!=values.password) {
        errors.password = 'Must be Password and Re-Enter Password same'
        errors.rePassword = 'Must be Password and Re-Enter Password same'
      }
    if (!values.password) {
        errors.password = 'Enter Password'
      } else if (values.password.length > 20 || values.password.length <7) {
        errors.password = 'Must be greater then 7 and less than 20 characters'
      }
      if (!values.rePassword) {
        errors.rePassword = 'Enter Password'
      } else if (values.rePassword.length > 20 || values.rePassword.length <7) {
        errors.rePassword = 'Must be greater then 7 and less than 20 characters'
      }
      console.log(errors);
    return errors
  }

  const renderField = ({ input, placeholder, label, type, meta: { touched, error, warning } }) => (
    <div className={`form-group  ${touched && error ?'has-danger':''}`}>
      <label>{label}</label>
      <div>
        <input {...input} className="form-control" placeholder={placeholder} type={type}/>
        <div className="text-help">
        {touched && ((error && <span>{error}</span>) )}
        </div>                
      </div>
    </div>
  )
class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showtc: false,
            tcchkbox: true,
            spinnerclasses:"display_none bag-loader"
        }
        if(getCookie("tokenId")!=="")
        this.props.history.push("/home");
    }

    
    
    showTcPoup() {
        this.setState({ showtc: true });
    }
    createUser=(form)=> {
        this.setState({spinnerclasses:"bag-loader"});
        const {createRecord, resetForm} = this.props;
        this.props.onAuth(form.emailId, form.password).then(res=>{
            this.setState({spinnerclasses:"bag-loader display_none"});            
            if(res.status==200){
                setCookie("tokenId",res["data"]["idToken"],res["data"]["expiresIn"]);
                setCookie("UserName",res["data"]["email"],res["data"]["expiresIn"]);
            this.props.register(form,res.data.idToken)
            .then(res=>{
                if(res.status==200){
                alert("Your account has een created");
                resetForm();    
            }else {
                alert("Your account has been created but we are not able to store all your info");
                }
            })
            this.props.history.push("/home");
        }else {
            let con=res.response.data.error.message;
            if(constant[con]==undefined)
            con="Status "+res.response.status+ " Message"+res.response.data.error.message;
            else
            con=constant[con];
            alert(con);
        }
        }).catch(err=>{
            this.setState({spinnerclasses:"bag-loader display_none"});
            alert(err);
        })
     
    }
    tcAccptDecline = (event) => {
        this.setState({ showtc: false });
        if (event.target.value == "true") {
            this.setState({ tcchkbox: true });
        } else if (event.target.value == "false") {
            this.setState({ tcchkbox: false });
        }
    }
    render() {
        const {handleSubmit,resetForm} = this.props; 
        const {  pristine, reset, submitting} = this.props;
        let style = {};
        if (this.state.showtc) {
            style = { background: 'rgba(0, 0, 0, 0.7)' }
        } else {
            style = {};
        }
        const Checkbox = ({ input, meta: { touched, error } }) => (
            <div style={{float:"left" ,border: touched && error ? "1px solid red" : "none" }}>
             <input type="checkbox" {...input} defaultChecked/>
            </div>
        )
      
          

        return (
            <div style={style}>
                {this.state.showtc && <TermsAndConditionPopup tcAccptDecline={this.tcAccptDecline} />}
                <section className="signup-form">
                    <section className="signup-left">
                        <form onSubmit={handleSubmit(form=>this.createUser(form))}>
                            <div className="signup-profile">
                                <img src={dp} alt="Profile" />
                            </div>
                            <div className="signup-txt">Email ID</div>
                            <div className="signup-ele">
                                <Field name="emailId" tabIndex="0" component={renderField} type="text" placeholder="sample@gmail.com" />
                            </div>
                            <div className="signup-txt">Mobile No</div>
                            <div className="signup-ele">
                                <Field name="mobileNo" tabIndex="1" component={renderField} type="text" placeholder="+91-0000000000" />
                            </div>                           
                            <div className="signup-txt">Enter Password</div>
                            <div className="signup-ele">
                                <Field name="password"  tabIndex="2" component={renderField} type="password" placeholder="******" />
                            </div>
                            <div className="signup-txt">Re-Enter Password</div>
                            <div className="signup-ele">
                                <Field name="rePassword" tabIndex="3" component={renderField} type="password" placeholder="******" />                                
                            </div>                           
                            <div className="signup-rem-check">
                            <Field component={Checkbox} name="tc" tabIndex="4"  />                                
                            <p onClick={this.showTcPoup.bind(this)}>By creating an account you agree to our Terms & Privacy. </p>                             
                            </div>
                            <div className="signup-control">
                                <div className="signup-btn">
                                <button type="submit">Sign Up</button>
                                </div>
                            </div>
                            <div className="add-sgnup"><article>
                                Do you have account ?
                           <p><Link to="/login">Click here to Login</Link> </p></article></div>
                        </form>
                    </section>
                    <section className="signup-right">
                        <div className="add-sgnup"><article>
                            Do you have account ?
                           <p><Link to="/login">Click here to Login</Link></p></article></div>
                    </section>
                </section>
                <div className={this.state.spinnerclasses}></div>
            </div >
        )
    }

}

// Decorate the form component
// create new, "configured" function
// let createReduxForm = reduxForm({ form: 'registration' })

// // evaluate it for ContactForm component
// Signup = createReduxForm(Signup)

// export default Signup;

let SignUp=reduxForm({
    form: 'registration', // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    fields: [ 'password', 'emailId', 'rePassword', 'tc', 'mobileNo']
  })(Signup);

  const mapStateToProps=state=>{
      return {};
  }

  const mapDispatchToProps=(dispatch)=>({
      register:(payload,token)=>{
          return dispatch(doRegister(payload,token));
      } ,
      onAuth:(email,password)=>{
        return dispatch(actions.auth(email,password,false));
    } ,
      resetForm:()=>{dispatch(reset('registration'))} 
  })

  SignUp=connect(mapStateToProps, mapDispatchToProps)(SignUp);
  export default SignUp;