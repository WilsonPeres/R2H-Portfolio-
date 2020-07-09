import React from 'react';
import './Contact.css';
import axios from 'axios';


// Intializing the state to default nothing
const initialState = {
    name: "",
    email: "",
    phonenumber: "",
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
      let phonenumberError = "";
      let messageError = "";
  
      if (!this.state.name) {
        nameError = "* Missing Name";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "*invalid Email";
      }
      if (!this.state.phonenumber) {
        phonenumberError = "* Missing Phone Number";
      }
      if (!this.state.message) {
        messageError = "* Missing a Message";
      }
      if (emailError || nameError || phonenumberError || messageError) {
        this.setState({ emailError, nameError, phonenumberError, messageError });
        return false;
      }
      return true;
    };
  
    handleSubmit = event => {
      // stops browers from posting and reloading page
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        // clear form : in production this is where email is sent then clears 
        this.setState(initialState);
      }
    };
  
    render() {
      return (
  
        <div className="contactMaincontainer">
        
          <div>
            <section id="contact-form">
              <h1 className="heading">Contact Us</h1>
              {/* onSubmit={this.handleSubmit} */}
  
              <form className="myForm"  name="contact v1" method="post" data-netlify="true" onSubmit="submit">
                <input type="hidden"  name="form-name" value="contact v1"/>
                <div className="formAlignment">
                  <p className="label--center">Name</p>
                  <input
                    className="name--position"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
  
                  <div style={{ color: "red", fontSize: "14px" }}>
                    {this.state.nameError}
                  </div>
                </div>

                <div className="formAlignment">
                  <p className="label--center">Email Address</p>
                  <input
                    className="name--position"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
  
                  <div style={{ color: "red", fontSize: "14px" }}>
                    {this.state.emailError}
                  </div>
                </div>

                <div className="formAlignment">
                  <p className="label--center">Phone Number</p>
                  <input
                    className="Phone--position"
                    type="number"
                    name="phonenumber"
                    placeholder="Phone number"
                    value={this.state.phonenumber}
                    onChange={this.handleChange}
                  />
                  <div style={{ color: "red", fontSize: "14px" }}>
                    {this.state.phonenumberError}
                  </div>
                  </div>
  
                  <div className="formAlignment">
                    <p className="label--center">Message</p>
                    <textarea
                      className="comments--position"
                      name="message"
                      type="text"
                      placeholder="Message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                    <div className="errorMessage" style={{ color: "red", fontSize: "14px" }}>
                      {this.state.messageError}
                    </div>
                  </div>

                  <div>
                      <input 
                      type="file"
                      className="myFile"
                      name="myFile"
                      placeholder="Upload File"
                      rows="7"
                      />
                  </div>
                   
                  {/* <div className="recaptchaContainer"> */}
                        {/* <div data-netlify-recaptcha="true"></div> */}
                  {/* </div> */}

                <button className="button--item" type="submit" value="Send Message">submit</button>
              </form>
            </section>
          </div>
        </div>
      );
    }
  }
  
  export default ContactPage;