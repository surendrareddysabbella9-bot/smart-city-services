import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar, FaShieldAlt, FaBriefcase, FaUserCheck, FaChevronRight } from 'react-icons/fa';

function WorkerCard({ worker }) {
  const isNearest = worker.distance && parseFloat(worker.distance) < 5; 

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden', padding: '1.25rem', gap: '1rem' }}>
      
      {isNearest && (
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FFD800', color: '#000000', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.25rem', boxShadow: '0 4px 10px rgba(255,216,0,0.3)' }}>
           <FaMapMarkerAlt size={10} /> Nearest Pro
        </div>
      )}

      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
        <div style={{ width: '64px', height: '64px', background: '#F3F4F6', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#6B7280', border: '1px solid #E5E7EB' }}>
          {worker.name.charAt(0)}
        </div>
        <div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {worker.name}
            {worker.verification_status === 'Verified' && <FaUserCheck color="#10B981" size={16} />}
          </h3>
          <p style={{ color: '#6B7280', fontSize: '0.85rem', fontWeight: '600' }}>{worker.category}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: '#F9FAFB', padding: '1rem', borderRadius: '16px', border: '1px solid #F3F4F6' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#9CA3AF', textTransform: 'uppercase' }}>Rating</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '800' }}>
            <FaStar color="#F59E0B" /> {worker.averageRating || '4.0'}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#9CA3AF', textTransform: 'uppercase' }}>Jobs</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '800' }}>
            <FaBriefcase color="#8B5CF6" /> {worker.total_jobs || 0}
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
           <FaShieldAlt color="#10B981" />
           <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4B5563' }}>Trust Score: <strong style={{ color: '#000' }}>{Number(worker.trust_score).toFixed(0)}%</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
           <FaMapMarkerAlt color="#EF4444" />
           <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4B5563' }}>
              {worker.location}
              {worker.distance && <span style={{ color: '#10B981', marginLeft: '0.4rem' }}>({worker.distance} km)</span>}
           </span>
        </div>
      </div>

      <Link to={`/worker/${worker.id}`} className="btn" style={{ width: '100%', justifyContent: 'space-between', padding: '0.85rem 1.25rem' }}>
        View Details <FaChevronRight size={14} />
      </Link>
    </div>
  );
}

export default WorkerCard;
