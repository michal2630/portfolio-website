import React from 'react';
import axios from 'axios';
import MyEmail from './Email';
import { renderEmail } from 'react-html-email';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        name: '', 
        message: '', 
        email: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
      event.preventDefault();
        
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
        }).then(this.setState({message: '', name: '', email: ''}));
    }

    render() {
      return (
        <form className="mailing-form">
          <h1>Let's see if it works</h1>
          <div>

          <label for="name">
            Name:
            <input 
              type="text" 
              name="name" 
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
          </label>

          <label for="email">
            Email:
            <input 
              type="email" 
              name="email" 
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </label>

            <textarea
              id="mailing-form"
              name="message"
              onChange={this.handleChange}
              placeholder="Post some lorem ipsum here"
              required
              value={this.state.message}
              style={{width: '100%', height: '150px'}}
            />
          </div>
          <input type="button" value="Submit" className="submit-form" onClick={this.handleSubmit} />
        </form>
      )
    }
  }


export default Contact;