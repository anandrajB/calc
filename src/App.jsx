import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import './App.css';
import ivebackground from './assets/ivebackground.avif';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('residential');
  const [showDialog, setShowDialog] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [location, setLocation] = useState('');
  const [electricityBill, setElectricityBill] = useState('');
  const [kwhRating, setKwhRating] = useState('');
  const [inputType, setInputType] = useState('bill');
  const [activeTab, setActiveTab] = useState('savings');

  const options = [
    { id: 'residential', label: 'Residential', icon: '🏠' },
    { id: 'commercial', label: 'Commercial', icon: '🏢' },
    { id: 'industrial', label: 'Industrial', icon: '🏭' }
  ];

  const savingsData = [
    { month: 'Jan', savings: 120, cost: 80 },
    { month: 'Feb', savings: 135, cost: 75 },
    { month: 'Mar', savings: 150, cost: 70 },
    { month: 'Apr', savings: 165, cost: 65 },
    { month: 'May', savings: 180, cost: 60 },
    { month: 'Jun', savings: 190, cost: 55 },
    { month: 'Jul', savings: 195, cost: 50 },
    { month: 'Aug', savings: 185, cost: 55 },
    { month: 'Sep', savings: 170, cost: 60 },
    { month: 'Oct', savings: 155, cost: 65 },
    { month: 'Nov', savings: 140, cost: 70 },
    { month: 'Dec', savings: 125, cost: 75 }
  ];

  const productionData = [
    { month: 'Jan', production: 450 },
    { month: 'Feb', production: 520 },
    { month: 'Mar', production: 600 },
    { month: 'Apr', production: 680 },
    { month: 'May', production: 750 },
    { month: 'Jun', production: 800 },
    { month: 'Jul', production: 820 },
    { month: 'Aug', production: 780 },
    { month: 'Sep', production: 700 },
    { month: 'Oct', production: 620 },
    { month: 'Nov', production: 540 },
    { month: 'Dec', production: 480 }
  ];

  const handleGetStarted = () => {
    setShowDialog(true);
  };

  const handleSubmit = () => {
    if (location && (electricityBill || kwhRating)) {
      setShowDialog(false);
      setShowResults(true);
    }
  };

  const orderData = {
    systemSize: '6.5 kW',
    panels: '18 panels',
    estimatedCost: '$18,500',
    taxCredit: '$5,550 (30%)',
    netCost: '$12,950',
    paybackPeriod: '6-8 years',
    co2Offset: '7.8 tons/year'
  };

  return (
    <div id="root" className="app-root">
      {!showResults ? (
        <div className="container">
          <div className="main-layout">
            
            <div className="image-container">
               <img
                  src="https://res.cloudinary.com/dikq4mtrh/image/upload/v1762442702/illumine_logo_lmi7yw.png"
                  alt="Solar Panel System"
                  className='illumin-logo'
                />
              <img
                  src={ivebackground}
                  alt="Solar Panel System"
                  className="solar-image"
                />
              
            </div>
            
            <div className="options-container">
              <h1 className="main-title">Energy Calc</h1>
              <p className="subtitle">Choose your property type to get started</p>
              
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
                >
                  <div className="option-content">
                    <span className="option-icon">{option.icon}</span>
                    <span className="option-label">{option.label}</span>
                  </div>
                </div>
              ))}

              <button onClick={handleGetStarted} className="get-started-btn">
                Get Started →
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <button onClick={() => setShowResults(false)} className="back-btn">
            ← Back
          </button>

          <div className="results-layout">
            <div className="chart-section">
              <h2 className="section-title">Annual Solar Savings</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={savingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="savings" stroke="#667eea" strokeWidth={3} name="Savings ($)" />
                  <Line type="monotone" dataKey="cost" stroke="#f59e0b" strokeWidth={3} name="Grid Cost ($)" />
                </LineChart>
              </ResponsiveContainer>

              <div className="production-section">
                <h3 className="subsection-title">Monthly Production</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={productionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="production" fill="#10b981" name="kWh Produced" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="tabs-section">
              <div className="tabs-header">
                {['savings', 'system', 'impact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'savings' && (
                <div>
                  <h3 className="tab-title">Financial Summary</h3>
                  <div className="stats-grid">
                    <div className="stat-card blue">
                      <div className="stat-label">First Year Savings</div>
                      <div className="stat-value">$1,980</div>
                    </div>
                    <div className="stat-card green">
                      <div className="stat-label">25-Year Savings</div>
                      <div className="stat-value green-text">$49,500</div>
                    </div>
                    <div className="stat-card yellow">
                      <div className="stat-label">ROI</div>
                      <div className="stat-value yellow-text">282%</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'system' && (
                <div>
                  <h3 className="tab-title">System Details</h3>
                  <div className="details-list">
                    {Object.entries(orderData).map(([key, value]) => (
                      <div key={key} className="detail-item">
                        <span className="detail-key">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="detail-value">{value}</span>
                      </div>
                    ))}
                  </div>
                  <button className="quote-btn">Get Quote</button>
                </div>
              )}

              {activeTab === 'impact' && (
                <div>
                  <h3 className="tab-title">Environmental Impact</h3>
                  <div className="impact-grid">
                    <div className="impact-card green">
                      <div className="impact-icon">🌱</div>
                      <div className="impact-value green-text">195 Trees</div>
                      <div className="impact-label">Equivalent planted annually</div>
                    </div>
                    <div className="impact-card blue">
                      <div className="impact-icon">🚗</div>
                      <div className="impact-value blue-text">17,200 Miles</div>
                      <div className="impact-label">Car emissions offset</div>
                    </div>
                    <div className="impact-card yellow">
                      <div className="impact-icon">⚡</div>
                      <div className="impact-value yellow-text">8,760 kWh</div>
                      <div className="impact-label">Clean energy generated</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2 className="dialog-title">Get Your Estimate</h2>
            <div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your address"
                  className="form-input"
                />
                
              </div>

              <div className="form-group">
                <div className="toggle-buttons">
                  <button
                    onClick={() => setInputType('bill')}
                    className={`toggle-btn ${inputType === 'bill' ? 'active' : ''}`}
                  >
                    Monthly Bill
                  </button>
                  <button
                    onClick={() => setInputType('kwh')}
                    className={`toggle-btn ${inputType === 'kwh' ? 'active' : ''}`}
                  >
                    Avg kWh
                  </button>
                </div>

                {inputType === 'bill' ? (
                  <div>
                    <label className="form-label">Monthly Electricity Bill ($)</label>
                    <input
                      type="number"
                      value={electricityBill}
                      onChange={(e) => setElectricityBill(e.target.value)}
                      placeholder="150"
                      className="form-input"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="form-label">Average kWh Usage</label>
                    <input
                      type="number"
                      value={kwhRating}
                      onChange={(e) => setKwhRating(e.target.value)}
                      placeholder="900"
                      className="form-input"
                    />
                  </div>
                )}
              </div>

              <div className="dialog-actions">
                <button onClick={() => setShowDialog(false)} className="cancel-btn">
                  Cancel
                </button>
                <button onClick={handleSubmit} className="submit-btn">
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}