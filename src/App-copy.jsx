import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
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
    <div id = "root" style={{ minHeight: '100vh'}}>
      {!showResults ? (
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', minHeight: 'calc(100vh - 40px)' }}>
            
            <div style={{ flex: '1.2', minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '20px 20px 60px rgba(0,0,0,0.3), -10px -10px 40px rgba(255,255,255,0.1)',
                maxWidth: '500px',
                width: '100%'
              }}>
                <img
                  src={ivebackground}
                  alt="Solar Panel System"
                  style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                />
              
              </div>
            </div>
            
            {/* Left Side - Options */}
            <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h1 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: '700', marginBottom: '10px' }}>
                Energy Calc
              </h1>
              <p style={{ color: 'rgba(206, 206, 206, 0.9)', fontSize: 'clamp(14px, 2vw, 16px)', marginBottom: '20px' }}>
                Choose your property type to get started
              </p>
              
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  style={{
                    background: selectedOption === option.id ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: selectedOption === option.id ? '2px solid white' : '2px solid rgba(255,255,255,0.2)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: selectedOption === option.id ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: selectedOption === option.id ? '0 8px 24px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '32px' }}>{option.icon}</span>
                    <span style={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>
                      {option.label}
                    </span>
                  </div>
                </div>
              ))}

              <button
                onClick={handleGetStarted}
                style={{
                  marginTop: '20px',
                  background: 'white',
                  color: '#667eea',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Get Started →
              </button>
            </div>

            {/* Right Side - AVIF Image with Shadow */}
            
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
          <button
            onClick={() => setShowResults(false)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            ← Back
          </button>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {/* Left Side - Graph */}
            <div style={{
              flex: '1.5',
              minWidth: '300px',
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}>
              <h2 style={{ color: '#667eea', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
                Annual Solar Savings
              </h2>
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

              <div style={{ marginTop: '30px' }}>
                <h3 style={{ color: '#667eea', fontSize: '20px', fontWeight: '600', marginBottom: '15px' }}>
                  Monthly Production
                </h3>
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

            {/* Right Side - Tabs */}
            <div style={{
              flex: '1',
              minWidth: '300px',
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '2px solid #e2e8f0' }}>
                {['savings', 'system', 'impact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      flex: '1',
                      background: 'none',
                      border: 'none',
                      borderBottom: activeTab === tab ? '3px solid #667eea' : '3px solid transparent',
                      color: activeTab === tab ? '#667eea' : '#64748b',
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textTransform: 'capitalize'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'savings' && (
                <div>
                  <h3 style={{ color: '#667eea', fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                    Financial Summary
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ background: '#f0f9ff', padding: '16px', borderRadius: '12px' }}>
                      <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '4px' }}>First Year Savings</div>
                      <div style={{ color: '#667eea', fontSize: '28px', fontWeight: '700' }}>$1,980</div>
                    </div>
                    <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '12px' }}>
                      <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '4px' }}>25-Year Savings</div>
                      <div style={{ color: '#10b981', fontSize: '28px', fontWeight: '700' }}>$49,500</div>
                    </div>
                    <div style={{ background: '#fef3c7', padding: '16px', borderRadius: '12px' }}>
                      <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '4px' }}>ROI</div>
                      <div style={{ color: '#f59e0b', fontSize: '28px', fontWeight: '700' }}>282%</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'system' && (
                <div>
                  <h3 style={{ color: '#667eea', fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                    System Details
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {Object.entries(orderData).map(([key, value]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                        <span style={{ color: '#64748b', fontSize: '14px', textTransform: 'capitalize' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span style={{ color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    style={{
                      marginTop: '20px',
                      width: '100%',
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '14px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              )}

              {activeTab === 'impact' && (
                <div>
                  <h3 style={{ color: '#667eea', fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                    Environmental Impact
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ textAlign: 'center', padding: '20px', background: '#f0fdf4', borderRadius: '12px' }}>
                      <div style={{ fontSize: '48px', marginBottom: '8px' }}>🌱</div>
                      <div style={{ color: '#10b981', fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>195 Trees</div>
                      <div style={{ color: '#64748b', fontSize: '14px' }}>Equivalent planted annually</div>
                    </div>
                    <div style={{ textAlign: 'center', padding: '20px', background: '#eff6ff', borderRadius: '12px' }}>
                      <div style={{ fontSize: '48px', marginBottom: '8px' }}>🚗</div>
                      <div style={{ color: '#3b82f6', fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>17,200 Miles</div>
                      <div style={{ color: '#64748b', fontSize: '14px' }}>Car emissions offset</div>
                    </div>
                    <div style={{ textAlign: 'center', padding: '20px', background: '#fef3c7', borderRadius: '12px' }}>
                      <div style={{ fontSize: '48px', marginBottom: '8px' }}>⚡</div>
                      <div style={{ color: '#f59e0b', fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>8,760 kWh</div>
                      <div style={{ color: '#64748b', fontSize: '14px' }}>Clean energy generated</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Dialog */}
      {showDialog && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: '1000'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h2 style={{ color: '#667eea', fontSize: '28px', fontWeight: '700', marginBottom: '24px' }}>
              Get Your Solar Estimate
            </h2>
            <div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: '#64748b', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your address"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                <div style={{ color: '#64748b', fontSize: '12px', marginTop: '6px' }}>
                  💡 Use Google Places API for autocomplete
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <button
                    onClick={() => setInputType('bill')}
                    style={{
                      flex: '1',
                      padding: '10px',
                      background: inputType === 'bill' ? '#667eea' : '#f1f5f9',
                      color: inputType === 'bill' ? 'white' : '#64748b',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Monthly Bill
                  </button>
                  <button
                    onClick={() => setInputType('kwh')}
                    style={{
                      flex: '1',
                      padding: '10px',
                      background: inputType === 'kwh' ? '#667eea' : '#f1f5f9',
                      color: inputType === 'kwh' ? 'white' : '#64748b',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Avg kWh
                  </button>
                </div>

                {inputType === 'bill' ? (
                  <div>
                    <label style={{ display: 'block', color: '#64748b', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                      Monthly Electricity Bill ($)
                    </label>
                    <input
                      type="number"
                      value={electricityBill}
                      onChange={(e) => setElectricityBill(e.target.value)}
                      placeholder="150"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                ) : (
                  <div>
                    <label style={{ display: 'block', color: '#64748b', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                      Average kWh Usage
                    </label>
                    <input
                      type="number"
                      value={kwhRating}
                      onChange={(e) => setKwhRating(e.target.value)}
                      placeholder="900"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => setShowDialog(false)}
                  style={{
                    flex: '1',
                    padding: '14px',
                    background: '#f1f5f9',
                    color: '#64748b',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  style={{
                    flex: '1',
                    padding: '14px',
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
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


