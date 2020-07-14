import React from 'react';
import './Contact.css';
import axios from 'axios';
import ReactDOM from "react-dom";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

// Intializing the state to default nothing
const initialState = {
    name: "",
    email: "",
    message: "",
  };
  
  class ContactPage extends React.Component {
    state = initialState;

    // Using axios to post contact info to database
    submitHandler = event => {
      event.preventDefault()
      axios.post('/HomeApplicancesCard', initialState)
  }
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    validate = () => {
      let nameError = "";
      let emailError = "";
      let messageError = "";
  
      if (!this.state.name) {
        nameError = "* Missing Name";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "*invalid Email";
      }
    
      if (!this.state.message) {
        messageError = "* Missing a Message";
      }
      if (emailError || nameError || messageError) {
        this.setState({ emailError, nameError, messageError });
        return false;
      }
      return true;
    };
  
handleSubmit = e => {
  e.preventDefault();
      const isValid = this.validate();
      if (isValid) {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...this.state })
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

  e.preventDefault();
}
};

handleChange = e => this.setState({ [e.target.name]: e.target.value });

  
    render() {
      const { name, email, message } = this.state;
      return (
  
        <div className="contactMaincontainer">

            <section id="contact-form">
            <div className="H1Container">
              <h1 className="heading">Contact Me</h1>
            </div>
              
  
              <form className="myForm" onSubmit={this.handleSubmit}>
                <input type="hidden"  name="form-name" value="contact v1"/>
                <div className="formAlignment">
                  <p className="label--center">Name:</p>
                  <input
                    className="name--position"
                    type="text" name="name" value={name} onChange={this.handleChange}
                    placeholder="Name"
                  />
  
                  <div style={{ color: "red", fontSize: "14px" }}>
                    {this.state.nameError}
                  </div>
                </div>

                <div className="formAlignment">
                  <p className="label--center">Email:</p>
                  <input
                    className="name--position"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                  />
                    <div className="emailError" style={{ color: "red", fontSize: "14px" }}>
                      {this.state.emailError}
                    </div>
                  </div>
  
                  <div className="formAlignment">
                    <p className="label--center">Message:</p>
                    <textarea
                      className="comments--position"
                      name="message"
                      type="text"
                      placeholder="Message"
                      value={message}
                      onChange={this.handleChange}
                    />
                    <div className="errorMessage" style={{ color: "red", fontSize: "14px" }}>
                      {this.state.messageError}
                    </div>
                  </div>

                  <div className="formAlignment">
                      <input 
                      type="file"
                      className="myFile"
                      name="myFile"
                      placeholder="Upload File"
                      rows="7"
                      />
                  </div>
                  
                <button className="button--item" type="submit" >submit</button>
              </form>
            </section>
          </div>
      );
    }
  }

  export default ContactPage;

  ReactDOM.render(<ContactPage />, document.getElementById("root"));


 