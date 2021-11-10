import {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
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

  const history = useHistory();
  useEffect(() => {
    if (fetchedVisible === false && submitting.food === '' && submitting.town === '') {
      history.push('');
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
        fetchedVisible === true && submitting.food !== '' && submitting.town !== '' &&
        <Fetched 
          submitting={submitting}
        />
      } 

    </div>
  )
};

export default App;