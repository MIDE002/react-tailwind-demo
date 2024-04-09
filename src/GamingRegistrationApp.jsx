import React, { useState } from 'react';

const GamingRegistrationApp = () => {
  const [level, setLevel] = useState('');
  const [below100Form, setBelow100Form] = useState({
    gametag: "",
    password: "",
    platform: ""
  });
  const [above100Form, setAbove100Form] = useState({
    gametag: "",
    password: "",
    platform: ""
  });
  const [imageFile, setImageFile] = useState(null);
  
  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleChangeBelow100 = (e) => {
    const { name, value } = e.target;
    setBelow100Form((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleChangeAbove100 = (e) => {
    const { name, value } = e.target;
    setAbove100Form((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmitBelow100 = () => {
    window.alert("Submitted for players below level 100");
    setBelow100Form({
      gametag: "",
      password: "",
      platform: ""
    });
  };

  const handleSubmitAbove100 = () => {
    window.alert("Submitted for players above level 100");
    setAbove100Form({
      gametag: "",
      password: "",
      platform: ""
    });
  };

  return (
    <div>
      <h1>Gaming Registration App</h1>

      <label>
        Enter your level:
        <input
          type="text"
          value={level}
          onChange={handleLevelChange}
        />
      </label>

      <button type='button' id="button">submit</button>

      <div>
        <h3>*Note players less than level 100 sign in below</h3>
        <div>
          <input
            type='text'
            placeholder='Gametag'
            name='gametag'
            value={below100Form.gametag}
            onChange={handleChangeBelow100}
            style={{ marginRight: '10px' }}
          />

          <input
            type='password'
            placeholder='Password'
            name='password'
            value={below100Form.password}
            onChange={handleChangeBelow100}
            style={{ marginRight: '10px' }}
          />
          <input
            type='text'
            placeholder='Gaming platform'
            name='platform'
            value={below100Form.platform}
            onChange={handleChangeBelow100}
            style={{ marginRight: '10px' }}
          />
          <button type='button' onClick={handleSubmitBelow100} style={{ marginRight: '10px' }}>submit</button>
        </div>
      </div>

      <div>
        <h3>*Note players above level 100 sign in below</h3>

        <input
          type='text'
          placeholder='Gametag'
          name='gametag'
          value={above100Form.gametag}
          onChange={handleChangeAbove100}
          style={{ marginRight: '10px' }}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          value={above100Form.password}
          onChange={handleChangeAbove100}
          style={{ marginRight: '10px' }}
        />

        <input type='text'
          placeholder='Gaming platform'
          name='platform'
          value={above100Form.platform}
          onChange={handleChangeAbove100}
          style={{ marginRight: '10px' }}
        />

        <button type='button' onClick={handleSubmitAbove100}>submit</button>
      </div>

      <h2>Personal Bio Data(fill data)</h2>

      <div>
        <input
          type='text'
          placeholder='Firstname'
          style={{ marginRight: '10px' }}
        />

        <input
          type='text'
          placeholder='Surname'
          style={{ marginRight: '10px' }}
        />

        <input
          type='text'
          placeholder='Lastname'
          style={{ marginRight: '10px' }}
        />

        <p>
          Enter your Email address:
          <input type="text" />
          <input
            type='password'
            placeholder='Password' style={{ marginLeft: '10px' }}
          />
        </p>

        <div>
          <input type="text" placeholder='*Date Of Birth' />
          <input type="text" placeholder='*Gender' />
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {imageFile && (
          <div>
            <h3>Preview:</h3>
            <img src={imageFile} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        )}

      </div>
    </div>
  );
}

export default GamingRegistrationApp;
