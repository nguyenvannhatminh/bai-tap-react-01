import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dữ liệu mẫu
    const res = {
      data: [
        { id: '1', name: 'John Doe', status: 'Active' },
        { id: '2', name: 'Jane Smith', status: 'Inactive' },
        { id: '3', name: 'Alex Johnson', status: 'Active' },
        { id: '4', name: 'Emily Brown', status: 'Pending' }
      ]
    };
    setData(res.data);
  }, []);

  return (
    // Dùng w-100, m-0, p-0 để ép tràn 100% viền màn hình
    <div className="d-flex flex-column min-vh-100 w-100 m-0 p-0 bg-light" style={{ overflowX: 'hidden' }}>
      
      {/* 1. HEADER: Tràn viền, viền dưới nhạt */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-5 py-3 border-bottom w-100">
        <span className="navbar-brand fw-bolder text-dark fs-4 me-5">MY APP</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active fw-medium" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link fw-medium text-secondary" href="#link">Link</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-medium text-secondary" href="#options">Options</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 2. BANNER: Gradient xanh ngọc mượt mà, full chiều rộng */}
      <div 
        className="w-100 position-relative d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(135deg, #a1dacd 0%, #dcf0ec 100%)', 
          height: '280px' 
        }}
      >
        <span 
          className="text-white ms-5 display-4 opacity-75" 
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          &#10094;
        </span>
      </div>

      {/* 3. CONTENT: Dùng container-fluid để rộng hết cỡ, bọc Table trong Card đổ bóng */}
      <div className="container-fluid flex-grow-1 px-5 py-5 w-100">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden w-100">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0 text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th className="py-3 text-start px-4 text-muted fw-semibold">Name</th>
                    <th className="py-3 text-muted fw-semibold">ID</th>
                    <th className="py-3 text-muted fw-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="py-3 text-start px-4 fw-medium text-dark">{item.name}</td>
                      <td className="py-3 text-secondary">{item.id}</td>
                      <td className="py-3">
                        <span 
                          className={`badge rounded-pill px-3 py-2 fw-medium ${
                            item.status === 'Active' ? 'bg-success bg-opacity-75' : 
                            item.status === 'Inactive' ? 'bg-danger bg-opacity-75' : 
                            'bg-warning text-dark bg-opacity-75'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FOOTER: Căn giữa, text nhạt */}
      <footer className="text-center py-4 bg-white border-top w-100 mt-auto">
        <span className="text-muted fw-medium" style={{ fontSize: '0.95rem' }}>
          📍 Hanoi, August 2026
        </span>
      </footer>

    </div>
  );
}

export default App;