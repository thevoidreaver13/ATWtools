import React from 'react';
import './App.css';
import AppRouter from './Router';
import MyNavbar from './components/Navbar'; // นำเข้าคอมโพเนนต์ Navbar

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <header className="App-header">
        {/* แสดงเนื้อหาของแอปพลิเคชัน */}
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
