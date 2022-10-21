import { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = ({ myTheme }) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current);
  
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
          (result) => {
            toast.success("Message sent successfully");
          },
          (error) => {
            toast.error(error.text);
          }
        );
      e.target.reset();
    };
  return (
    <section id="contact" className="contact"  data-theme={myTheme}>
        <h2 className="h2 article-title"> Contact me</h2>

        <div className="row">
    
            <div className="info-container">



                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="info">
                            <h3>address :</h3>
                            <p>San Diego, USA - 90004</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <h3>email :</h3>
                            <p>example@email.com</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-phone"></i>
                        <div className="info">
                            <h3>number :</h3>
                            <p>+123-456-7890</p>
                        </div>
                    </div>

                </div>


            </div>

            <form ref={form} onSubmit={sendEmail}>


                <div className="inputBox">
                    <input type="text" name="user_name" placeholder="Full name" />
                    <input type="email" name="user_email" placeholder="Your email" />
                </div>


                <textarea name="message" placeholder="Your message" id="" cols="30" rows="10"></textarea>
                <button className='btn'>
                 Send message
               </button>

            </form>

</div>

    </section>
  )
}

export default Contact;