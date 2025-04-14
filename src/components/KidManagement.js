import React from 'react';

const KidManagement = () => {
    const [kidData, setKidData] = React.useState({
      colostrumGiven: false,
      keepWarmDryDetails: '',
      weaningAge: '',
      vaccinationsGiven: '',
      solidFeedIntroduction: '',
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        setKidData(prevData => ({ ...prevData, [name]: checked }));
      } else {
        setKidData(prevData => ({ ...prevData, [name]: value }));
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Kid Management Data Submitted:', kidData);
      // In a real application, you would send this data to a backend
    };

    return (
      <div className="container my-4">
        <h2>Kid Management</h2>
        <div className="card p-3">
          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className='col-md-12 mb-3'>
            <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="colostrumGiven"
                  name="colostrumGiven"
                  checked={kidData.colostrumGiven}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="colostrumGiven">
                  Received Colostrum
                </label>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="keepWarmDryDetails" className="form-label">Keep Warm and Dry Details</label>
              <textarea
                className="form-control"
                id="keepWarmDryDetails"
                rows="2"
                name="keepWarmDryDetails"
                value={kidData.keepWarmDryDetails}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="weaningAge" className="form-label">Weaning Age (in weeks)</label>
              <input
                type="number"
                className="form-control"
                id="weaningAge"
                name="weaningAge"
                value={kidData.weaningAge}
                onChange={handleChange}
              />
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="weaningAge" className="form-label">Weaning Age (in weeks)</label>
              <input
                type="number"
                className="form-control"
                id="weaningAge"
                name="weaningAge"
                value={kidData.weaningAge}
                onChange={handleChange}
              />
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="vaccinationsGiven" className="form-label">Vaccinations Given</label>
              <textarea
                className="form-control"
                id="vaccinationsGiven"
                rows="2"
                name="vaccinationsGiven"
                value={kidData.vaccinationsGiven}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="solidFeedIntroduction" className="form-label">Introduction to Solid Feed</label>
              <textarea
                className="form-control"
                id="solidFeedIntroduction"
                rows="2"
                name="solidFeedIntroduction"
                value={kidData.solidFeedIntroduction}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='col-md mb-3 align-self-center text-end'>
            <button type="submit" className="btn btn-primary">
              Save Kid Information
            </button>
            </div>
           
          </div>

        

            
          </form>
        </div>
      </div>
    );
  };

  export default KidManagement;