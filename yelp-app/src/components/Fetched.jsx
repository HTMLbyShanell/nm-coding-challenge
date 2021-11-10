import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';

const Fetched = () => {

  const qs = useLocation();
  //console.log(qs);

  const pathname = qs.pathname;
  const {term, location} = queryString.parse(qs.search);  
  //console.log(pathname);
  //console.log(term);
  //console.log(location);

  const YELP = 'https://api.yelp.com/v3/businesses';     
  const ENDPOINT = `${YELP}${pathname}?term=${term}&location=${location}`;     
  //console.log(ENDPOINT);

  const API_KEY = '';

  useEffect(() => {
    const fetchingYelpFx = async () => {
      try {
        const raw_data = await fetch(ENDPOINT, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            Origin: 'localhost',
            withCredentials: true
          }
        });
        console.log(raw_data);
      } catch(err) {
        console.error(err);
      }
    };
    fetchingYelpFx();
  }, [ENDPOINT]);

  return (
    <div className="Fetched">
      <p>this is FxComp `Fetched.jsx`</p>
      
    </div>
  )
};

export default Fetched;