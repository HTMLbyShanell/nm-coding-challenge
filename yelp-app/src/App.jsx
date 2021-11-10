import {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Inputs from './components/Inputs';
import Fetched from './components/Fetched';
import './App.css';

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

  return (
    <div className="App">
      <p> Filler Text</p>

      <Nav 
        setSubmitting={setSubmitting}
        setEntering={setEntering}
        setFetchedVisible={setFetchedVisible}
      /> 

      <Switch>
        <Route exact path="/"></Route>
      </Switch>

      <Inputs
        entering={entering}  
        setEntering={setEntering} 
        setSubmitting={setSubmitting}
        setFetchedVisible={setFetchedVisible}
      />

      {  
        fetchedVisible === true && 
        <Fetched 
          submitting={submitting}
        />
      } 

    </div>
  )
};

export default App;