import React, { useState } from 'react';
import axios from 'axios';
import '../components/Feedback.css';
  const Feedback = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      feedback: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:9097/feedbackservice', formData);
        alert(response.data.message);
      } catch (error) {
        alert('Error submitting feedback.');
      }
    };

    return (
     <div className='container'>
         <div className='head'> Your FeedBack Values</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required rows={8} cols={50}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
      </div>
    );
  };

  export default Feedback;
  