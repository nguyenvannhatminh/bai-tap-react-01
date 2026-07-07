import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Đã thêm nhiều tên và ID vào danh sách ở đây
        const res = {
          data: [
            { id: '1', name: 'John Doe', status: 'Active' },
            { id: '2', name: 'Jane Smith', status: 'Inactive' },
            { id: '3', name: 'Alex Johnson', status: 'Active' },
            { id: '4', name: 'Emily Brown', status: 'Pending' }
          ]
        };
        setData(res.data);
      } catch (error) {
        console.error("Lỗi fetch API:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      
      {/* 1. HEADER */}
      <nav className="navbar navbar-expand navbar-light bg-light px-4 border-bottom">
        <span className="navbar-brand fw-bold text-dark me-4">MY APP</span>
        <div className="navbar-nav">
          <a className="nav-link text-secondary me-2" href="#home">Home</a>
          <a className="nav-link text-secondary me-2" href="#link">Link</a>
          <a className="nav-link text-secondary dropdown-toggle" href="#options">Options</a>
        </div>
      </nav>

      {/* 2. BANNER */}
      <div 
        className="position-relative w-100" 
        style={{ 
          backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-surface-textures-white-micro-geometric-details_83282-3112.jpg")', 
          backgroundColor: '#c4e5e1', 
          backgroundBlendMode: 'multiply', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px' 
        }}
      >
        <span 
          className="position-absolute text-white fw-light" 
          style={{ left: '40px', top: '50%', transform: 'translateY(-50%)', fontSize: '3rem', cursor: 'pointer' }}
        >
          &#10094;
        </span>
      </div>

      {/* 3. CONTENT (Hiển thị danh sách nhiều người) */}
      <div className="container-fluid px-0 flex-grow-1">
        <div className="table-responsive">
          <table className="table table-bordered mb-0" style={{ borderColor: '#dee2e6' }}>
            <thead className="table-light">
              <tr>
                <th className="fw-bold py-2 px-3 text-dark border-end" style={{ width: '45%' }}>Name</th>
                <th className="fw-bold py-2 px-3 text-dark border-end" style={{ width: '15%' }}>ID</th>
                <th className="fw-bold py-2 px-3 text-dark">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="align-middle">
                  <td className="py-2 px-3 border-end text-dark">{item.name}</td>
                  <td className="py-2 px-3 border-end text-dark">{item.id}</td>
                  <td className="py-2 px-3 text-dark">
                    <span className={`badge ${item.status === 'Active' ? 'bg-success' : item.status === 'Inactive' ? 'bg-danger' : 'bg-warning'}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. FOOTER */}
      <footer className="text-center py-3 bg-white border-top">
        <span className="text-dark" style={{ fontSize: '0.9rem' }}>
          &#127941; Hanoi, August 2026
        </span>
      </footer>

    </div>
  );
}

export default App;