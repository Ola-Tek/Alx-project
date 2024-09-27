import React from 'react' 
import './Contact.css'
import support_icon from '../../assets/support_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import location_icon from '../../assets/location_icon.png'
import plane from '../../assets/plane.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "15fa6c29-96c6-4a16-b6ef-07920128ee0d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={support_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form if you do need our premium service where we help out in providing resource materials and even 
            assist in writing your project, we are here to help you succeed. Find our contact information below. Your feedback, questions, and suggestions are important
            to us as we strive to provide exceptional service to our students community
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />obisesanolabode10@gmail.com</li>
                <li><img src={whatsapp_icon} alt="" />+234 812-0775-887</li>
                <li><img src={location_icon} alt="" />Abuja, Nigeria.</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter Your name' 
                required />
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile number' 
                required/>
                <label>Write Your Messages here</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={plane} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
import './Contact.css'
export default Contact
