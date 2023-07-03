import React, { useState } from 'react';
import styles from './contactForm.module.css'
import Link from 'next/link';

export default function ContactForm({ saveData }) {
    const [formValues, setFormValues] = useState({
        whereDidYouHear: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        reservedVenue: '',
        eventDate: '',
        venueName: '',
        venueLocation: '',
        celebrating: '',
        guestCount: '',
        additionalService: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveData(formValues)
        console.log(formValues);
    };

    return (

        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.intro}>
                    <p>
                        READY? <br></br>
                        LET'S GET THIS PARTY STARTED!</p>
                </div>
                <div className={styles.icons}>
                    <Link href="https://facebook.com">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={50} height={50}><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                    </Link>
                    <Link href="https://instagram.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black"  viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg>
                    </Link>

                    <Link href="https://twitter.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black"  viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" /> </svg>
                    </Link>
                    <Link href="https://pinterest.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 774 1000.2" id="pinterest"><path d="M0 359c0-42 8.8-83.7 26.5-125s43-79.7 76-115 76.3-64 130-86S345.7 0 411 0c106 0 193 32.7 261 98s102 142.3 102 231c0 114-28.8 208.2-86.5 282.5S555.3 723 464 723c-30 0-58.2-7-84.5-21s-44.8-31-55.5-51l-40 158c-3.3 12.7-7.7 25.5-13 38.5S259.8 873 253.5 885c-6.3 12-12.7 23.3-19 34s-12.7 20.7-19 30-11.8 17.2-16.5 23.5-9 11.8-13 16.5l-6 8c-2 2.7-4.7 3.7-8 3s-5.3-2.7-6-6c0-.7-.5-5.3-1.5-14s-2-17.8-3-27.5-2-22.2-3-37.5-1.3-30.2-1-44.5 1.3-30.2 3-47.5 4.2-33.3 7.5-48c7.3-31.3 32-135.7 74-313-5.3-10.7-9.7-23.5-13-38.5s-5-27.2-5-36.5l-1-15c0-42.7 10.8-78.2 32.5-106.5S303.3 223 334 223c24.7 0 43.8 8.2 57.5 24.5S412 284.3 412 309c0 15.3-2.8 34.2-8.5 56.5s-13.2 48-22.5 77-16 52.5-20 70.5c-6.7 30-.8 56 17.5 78s42.8 33 73.5 33c52.7 0 96.2-29.8 130.5-89.5S634 402.7 634 318c0-64.7-21-117.5-63-158.5S470.3 98 395 98c-84 0-152.2 27-204.5 81S112 297.7 112 373c0 44.7 12.7 82.3 38 113 8.7 10 11.3 20.7 8 32-1.3 3.3-3.3 11-6 23s-4.7 19.7-6 23c-1.3 7.3-4.7 12.2-10 14.5s-11.3 2.2-18-.5c-39.3-16-68.8-43.5-88.5-82.5S0 411 0 359z"></path></svg>
                    </Link>
                </div>
              <div className={styles.co}><p>
FOR CAREER INQURIES + GENERAL INQUIRY CONTACT, AFRAH CEO, AKA DIDO, DIRECTLY. 
DO NOT USE CONTACT FORM BELOW
DIDO@Afrah.com</p></div>
                <div>
                    <label htmlFor="whereDidYouHear">Where did you hear about us?</label>
                    <br />

                    <select
                     name="whereDidYouHear"
                        value={formValues.whereDidYouHear}
                        onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="friend">Referred by friend or family</option>
                    </select>

                </div>
                <br />
                <div>
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <br></br>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <br></br>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="phone">Phone</label>
                    <br></br>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="reservedVenue">Have you reserved a venue yet?</label>
                    <br />
                    <select
                        id="reservedVenue"
                        name="reservedVenue"
                        value={formValues.reservedVenue}
                        onChange={handleChange}
                    >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="eventDate">Event Date</label>
                    <br />
                    <input
                        type="datetime-local"
                        id="eventDate"
                        name="eventDate"
                        value={formValues.eventDate}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="venueName">Venue Name</label>
                    <br></br>
                    <input
                        type="text"
                        id="venueName"
                        name="venueName"
                        value={formValues.venueName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="venueLocation">Venue Location</label>
                    <br />
                    <input
                        type="text"
                        id="venueLocation"
                        name="venueLocation"
                        value={formValues.venueLocation}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="celebrating">What are you celebrating?</label>
                    <br />
                    <select
                        id="celebrating"
                        name="celebrating"
                        value={formValues.celebrating}
                        onChange={handleChange}
                    >
                        <option value="">Select an option</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Party/Social Event">Party/Social Event</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Public Event">Public Event</option>
                        <option value="Fundraiser">Fundraiser</option>
                        <option value="Branding/Marketing Event">Branding/Marketing Event</option>
                        <option value="Elopement">Elopement</option>
                        <option value="Styled Photo Shoot">Styled Photo Shoot</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="guestCount">How many guests are you wanting to party with?</label>
                    <br />
                    <input
                        type="number"
                        id="guestCount"
                        name="guestCount"
                        value={formValues.guestCount}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="additionalService">What additional service are you interested in?</label>
                    <br />
                    <select
                        id="additionalService"
                        name="additionalService"
                        value={formValues.additionalService}
                        onChange={handleChange}
                    >
                        <option value="">Select an option</option>
                        <option value="Rehearsal Dinner Planning">Rehearsal Dinner Planning</option>
                        <option value="End of Night Pack + Breakdown of My Event">End of Night Pack + Breakdown of My Event</option>
                        <option value="Post Event Farewell">Post Event Farewell</option>
                        <option value="Pre-event Welcome Event">Pre-event Welcome Event</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="message">Tell us how we can help you most. (Message)</label>

                    <br />
                    <textarea
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                    >
                        
                    </textarea>
                </div>
                <div className={styles.policy}>We use Aisle Planner to manage inquiries. By submitting this contact form, Aisle Planner will share your information with us. We may use your information to correspond with you and send you email marketing communications. For more information, please refer to the Aisle Planner Privacy Policy. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
                <button type="submit" >SEND</button>
            </form>
        </div>

    );
}
