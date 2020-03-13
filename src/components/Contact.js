import React from 'react';
import axios from 'axios';
import MyEmail from './Email';
import { renderEmail } from 'react-html-email';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { feedback: '', name: 'Mike', email: 'gogog@o2.pl' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){

        const messageHtml =  renderEmail(<MyEmail name={this.state.name} feedback={this.state.feedback} />);

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
                alert("Email sent, awesome!");
            } else if (response.data.msg === 'fail') {
                alert("Oops, something went wrong. Try again")
            }
        });
    }

    handleChange(event) {
      this.setState({feedback: event.target.value})
    }
    
    resetForm(){

      this.setState({feedback: ''});
  }



    render() {
      return (
        <form className="test-mailing">
          <h1>Let's see if it works</h1>
          <div>
            <textarea
              id="test-mailing"
              name="test-mailing"
              onChange={this.handleChange}
              placeholder="Post some lorem ipsum here"
              required
              value={this.state.feedback}
              style={{width: '100%', height: '150px'}}
            />
          </div>
          <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
        </form>
      )
    }
  }


export default Contact;