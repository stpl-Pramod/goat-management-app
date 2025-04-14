import React from 'react';

const LabourAndRoutine = () => {
    const [tasks, setTasks] = React.useState({
      dailyFeedingWatering: 'Feed goats twice daily, ensure fresh water is available.',
      cleaningSheds: 'Clean sheds every morning and evening, replace bedding as needed.',
      healthChecks: 'Observe goats daily for any signs of illness or distress.',
      monitoringBreedingKidding: 'Keep track of breeding dates, monitor pregnant does for signs of kidding.',
      recordUpdates: 'Update records for births, health events, and feed consumption weekly.',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setTasks(prevTasks => ({
        ...prevTasks,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Labour and Routine Tasks Updated:', tasks);
      // In a real application, you would send this data to a backend
    };

    return (
      <div className="container my-4">
        <h2>Labour & Routine Tasks</h2>
        <div className="card p-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="dailyFeedingWatering" className="form-label">Daily Feeding and Watering</label>
              <textarea
                className="form-control"
                id="dailyFeedingWatering"
                rows="3"
                name="dailyFeedingWatering"
                value={tasks.dailyFeedingWatering}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="cleaningSheds" className="form-label">Cleaning Sheds</label>
              <textarea
                className="form-control"
                id="cleaningSheds"
                rows="3"
                name="cleaningSheds"
                value={tasks.cleaningSheds}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="healthChecks" className="form-label">Health Checks</label>
              <textarea
                className="form-control"
                id="healthChecks"
                rows="3"
                name="healthChecks"
                value={tasks.healthChecks}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="monitoringBreedingKidding" className="form-label">Monitoring Breeding Cycles and Kidding</label>
              <textarea
                className="form-control"
                id="monitoringBreedingKidding"
                rows="3"
                name="monitoringBreedingKidding"
                value={tasks.monitoringBreedingKidding}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="recordUpdates" className="form-label">Record Updates</label>
              <textarea
                className="form-control"
                id="recordUpdates"
                rows="3"
                name="recordUpdates"
                value={tasks.recordUpdates}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Save Tasks
            </button>
          </form>
        </div>
      </div>
    );
  };
  export default LabourAndRoutine;