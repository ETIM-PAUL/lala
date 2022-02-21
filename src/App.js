import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import BarChart from './components/Chart/BarChart'
import CountTable from './components/CountTable';
import { Navbar } from './components/Chart/NavHeader';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <BarChart />
    </div>
  );
}

export default App;
