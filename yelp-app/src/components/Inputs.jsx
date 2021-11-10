import {useHistory} from 'react-router-dom';

const Inputs = ({
  entering, setEntering, setSubmitting, setFetchedVisible
}) => {

  const enteringFoodFx = (e) => {
    setEntering((allValues) => ({
      ...allValues,
      food: e.target.value
    }));
  };

  const enteringTownFx = (e) => {
    setEntering((allValues) => ({
      ...allValues,
      town: e.target.value
    }))
  };

  let qs = `/search?term=${entering.food}&location=${entering.town}`;
  const history = useHistory();

  const submittingFx = (e) => {
    e.preventDefault();
    setSubmitting(entering);
    setFetchedVisible(true);
    if (entering.food !== '' && entering.town !== '') {
      history.push(qs);
    }
    setEntering({
      food: '',
      town: ''
    });
  };

  return (
    <div className="Inputs">
      {}

      <input 
        type="text"
        placeholder="enter food"
        name="food"
        value={entering.food}
        onChange={enteringFoodFx}
      />

      <input 
        type="text"
        placeholder="enter town"
        name="town"
        value={entering.town}
        onChange={enteringTownFx}
      />

      <button onClick={submittingFx}>Search</button>

    </div>
  )
};

export default Inputs;