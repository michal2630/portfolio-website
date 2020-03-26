import React from 'react';
import axios from 'axios';
import MyEmail from './Email';
import { renderEmail } from 'react-html-email';
import AppWrapper from '../Parts/AppWrapper';
import Background from '../Parts/Background';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formValid: false,
        errorCount: null, 
        name: null,
        email: null,
        message: null,
        errors: {
          name: '',
          email: '',
          message: '',
        }
       };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
     
    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 2
            ? 'Enter your name!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'message': 
        errors.message = 
          value.length < 4
            ? 'You need to fill this input'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if(this.state.email != null && this.state.email.length > 0 &&
      this.state.name != null && this.state.name.length > 0 &&
      this.state.message != null && this.state.message.length > 0 &&
      validateForm(this.state.errors)) {
      this.setState({formValid: validateForm(this.state.errors)});
      this.setState({errorCount: countErrors(this.state.errors)});
      
      const messageHtml =  renderEmail(
        <MyEmail 
          name={this.state.name} 
          message={this.state.message} 
          email={this.state.email} 
        />);

        axios({
            method: "POST",
            url: "http://localhost:5000/send",
            data: {
                from: 'tytanus56@o2.pl',
                to: 'mike.mich1996@gmail.com',
                messageHtml: messageHtml
            }
        }).then((response) => {
            console.log(response);
            if (response.data.msg === 'success') {
                alert("Email sent, thank you!");
            } else if (response.data.msg === 'fail') {
                alert("Something went wrong. Try again")
            }
        })
        .then(this.setState({message: '', name: '', email: ''}));
    }else{
      alert('Form is not valid')
    }
  }

    render() {
      const {errors, formValid} = this.state;
      return (
        <AppWrapper>

          <Background />

          <h1>Contact Me</h1>
          <div className='form-wrapper'>
              <h4>If you have any questions<br/> get in touch</h4>
              <form onSubmit={this.handleSubmit} noValidate>
                <div className='contact-field'>
                  <input 
                    type='text' 
                    name='name' 
                    placeholder='Name'
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    noValidate 
                  />
                  {errors.name.length > 0 && 
                    <span className='form-error'>{errors.name}</span>}
                </div>
                <div className='contact-field'>
                  <input 
                    type='email' 
                    name='email' 
                    placeholder='Email Address'
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    noValidate 
                  />
                  {errors.email.length > 0 && 
                    <span className='error form-error'>{errors.email}</span>}
                </div>

                <div className='contact-field'>
                  <textarea 
                    type='text'
                    className='contact-message' 
                    name='message' 
                    placeholder='Your Message'
                    onChange={this.handleChange} 
                    noValidate 
                    value={this.state.message}
                  />
                  {errors.message.length > 0 && 
                    <span className='message-field form-error'>{errors.message}</span>}
                </div>
                <div className='info'>
                </div>
                <div className='submit'>
                  <button>Send a message</button>
                </div>
                {this.state.errorCount !== null ? <p className="form-status"> {formValid ? 'Message has been send ✅' : 'invalid ❌'}</p> : 'Form not submitted'}
              </form>
            </div>
        </AppWrapper>
      )
    }
  }


export default Contact;

