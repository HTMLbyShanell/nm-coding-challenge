import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ({
  setSubmitting, setEntering, setFetchedVisible
}) => {

  const cleanInputsFx = (e) => {
    e.preventDefault();
    setFetchedVisible(false);
    setEntering({
      food: '',
      town: ''
    });
    setSubmitting({
      food: '',
      town: ''
    });
  };

  return (
    <div className="Nav">
      {}
      <ul>
        <li onClick={cleanInputsFx}><NavLink to="https://htmlbyshanell.com/">NM Coding Challenge</NavLink></li>
      </ul>
    </div>
  )
};

export default Nav;