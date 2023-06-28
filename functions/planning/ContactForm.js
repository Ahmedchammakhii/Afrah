import React, { useState } from 'react';

export default function ContactForm({saveData}) {
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
    // Handle form submission logic here
    saveData(formValues)
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="whereDidYouHear">Where did you hear about us?</label>
        <input
          type="text"
          id="whereDidYouHear"
          name="whereDidYouHear"
          value={formValues.whereDidYouHear}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="reservedVenue">Have you reserved a venue yet?</label>
        <input
          type="text"
          id="reservedVenue"
          name="reservedVenue"
          value={formValues.reservedVenue}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formValues.eventDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="venueName">Venue Name</label>
        <input
          type="text"
          id="venueName"
          name="venueName"
          value={formValues.venueName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="venueLocation">Venue Location</label>
        <input
          type="text"
          id="venueLocation"
          name="venueLocation"
          value={formValues.venueLocation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="celebrating">What are you celebrating?</label>
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
      <div>
        <label htmlFor="guestCount">How many guests are you wanting to party with?</label>
        <input
          type="number"
          id="guestCount"
          name="guestCount"
          value={formValues.guestCount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="additionalService">What additional service are you interested in?</label>
        <input
          type="text"
          id="additionalService"
          name="additionalService"
          value={formValues.additionalService}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Tell us how we can help you most. (Message)</label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" >SEND</button>
    </form>
  );
}
