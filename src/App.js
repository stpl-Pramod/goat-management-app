
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../src/shared/Sidebar.css';

import Sidebar from './shared/Sidebar';
import Header from './shared/Header';
import Dashboard from './components/Dashboard';
import HousingManagement from './components/HousingManagement';
import FeedingManagement from './components/FeedingManagement';
import HealthManagement from './components/HealthManagement';
import BreedingManagement from './components/BreedingManagement';
import KidManagement from './components/KidManagement';
import RecordKeeping from './components/RecordKeeping';
import LabourAndRoutine from './components/LabourAndRoutine';
import BiosecurityAndHygiene from './components/BiosecurityAndHygiene';

function App() {
  return (
    <div className="App">
       <Router>
        
                <Sidebar />
                <Header />
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
                                <li className="nav-item">
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
                                </li> 
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Reports
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Report 1</a></li>
                                        <li><a className="dropdown-item" href="#">Report 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/housing" element={<HousingManagement />} />
                        <Route path="/feeding" element={<FeedingManagement />} />
                        <Route path="/health" element={<HealthManagement />} />
                        <Route path="/breeding" element={<BreedingManagement />} />
                        <Route path="/kids" element={<KidManagement />} />
                        <Route path="/records" element={<RecordKeeping />} />
                        <Route path="/tasks" element={<LabourAndRoutine />} />
                        <Route path="/biosecurity" element={<BiosecurityAndHygiene />} /> 
                    </Routes>
                </div>
            </Router>
    </div>
  );
}

export default App;
