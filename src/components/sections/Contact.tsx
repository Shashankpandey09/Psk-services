
import './Contact.css';

export const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <span className="label">Contact</span>
                        <h2 className="display-lg">Let's build the <span className="text-secondary">future.</span></h2>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="detail-label">Email</span>
                                <a href="mailto:hello@psk.com" className="detail-link">hello@psk.com</a>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Studio</span>
                                <p className="detail-text">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Result" className="form-input" required />
                            <label className="floating-label">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Result" className="form-input" required />
                            <label className="floating-label">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Result" className="form-input" rows={4} required />
                            <label className="floating-label">Message</label>
                        </div>

                        <button type="submit" className="submit-btn">
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <span className="footer-copy">© 2025 PSK Services.</span>
                    <div className="footer-socials">
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
