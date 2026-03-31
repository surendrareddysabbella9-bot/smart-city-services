import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaBolt, FaWrench, FaBrush, FaHammer, FaHardHat, FaUserCheck, FaChevronRight, FaStar, FaShieldAlt } from 'react-icons/fa';

function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/workers?search=${encodeURIComponent(search)}`);
    else navigate('/workers');
  };

  const services = [
    { name: 'Electrician', icon: <FaBolt />, color: '#FEF3C7', iconColor: '#D97706', pros: '342 Verified' },
    { name: 'Plumber', icon: <FaWrench />, color: '#DBEAFE', iconColor: '#2563EB', pros: '289 Verified' },
    { name: 'Painter', icon: <FaBrush />, color: '#FCE7F3', iconColor: '#DB2777', pros: '156 Verified' },
    { name: 'Maintenance', icon: <FaHardHat />, color: '#DCFCE7', iconColor: '#059669', pros: '410 Verified' },
    { name: 'Construction', icon: <FaHammer />, color: '#F3E8FF', iconColor: '#9333EA', pros: '190 Verified' },
    { name: 'All Services', icon: <FaChevronRight />, color: '#F3F4F6', iconColor: '#374151', pros: 'Explore' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#FFFFFF' }}>
      
      {/* Hero Section - Rapido Style */}
      <div style={{ padding: '4rem 2rem 6rem', background: '#F9FAFB', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Map Background Pattern */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")' }}></div>

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1, animation: 'fadeIn 0.6s ease-out' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '100px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '1.5rem', border: '1px solid #E5E7EB' }}>
             <FaMapMarkerAlt color="#EF4444" size={14} />
             <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#111827' }}>Smart City Services India</span>
          </div>
          
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
            Book Experts in <span style={{ background: 'var(--primary)', padding: '0 0.5rem', borderRadius: '8px' }}>Real-Time</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '3rem', fontWeight: '500' }}>
            The fastest way to get verified professionals for any repair or installation.
          </p>

          <form onSubmit={handleSearch} style={{ display: 'flex', background: 'white', padding: '0.5rem', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', maxWidth: '650px', margin: '0 auto' }}>
             <div style={{ display: 'flex', alignItems: 'center', flex: 1, padding: '0 1rem' }}>
                <FaSearch color="#9CA3AF" />
                <input 
                  type="text" 
                  placeholder="Need an Electrician? Search here..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ border: 'none', padding: '1rem', fontSize: '1.1rem', width: '100%', outline: 'none', fontWeight: '600' }}
                />
             </div>
             <button type="submit" className="btn" style={{ borderRadius: '18px', padding: '0 2rem' }}>Check Availability</button>
          </form>
        </div>
      </div>

      {/* Service Grid - Rapido Category Style */}
      <div style={{ maxWidth: '1000px', margin: '-4rem auto 4rem', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #F3F4F6' }}>
          {services.map((s, i) => (
            <div 
              key={i} 
              onClick={() => navigate(s.name === 'All Services' ? '/workers' : `/workers?category=${encodeURIComponent(s.name)}`)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s ease' }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ width: '80px', height: '80px', background: s.color, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', color: s.iconColor, boxShadow: `0 8px 16px ${s.color}66` }}>
                {s.icon}
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#111827', margin: 0 }}>{s.name}</h3>
                <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: '600' }}>{s.pros}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Stats Section */}
      <div style={{ background: '#000000', color: 'white', padding: '6rem 2rem', borderTop: '1px solid #111827' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
               <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>India's Trusted Service Network</h2>
               <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}>Connecting 15,000+ verified captains with millions of smart citizens.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>15k+</div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Verified Captains</div>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>4.9/5</div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Rider Satisfaction</div>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>250k+</div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Orders Delivered</div>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>24/7</div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Customer Support</div>
               </div>
            </div>
         </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#000000', color: '#6B7280', padding: '4rem 2rem 2rem', borderTop: '1px solid #111827' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <div className="navbar-brand" style={{ color: 'white', marginBottom: '1.5rem' }}>
               <span>CITY</span> SERVICES
            </div>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>The premier municipal and residential service network connecting verified professionals with urgent logistical demands globally.</p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: '700' }}>Platform</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li><Link to="/workers" style={{ color: '#6B7280', textDecoration: 'none' }}>Find Professionals</Link></li>
              <li><Link to="/register" style={{ color: '#6B7280', textDecoration: 'none' }}>Join our Network</Link></li>
              <li><Link to="/login" style={{ color: '#6B7280', textDecoration: 'none' }}>Captain Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: '700' }}>Safety</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Security Parameters</li>
              <li>Report Incident</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid #111827', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
          <span>&copy; {new Date().getFullYear()} Smart City Services. All rights strictly reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Protected by 256-bit TLS Encryption <FaShieldAlt color="#10B981" /></span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
