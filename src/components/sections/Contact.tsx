
import { useState, type FormEvent } from 'react';
import './Contact.css';

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xreebell', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                // Reset status after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

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
                                <a href="mailto:hello@pskservice.org" className="detail-link">hello@pskservice.org</a>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">WhatsApp</span>
                                <a
                                    href="https://wa.me/919696013164"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="detail-link whatsapp-link"
                                >
                                    <span>+91 9696013164</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </a>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Studio</span>
                                <p className="detail-text">Delhi, India</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Result"
                                className="form-input"
                                required
                                disabled={status === 'loading'}
                            />
                            <label className="floating-label">Name</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Result"
                                className="form-input"
                                required
                                disabled={status === 'loading'}
                            />
                            <label className="floating-label">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Result"
                                className="form-input"
                                rows={4}
                                required
                                disabled={status === 'loading'}
                            />
                            <label className="floating-label">Message</label>
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${status === 'loading' ? 'loading' : ''} ${status === 'success' ? 'success' : ''}`}
                            disabled={status === 'loading'}
                        >
                            <span>
                                {status === 'loading' && 'Sending...'}
                                {status === 'success' && '✓ Message Sent!'}
                                {status === 'error' && 'Try Again'}
                                {status === 'idle' && 'Send Message'}
                            </span>
                        </button>

                        {status === 'error' && (
                            <p className="form-error">Something went wrong. Please try again or email us directly.</p>
                        )}
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
