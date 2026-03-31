import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter, FaMapMarkerAlt, FaStar, FaTimes } from 'react-icons/fa';
import api from '../services/api';
import WorkerCard from '../components/WorkerCard';
import useLocation from '../hooks/useLocation';

function WorkerListing() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [minRating, setMinRating] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const { location, error: locError, loading: locLoading } = useLocation();
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['workers', filter, search, location.lat, location.lng],
    queryFn: async () => {
      let url = `/workers?limit=50&page=1${filter ? `&category=${filter}` : ''}${search ? `&search=${search}` : ''}`;
      if (location.lat && location.lng) {
        url += `&lat=${location.lat}&lng=${location.lng}`;
      }
      const res = await api.get(url);
      return res.data.data ? res.data.data.workers : (res.data.workers || res.data);
    },
    refetchInterval: 10000, 
    refetchOnWindowFocus: true
  });

  const categories = ['Electrician', 'Plumber', 'Painter', 'Maintenance Worker', 'Construction Worker'];

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Header / Search Area */}
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
             <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span> 
             <span>/</span> 
             <span style={{ color: '#111827' }}>Discover Captains</span>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '2rem', letterSpacing: '-0.03em' }}>Available Captains</h1>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
               <FaSearch style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
               <input 
                 type="text" 
                 placeholder="Search by name or skill..." 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '16px', border: '2px solid #F3F4F6', background: '#F9FAFB', outline: 'none', fontWeight: '600', fontSize: '1rem' }}
               />
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', width: '100%' }}>
               <button 
                 onClick={() => setFilter('')}
                 style={{ padding: '0.6rem 1.25rem', borderRadius: '100px', border: 'none', background: filter === '' ? '#000' : 'white', color: filter === '' ? 'white' : '#4B5563', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', border: '1px solid #E5E7EB', whiteSpace: 'nowrap' }}
               >
                 All
               </button>
               {categories.map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setFilter(cat)}
                   style={{ padding: '0.6rem 1.25rem', borderRadius: '100px', border: 'none', background: filter === cat ? '#000' : 'white', color: filter === cat ? 'white' : '#4B5563', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', border: '1px solid #E5E7EB', whiteSpace: 'nowrap' }}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: location.lat ? '#10B981' : '#6B7280', fontSize: '0.9rem', fontWeight: '600' }}>
                <FaMapMarkerAlt /> 
                {locLoading ? 'Locating...' : location.lat ? 'Showing nearby Captains first' : 'Location disabled'}
             </div>

             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <select 
                  value={minRating} 
                  onChange={(e) => setMinRating(e.target.value)}
                  style={{ padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid #E5E7EB', fontWeight: '700', outline: 'none', cursor: 'pointer' }}
                >
                  <option value="">Any Rating</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.0">3.0+ Stars</option>
                </select>

                {(filter || search || minRating) && (
                  <button 
                    onClick={() => { setFilter(''); setSearch(''); setMinRating(''); }}
                    style={{ background: 'none', border: 'none', color: '#EF4444', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    <FaTimes /> Reset
                  </button>
                )}
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ marginTop: '2rem' }}>
        {isLoading ? (
          <div className="grid">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="card" style={{ height: '320px', background: 'white', opacity: 0.6 }}></div>
            ))}
          </div>
        ) : isError ? (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '24px', border: '1px solid #FEE2E2', color: '#EF4444' }}>
             <h3 style={{ fontWeight: '800' }}>System Interruption Detected</h3>
             <p>Unable to sync with Captain fleet. Please refresh.</p>
          </div>
        ) : (data && data.length > 0) ? (
          <div className="grid">
            {data.filter(w => w.user_id !== user?.id && (!minRating || Number(w.averageRating || 0) >= Number(minRating))).map(worker => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '6rem 2rem', background: 'white', borderRadius: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
             <div style={{ width: '80px', height: '80px', background: '#F3F4F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <FaFilter size={32} color="#9CA3AF" />
             </div>
             <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>No Captains in this Scope</h2>
             <p style={{ color: '#6B7280', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Adjust your filters or try a different service category. We are constantly onboarding new verified professionals.</p>
             <button className="btn" onClick={() => { setFilter(''); setSearch(''); setMinRating(''); }}>Clear All Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkerListing;
