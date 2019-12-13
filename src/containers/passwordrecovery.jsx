import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux'
import '../styles/passwordrecovery.css'

const renderField = ({ input, placeholder, label, type, meta: { touched, error, warning } }) => (
    <div className={`form-group  ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={placeholder} type={type} />
            <div className="text-help">
                {touched && ((error && <span>{error}</span>))}
            </div>
        </div>
    </div>
)

const validate = values => {
    const errors = {}
    if (!values.userName) {
        errors.userName = 'Enter your mail id(User id) to get link'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userName)) {
        errors.userName = 'Invalid email address'
    }
    return errors
}

class PasswordRecovery extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section className="bag-password-container">
                <div className="bag-password-title">Reset Password Form</div>
                <div className="bag-password-form">
                    <div className="bag-password-title">Forget Password</div>
                    <div className="bag-password-desc"><p>Yo! Forget your password ?</p>No worries! Enter your email and we will send you a reset link<p></p></div>
                </div>
                <div className="">
                    <div className="txt-elt">
                        <Field tabIndex="0" name="userName" component={renderField} type="text" placeholder="bijendragupta23@gmail.com" />
                    </div>
                </div>
                <div className="pass-control">
                    <div className="pass-btn">
                        <button type="submit">Send Request</button>
                    </div>
                </div>
            </section>
        );
    }
}


let passwordRecovery = reduxForm({
    form: 'passwordRecovery', // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    fields: ['userName']
})(PasswordRecovery);

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch) => ({
    passwordRecovery: (email) => {
        return null;
    }
})

passwordRecovery = connect(mapStateToProps, mapDispatchToProps)(passwordRecovery);
export default passwordRecovery;