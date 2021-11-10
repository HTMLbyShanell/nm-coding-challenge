import React from 'react';
import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Nav from './components/Nav';
import Inputs from './components/Inputs';
import Fetched from './components/Fetched';
import './App.scss';

const App = () => {

  const [entering, setEntering] = useState({
    food: '',
    town: ''
  });

  const [submitting, setSubmitting] = useState({
    food: '',
    town: ''
  });

  const [fetchedVisible, setFetchedVisible] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (fetchedVisible === false && submitting.food === '' && submitting.town === '') {
      navigate.push('');
    }
  });

  return (
    <div className="App">
      {}

      <Nav 
        setSubmitting={setSubmitting}
        setEntering={setEntering}
        setFetchedVisible={setFetchedVisible}
      /> 

      <Routes>
        <Route exact path="/"></Route>
      </Routes>

      <Inputs
        entering={entering}  
        setEntering={setEntering} 
        setSubmitting={setSubmitting}
        setFetchedVisible={setFetchedVisible}
      />

      {  
        fetchedVisible === true && submitting.food !== '' && submitting.town !== '' &&
        <Fetched 
          submitting={submitting}
        />
      } 

    </div>
  )
};

export default App;