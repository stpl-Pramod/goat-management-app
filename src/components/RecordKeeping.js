import React from 'react';

const RecordKeeping = () => {
    const [records, setRecords] = React.useState({
      birthsBreeding: [{ date: '2025-04-01', details: 'Doe #123 gave birth to twins' }],
      vaccinationsTreatments: [{ date: '2025-04-05', details: 'PPR vaccination for all' }],
      feedCostsIntake: [{ date: '2025-04-10', details: 'Purchased 50kg feed' }],
      growthWeights: [{ date: '2025-04-12', details: 'Kid #45 weight 5kg' }],
      salesExpenses: [{ date: '2025-04-13', details: 'Sold one goat for ₹3000' }],
    });

    const [activeTab, setActiveTab] = React.useState('births');
    const [newItem, setNewItem] = React.useState({ date: '', details: '' });

    const handleAddItem = () => {
      if (newItem.date && newItem.details) {
        setRecords(prevRecords => {
          const updatedRecords = { ...prevRecords };
          switch (activeTab) {
            case 'births':
              updatedRecords.birthsBreeding = [...updatedRecords.birthsBreeding, { ...newItem }];
              break;
            case 'vaccinations':
              updatedRecords.vaccinationsTreatments = [...updatedRecords.vaccinationsTreatments, { ...newItem }];
              break;
            case 'feed':
              updatedRecords.feedCostsIntake = [...updatedRecords.feedCostsIntake, { ...newItem }];
              break;
            case 'growth':
              updatedRecords.growthWeights = [...updatedRecords.growthWeights, { ...newItem }];
              break;
            case 'sales':
              updatedRecords.salesExpenses = [...updatedRecords.salesExpenses, { ...newItem }];
              break;
            default:
              break;
          }
          return updatedRecords;
        });
        setNewItem({ date: '', details: '' });
      }
    };

    const renderTableData = (data) => (
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    return (
      <div className="container my-4">
        <h2>Record Keeping</h2>
        <div className="card mb-4">
          <div className="card-header">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'births' ? 'active' : ''}`}
                  onClick={() => setActiveTab('births')}
                >
                  Births & Breeding
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'vaccinations' ? 'active' : ''}`}
                  onClick={() => setActiveTab('vaccinations')}
                >
                  Vaccinations & Treatments
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'feed' ? 'active' : ''}`}
                  onClick={() => setActiveTab('feed')}
                >
                  Feed Costs & Intake
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'growth' ? 'active' : ''}`}
                  onClick={() => setActiveTab('growth')}
                >
                  Growth Rates & Weight
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'sales' ? 'active' : ''}`}
                  onClick={() => setActiveTab('sales')}
                >
                  Sales & Expenses
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {activeTab === 'births' && renderTableData(records.birthsBreeding)}
            {activeTab === 'vaccinations' && renderTableData(records.vaccinationsTreatments)}
            {activeTab === 'feed' && renderTableData(records.feedCostsIntake)}
            {activeTab === 'growth' && renderTableData(records.growthWeights)}
            {activeTab === 'sales' && renderTableData(records.salesExpenses)}

            <h4 className="mt-3">Add New Record</h4>
            <div className="row g-2">
              <div className="col-md">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  value={newItem.date}
                  onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
                />
              </div>
              <div className="col-md">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Details"
                  value={newItem.details}
                  onChange={(e) => setNewItem({ ...newItem, details: e.target.value })}
                />
              </div>
              <div className="col-md-auto">
                <button className="btn btn-primary" onClick={handleAddItem}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default RecordKeeping;