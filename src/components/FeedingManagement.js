import React from 'react';

const FeedingManagement = () => {
    const [feedingData, setFeedingData] = React.useState({
        dailyRation: [],
        roughageDetails: '',
        concentratesDetails: '',
        mineralsDetails: '',
        water: '',
        feedingSchedule: '',
    });

    const handleChange = (e) => {
        const { name, value, type, options } = e.target;

        if (type === 'select-multiple') {
            const selectedOptions = [];
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    selectedOptions.push(options[i].value);
                }
            }
            setFeedingData(prevData => ({ ...prevData, [name]: selectedOptions }));
        } else {
            setFeedingData(prevData => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feeding Data Submitted:', feedingData);
        // In a real application, you would send this data to a backend
    };

    return (
        <div className="container my-4">
            <h2>Feeding Management</h2>
            <div className="card p-3">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="dailyRation" className="form-label">Daily Ration</label>
                            <select
                                multiple
                                className="form-select"
                                id="dailyRation"
                                name="dailyRation"
                                value={feedingData.dailyRation}
                                onChange={handleChange}
                            >
                                <option value="Roughage">Roughage</option>
                                <option value="Concentrates">Concentrates</option>
                                <option value="Minerals">Minerals</option>
                                <option value="Supplements">Supplements</option>
                            </select>
                            <div className="form-text">Select all that apply.</div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="roughageDetails" className="form-label">Roughage Details</label>
                            <textarea
                                className="form-control"
                                id="roughageDetails"
                                rows="2"
                                name="roughageDetails"
                                value={feedingData.roughageDetails}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="concentratesDetails" className="form-label">Concentrates Details</label>
                            <textarea
                                className="form-control"
                                id="concentratesDetails"
                                rows="2"
                                name="concentratesDetails"
                                value={feedingData.concentratesDetails}
                                onChange={handleChange}
                            ></textarea>

                        </div>
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="mineralsDetails" className="form-label">Minerals Details</label>
                            <textarea
                                className="form-control"
                                id="mineralsDetails"
                                rows="2"
                                name="mineralsDetails"
                                value={feedingData.mineralsDetails}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="water" className="form-label">Water</label>
                            <input
                                type="text"
                                className="form-control"
                                id="water"
                                name="water"
                                value={feedingData.water}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="feedingSchedule" className="form-label">Feeding Schedule</label>
                            <input
                                type="text"
                                className="form-control"
                                id="feedingSchedule"
                                name="feedingSchedule"
                                value={feedingData.feedingSchedule}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-md-3 mb-3 text-end align-self-center'>
                            <button type="submit" className="btn btn-primary">
                                Save Feeding Information
                            </button>
                        </div>
                    </div>





                </form>
            </div>
        </div>
    );
};

export default FeedingManagement;