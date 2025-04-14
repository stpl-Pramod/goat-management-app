import React from 'react';

const HealthManagement = () => {
    const [healthData, setHealthData] = React.useState({
        vaccinations: [],
        vaccinationDates: {},
        dewormingSchedule: '',
        hoofTrimmingSchedule: '',
        isolation: false,
        diseaseTreatments: [{ disease: 'Example Disease', treatment: 'Example Treatment' }],
    });
    const [newDiseaseTreatment, setNewDiseaseTreatment] = React.useState({ disease: '', treatment: '' });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setHealthData(prevData => ({ ...prevData, [name]: checked }));
        } else if (name === 'vaccinations') {
            const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
            setHealthData(prevData => ({ ...prevData, vaccinations: selectedOptions }));
        } else if (name.startsWith('vaccinationDate-')) {
            const vaccinationName = name.split('-')[1];
            setHealthData(prevData => ({
                ...prevData,
                vaccinationDates: { ...prevData.vaccinationDates, [vaccinationName]: value },
            }));
        } else {
            setHealthData(prevData => ({ ...prevData, [name]: value }));
        }
    };

    const handleAddDiseaseTreatment = () => {
        if (newDiseaseTreatment.disease && newDiseaseTreatment.treatment) {
            setHealthData(prevData => ({
                ...prevData,
                diseaseTreatments: [...prevData.diseaseTreatments, newDiseaseTreatment],
            }));
            setNewDiseaseTreatment({ disease: '', treatment: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Health Data Submitted:', healthData);
        // In a real application, you would send this data to a backend
    };

    return (
        <div className="container my-4">
            <h2>Health Management</h2>
            <div className="card p-3 mb-4">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="vaccinations" className="form-label">Vaccinations</label>
                            <select
                                multiple
                                className="form-select"
                                id="vaccinations"
                                name="vaccinations"
                                value={healthData.vaccinations}
                                onChange={handleInputChange}
                            >
                                <option value="PPR">PPR</option>
                                <option value="Enterotoxaemia">Enterotoxaemia</option>
                                <option value="FMD">FMD</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="form-text">Select all that apply and enter dates below.</div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            {healthData.vaccinations.map(vaccination => (
                                <div key={vaccination} className="mb-2">
                                    <label className="form-label">{vaccination} Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name={`vaccinationDate-${vaccination}`}
                                        value={healthData.vaccinationDates[vaccination] || ''}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="dewormingSchedule" className="form-label">Deworming Schedule</label>
                            <input
                                type="text"
                                className="form-control"
                                id="dewormingSchedule"
                                name="dewormingSchedule"
                                value={healthData.dewormingSchedule}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label htmlFor="hoofTrimmingSchedule" className="form-label">Hoof Trimming Schedule</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hoofTrimmingSchedule"
                                name="hoofTrimmingSchedule"
                                value={healthData.hoofTrimmingSchedule}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='col-md-3 mb-3'>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isolation"
                                    name="isolation"
                                    checked={healthData.isolation}
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor="isolation">Isolation Required</label>
                            </div>
                        </div>
                        <div className='col-md-3 mb-3 align-self-center text-end'>
                            <button type="submit" className="btn btn-primary">
                                Save Health Records
                            </button>
                        </div>
                    </div>




                </form>
            </div>

            <div className="card p-3">
                <h3>Diseases and Treatments</h3>
                {healthData.diseaseTreatments.length > 0 ? (
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Disease</th>
                                <th>Treatment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {healthData.diseaseTreatments.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.disease}</td>
                                    <td>{item.treatment}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No disease treatments recorded.</p>
                )}

                <h4 className="mt-3">Add New Disease Treatment</h4>
                <div className="row g-2">
                    <div className="col-md">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Disease"
                            value={newDiseaseTreatment.disease}
                            onChange={(e) => setNewDiseaseTreatment({ ...newDiseaseTreatment, disease: e.target.value })}
                        />
                    </div>
                    <div className="col-md">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Treatment"
                            value={newDiseaseTreatment.treatment}
                            onChange={(e) => setNewDiseaseTreatment({ ...newDiseaseTreatment, treatment: e.target.value })}
                        />
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btn-primary" onClick={handleAddDiseaseTreatment}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthManagement;