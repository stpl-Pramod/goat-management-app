import React from 'react';

const BreedingManagement = () => {
    const [breedingData, setBreedingData] = React.useState({
      firstMatingAgeFemale: '',
      firstMatingAgeMale: '',
      matingRatio: '',
      breedingSeason: '',
      kiddingInterval: '',
      pregnantLactatingCare: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setBreedingData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Breeding Data Submitted:', breedingData);
      // In a real application, you would send this data to a backend
    };

    return (
      <div className="container my-4">
        <h2>Breeding Management</h2>
        <div className="card p-3">
          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className='col-md-3 mb-3'>
            <label htmlFor="firstMatingAgeFemale" className="form-label">Age of First Mating (Female)</label>
              <input
                type="number"
                className="form-control"
                id="firstMatingAgeFemale"
                name="firstMatingAgeFemale"
                value={breedingData.firstMatingAgeFemale}
                onChange={handleChange}
              />
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="firstMatingAgeMale" className="form-label">Age of First Mating (Male)</label>
              <input
                type="number"
                className="form-control"
                id="firstMatingAgeMale"
                name="firstMatingAgeMale"
                value={breedingData.firstMatingAgeMale}
                onChange={handleChange}
              />
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="matingRatio" className="form-label">Mating Ratio</label>
              <input
                type="text"
                className="form-control"
                id="matingRatio"
                name="matingRatio"
                value={breedingData.matingRatio}
                onChange={handleChange}
              />
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="breedingSeason" className="form-label">Breeding Season</label>
              <input
                type="text"
                className="form-control"
                id="breedingSeason"
                name="breedingSeason"
                value={breedingData.breedingSeason}
                onChange={handleChange}
              />
            </div>
            <div className='col-md-3 mb-3'>
            <label htmlFor="kiddingInterval" className="form-label">Kidding Interval</label>
              <input
                type="text"
                className="form-control"
                id="kiddingInterval"
                name="kiddingInterval"
                value={breedingData.kiddingInterval}
                onChange={handleChange}
              />
            </div>
            <div className='col-md-6 mb-3'>
            <label htmlFor="pregnantLactatingCare" className="form-label">Care for Pregnant & Lactating Goats</label>
              <textarea
                className="form-control"
                id="pregnantLactatingCare"
                rows="3"
                name="pregnantLactatingCare"
                value={breedingData.pregnantLactatingCare}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='col-md-3 mb-3 align-self-center text-end'>
                <button type="submit" className="btn btn-primary">
                Save Breeding Information
                </button>
            </div>
            
          </div>
           

            
          </form>
        </div>
      </div>
    );
  };

  export default BreedingManagement;