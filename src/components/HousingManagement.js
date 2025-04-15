import React from 'react';

const HousingManagement = () => {

  const [housingData, setHousingData] = React.useState({
    shelterType: 'Raised platform',
    ventilation: '',
    cleanliness: '',
    spaceKids: '',
    spaceAdults: '',
    pregnantNeeds: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHousingData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Housing Data Submitted:', housingData);
    // In a real application, you would send this data to a backend
  };

  return (
    <div className="card p-3">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className='col-md-3 mb-3'>
            <label htmlFor="shelterType" className="form-label">Shelter Type</label>
            <select
              className="form-select"
              id="shelterType"
              name="shelterType"
              value={housingData.shelterType}
              onChange={handleChange}
            >
              <option>Raised platform</option>
              <option>Other</option>
            </select>
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor="ventilation" className="form-label">Ventilation</label>
            <input
              type="text"
              className="form-control"
              id="ventilation"
              name="ventilation"
              value={housingData.ventilation}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor="cleanliness" className="form-label">Cleanliness</label>
            <input
              type="text"
              className="form-control"
              id="cleanliness"
              name="cleanliness"
              value={housingData.cleanliness}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor="spaceKids" className="form-label">Space Requirement (Kids)</label>
            <input
              type="number"
              className="form-control"
              id="spaceKids"
              name="spaceKids"
              value={housingData.spaceKids}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor="spaceAdults" className="form-label">Space Requirement (Adults)</label>
            <input
              type="number"
              className="form-control"
              id="spaceAdults"
              name="spaceAdults"
              value={housingData.spaceAdults}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor="pregnantNeeds" className="form-label">Special Needs for Pregnant Does</label>
            <textarea
              className="form-control"
              id="pregnantNeeds"
              name="pregnantNeeds"
              rows="2"
              value={housingData.pregnantNeeds}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className='col-md mb-3 text-end align-self-center'>
            <button type="submit" className="btn btn-primary">
              Save Housing Information
            </button>
          </div>
        </div>






      </form>
    </div>
  );
};

export default HousingManagement;