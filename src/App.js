import React from 'react';
import './App.css';

//import Ant Design Framework
import 'antd/dist/antd.css'

//import components
import BarChart from './components/Chart/BarChart'
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
