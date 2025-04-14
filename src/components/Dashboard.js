import React from 'react';

const Dashboard = () => {
    const metrics = {
        totalGoats: 50,
        breeding: '10 Does Pregnant',
        healthAlerts: 'None',
        upcomingTasks: 'Vaccinate Group B',
      };

  return (
    <div>
      <h2>Farm Overview</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card bg-primary-subtle text-primary">
            <div className="card-body">
              <h5 className="card-title">Total Goats</h5>
              <p className="card-text">{metrics.totalGoats}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-dark-subtle text-dark">
            <div className="card-body">
              <h5 className="card-title">Breeding Status</h5>
              <p className="card-text">{metrics.breeding}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-danger bg-danger-subtle">
            <div className="card-body">
              <h5 className="card-title">Health Alerts</h5>
              <p className="card-text">{metrics.healthAlerts}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-info bg-info-subtle">
            <div className="card-body">
              <h5 className="card-title">Upcoming Tasks</h5>
              <p className="card-text">{metrics.upcomingTasks}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">Quick Navigation</h2>
      <div className="row g-2">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <a  className="card-link" href="/housing">Housing Management</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <a className="card-link" to="/feeding">Feeding Management</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <a className="card-link" to="/health">Health Management</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <a className="card-link" to="/breeding">Breeding Management</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <a className="card-link" to="/kids">Kid Management</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <a className="card-link" to="/records">Record Keeping</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <a className="card-link" to="/tasks">Labour & Routine Tasks</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <a className="card-link" to="/biosecurity">Biosecurity & Hygiene</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;