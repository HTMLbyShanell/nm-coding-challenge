import {useState, useEffect} from 'react';
import { v4 as uuid4 } from 'uuid';

console.log(process.env.REACT_APP_API_KEY)

const Fetched = ({submitting}) => {

  const [dataFromYelp, setDataFromYelp] = useState([]);

  useEffect(() => {
    const fetchingYelpFx = async () => {
      try {
        if (submitting.food !== '' && submitting.town !== '') {
          const raw_data = await fetch('/api/yelp');
          const json_data = await raw_data.json();
          //console.log(json_data.businesses[0]);
          setDataFromYelp(json_data.businesses);
        }
      } catch(err) {
        console.error(err);
      }
    };
    fetchingYelpFx();
  }, [submitting]);

  const businesses = dataFromYelp.map((i) => {

    const location = i.location.display_address.map((address) => {
      return (
        <p key={uuid4()} style={{fontWeight: 300}}>{address}</p>
      )
    });

    let all_categories = 0;
    const categories = i.categories.map((category) => {
      all_categories++;
      return (
        <p key={uuid4()} style={{color: '#0060ff'}} className="one-category">
          {category.title}{all_categories === i.categories.length ? '.' : ','}
        </p>
      )
    });

    return (
      <div key={uuid4()} className="one-single-record">
        <img src={i.image_url} alt=""/>
        <div className="txt-data">
          <p>{i.name}</p>
          <p style={{color: '#ff0060'}}>
            {i.rating}/5 ({i.review_count} {i.review_count === 1 ? 'review' : 'reviews'})
          </p>
          {location}
          <div className="all-categories">
            {categories}
          </div>
        </div>
        {/* <br/> */}
      </div>
    )
  });

  return (
    <div className="Fetched">
      {businesses}
    </div>
  )
};

export default Fetched; 