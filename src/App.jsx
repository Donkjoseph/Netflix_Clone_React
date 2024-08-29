import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import Rowtwo from './components/Rowtwo/Rowtwo';

function App() {
  return (
<div className='App'>
<NavBar/>
<Banner/>
<RowPost/>
<Rowtwo/>

</div>
  );
}

export default App;
