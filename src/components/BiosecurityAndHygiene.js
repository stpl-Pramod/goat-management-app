import React from 'react';

const BiosecurityAndHygiene = () => {
    const [protocols, setProtocols] = React.useState({
      footDips: 'Use a 5% disinfectant solution for foot dips at all entry points.',
      quarantineProcedures: 'Isolate any new or sick animals in a separate area for at least 21 days.',
      disinfectEquipment: 'Clean and disinfect all equipment after each use with a suitable disinfectant.',
      limitVisitorsPolicy: 'Restrict visitors to essential personnel only. Ensure all visitors use foot dips and wear protective clothing.',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProtocols(prevProtocols => ({
        ...prevProtocols,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Biosecurity and Hygiene Protocols Updated:', protocols);
      // In a real application, you would send this data to a backend
    };

    return (
      <div className="container my-4">
        <h2>Biosecurity & Hygiene</h2>
        <div className="card p-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="footDips" className="form-label">Foot Dips</label>
              <input
                type="text"
                className="form-control"
                id="footDips"
                name="footDips"
                value={protocols.footDips}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="quarantine" className="form-label">Quarantine Procedures</label>
              <textarea
                className="form-control"
                id="quarantine"
                rows="3"
                name="quarantineProcedures"
                value={protocols.quarantineProcedures}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="disinfectEquipment" className="form-label">Disinfect Equipment</label>
              <textarea
                className="form-control"
                id="disinfectEquipment"
                rows="3"
                name="disinfectEquipment"
                value={protocols.disinfectEquipment}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="limitVisitors" className="form-label">Limit Visitors</label>
              <textarea
                className="form-control"
                id="limitVisitors"
                rows="3"
                name="limitVisitorsPolicy"
                value={protocols.limitVisitorsPolicy}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Save Biosecurity Protocols
            </button>
          </form>
        </div>
      </div>
    );
  };
  export default BiosecurityAndHygiene;