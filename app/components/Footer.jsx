
const Footer = () => {
  return (
    <footer>
        <div className="footer-box">
            <div className="foot-content">
                Get in touch with us
            </div>

            <div className="foot-content">
            <form>
            <div className="input-row">
                <input className="form-input" type="text" placeholder="Your Name" required />
                <input className="form-input" type="email" placeholder="Your Email" required />
            </div>
            <textarea className="form-textarea" placeholder="Your Message" required></textarea>
            <div className="button-wrapper">
                <button type="submit">Send</button>
            </div>
            </form>
 
            </div>

            <div className="foot-content">
                <p>123 Cadet Lane, Training Facility, City, State, 12345.
                    Your gateway to a future in customs and border protection. <br />
                    Join our mission and be part of our legacy.
                </p>

                <p>
                    Phone: (123) 456-7890. <br />
                    Email: contact@customscadetcorps.org. <br />
                    Follow us on social media for updates and events.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
