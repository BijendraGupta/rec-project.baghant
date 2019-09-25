import React from "react"
import '../styles/login.css'
import dp from '../images/profile.JPG';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {connect} from 'react-redux';
import  * as actions from '../redux/action/auth'
import  * as constant from '../constants/constant'
import {setCookie, getCookie} from '../components/cookies'
const validate = values => {
    const errors = {}
    if (!values.userName) {
        errors.userName = 'Enter Mail Id'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userName)) {
        errors.userName = 'Invalid email address'
      }
  
    if (!values.password) {
        errors.password = 'Enter Password'
      } else if (values.password.length > 20 || values.password.length <7) {
        errors.password = 'Must be greater then 7 and less than 20 characters'
      }
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
 class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            spinnerclasses:"display_none bag-loader",
            data:{},
            error:false,
            errorMsg:{}
        }
        if(getCookie("tokenId")!=="")
        this.props.history.push("/home");
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
          this.setState({data:res.json()});
        }).catch(error=>
                 {
          this.setState({error:true,errorMsg:error})});
     
      }

    loginUser=(form)=> {
        this.setState({spinnerclasses:"bag-loader"});
        this.props.onAuth(form.userName, form.password).then(res=>{            
            this.setState({spinnerclasses:"bag-loader display_none"});
            if(res.status==200){
            setCookie("tokenId",res["data"]["idToken"],res["data"]["expiresIn"]);
            setCookie("UserName",res["data"]["email"],res["data"]["expiresIn"]);
            console.log("Login Success");
            this.props.history.push("/home");
        }else {
            let con=res.response.data.error.message;
            if(constant[con]==undefined)
            con="Status "+res.response.status+ " Message "+res.response.data.error.message;
            else
            con=constant[con];
            alert(con);
        }
        }).catch(err=>{            
            this.setState({spinnerclasses:"bag-loader display_none"});
            alert(err);
        })
    }
    render() {
        const {handleSubmit} =this.props;
       
        return (
            <div>
                dfdfd
                {this.state.error ?this.state.errorMsg: this.state.data}
                <section className="login-form">
                    <section className="login-left">
                    <form onSubmit={handleSubmit(form=>this.loginUser(form))}>
                        <div className="login-profile">
                            <img src={dp} alt="Profile" />
                        </div>
                        <div className="login-txt">User Name</div>
                        <div className="login-ele">
                        <Field tabindex="0" name="userName" component={renderField} type="text" placeholder="bijendragupta23@gmail.com" />
                        </div>
                        <div className="login-txt">Password</div>
                        <div className="login-ele"><Field name="password" tabindex="0" component={renderField} type="password" placeholder="******" /></div>                        
                        <div className="login-rem-check">
                        <Field tabindex="0" name="keepSignIn" component="input" type="checkbox" defaultChecked={false}/><p>Keep me Signed In </p>
                        </div>
                        <div className="login-control">
                            <div className="login-btn">
                                <button type="submit">Sign In</button>
                            </div>
                        </div>
                    </form>
                         <div className="add-sgnup"><article> 
                         <p><Link to="/passwordrecovery"><strong>Forget Password</strong></Link></p>
                           <p><Link to="/signup"><strong>Create Account</strong></Link></p>                           
                           </article></div>
                    </section>
                    <section className="login-right">
                        <div className="add-sgnup"><article> 
                            Don't have account ?
                           <p><Link to="/signup">Create It</Link></p></article></div>
                    </section>
                </section>
                <div className={this.state.spinnerclasses}></div>
            </div >
        )
    }

}

  
let login=reduxForm({
    form: 'loginform', // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    fields: ['userName', 'password','keepSignIn']
  })(Login);

  const mapStateToProps=state=>{
      return {};
  }

  const mapDispatchToProps=(dispatch)=>({
      onAuth:(email,password)=>{
          return dispatch(actions.auth(email,password,true));
      } 
  })

  login=connect(mapStateToProps, mapDispatchToProps)(login);
  export default login;