
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard';
import HousingManagement from './components/HousingManagement';
import FeedingManagement from './components/FeedingManagement';

function App() {
  return (
    <div className="App">
       <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container">
                        <Link className="navbar-brand" to="/">GFMS</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#basic-navbar-nav"
                            aria-controls="basic-navbar-nav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="basic-navbar-nav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Dashboard</Link>
                                </li>
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/housing">Housing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/feeding">Feeding</Link>
                                </li>
                                {/*<li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/breeding">Breeding</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/kids">Kids</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/records">Records</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tasks">Tasks</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/biosecurity">Biosecurity</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/housing" element={<HousingManagement />} />
                        <Route path="/feeding" element={<FeedingManagement />} />
                        {/* <Route path="/health" element={<HealthManagement />} />
                        <Route path="/breeding" element={<BreedingManagement />} />
                        <Route path="/kids" element={<KidManagement />} />
                        <Route path="/records" element={<RecordKeeping />} />
                        <Route path="/tasks" element={<LabourAndRoutine />} />
                        <Route path="/biosecurity" element={<BiosecurityAndHygiene />} /> */}
                    </Routes>
                </div>
            </Router>
    </div>
  );
}

export default App;
