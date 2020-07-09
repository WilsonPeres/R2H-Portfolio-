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
  
    // handleSubmit = event => {
    //   // stops browers from posting and reloading page
    //   event.preventDefault();
    //   const isValid = this.validate();
    //   if (isValid) {
    //     // clear form : in production this is where email is sent then clears 
    //     this.setState(initialState);
    //   }
    // };
handleSubmit = e => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...this.state })
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

  e.preventDefault();
};

handleChange = e => this.setState({ [e.target.name]: e.target.value });

  
    render() {
      const { name, email, message } = this.state;
      return (
  
        <div className="contactMaincontainer">
        
          <div>
            <section id="contact-form">
              <h1 className="heading">Contact Us</h1>
              {/* onSubmit={this.handleSubmit} */}
  
              <form className="myForm" onSubmit={this.handleSubmit}>
                <input type="hidden"  name="form-name" value="contact v1"/>
                <div className="formAlignment">
                  <p className="label--center">Name</p>
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
                  <p className="label--center">Email Address</p>
                  <input
                    className="name--position"
                    name={email}
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
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
                      name={message}
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

                <button className="button--item" type="submit" >submit</button>
              </form>
            </section>
          </div>
        </div>
      );
    }
  }




// const encode = (data) => {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&");
//   }

//   class ContactPage extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { name: "", email: "", message: "" };
//     }

//     /* Here’s the juicy bit for posting the form submission */

//     handleSubmit = e => {
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: encode({ "form-name": "contact", ...this.state })
//       })
//         .then(() => alert("Success!"))
//         .catch(error => alert(error));

//       e.preventDefault();
//     };

//     handleChange = e => this.setState({ [e.target.name]: e.target.value });

//     render() {
//       const { name, email, message } = this.state;
//       return (
//         <form onSubmit={this.handleSubmit}>

//           <p>
//             <label>
//               Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Message: <textarea name="message" value={message} onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <button type="submit">Send</button>
//           </p>
//         </form>
//       );
//     }
//   }
  export default ContactPage;

  ReactDOM.render(<ContactPage />, document.getElementById("root"));


 