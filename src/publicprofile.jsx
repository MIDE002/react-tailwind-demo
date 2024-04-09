import React from 'react';

const PublicProfile = () => {
  return (
    <div className="profile">
      <h2>Public Profile</h2>
      <div className="profile-section">
        <h3>Name:</h3>
        <p>Fagbile Ayomide</p>
      </div>
      <div className="profile-section">
        <h3>Occupation:</h3>
        <p>student</p>
      </div>
      <div className="profile-section">
        <h3>Contact Information:</h3>
        <p >Email: <a href="mailto:ayomidefagbile@gmail.com">ayomidefagbile@gmail.com</a> </p>
        
        <p>Phone:+234 8075012080</p>
      </div>
     
      <div className="profile-section">
        <h3>Education:</h3>
        <p>under graudauate</p>
      </div>
      <div className="profile-section">
        <h3>Skills:</h3>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java-script</li>
          <li>little knowledge on backend</li>
        </ul>
      </div>
      
      
    </div>
  );
};

export default PublicProfile;
