import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0' }}>
        <Link to="/" className="navbar-brand">
          <FaMapMarkerAlt /> <span>CITY</span> SERVICES
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className="navbar-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/workers" style={{ color: '#000', fontWeight: '800', fontSize: '0.95rem' }}>Discover</Link>
            {!user && (
              <>
                <Link to="/login" style={{ color: '#4B5563', fontWeight: '700', fontSize: '0.95rem' }}>Login</Link>
                <Link to="/register" className="btn" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>Join Now</Link>
              </>
            )}
          </div>

          {user && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '1px solid #E5E7EB', paddingLeft: '1.5rem' }}>
              <div 
                onClick={() => navigate(user.role === 'Admin' ? '/dashboard/admin' : user.role === 'Worker' ? '/dashboard/worker' : '/dashboard/customer')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#111827' }}>{user.name}</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase' }}>{user.role} Dashboard</div>
                </div>
                <FaUserCircle size={32} color="#D1D5DB" />
              </div>
              
              <button 
                onClick={handleLogout}
                style={{ background: '#F3F4F6', border: 'none', padding: '0.5rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                title="Logout"
                onMouseOver={e => e.currentTarget.style.background = '#FEE2E2'}
                onMouseOut={e => e.currentTarget.style.background = '#F3F4F6'}
              >
                <FaSignOutAlt color="#6B7280" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
