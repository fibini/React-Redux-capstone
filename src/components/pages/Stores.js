import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getStores } from '../../redux/Storepage/storepage';
import Store from '../Store';
import '../../index.css';
import '../CSS/home.css';

const Storehome = () => {
  const [search, setSearch] = useState('');
  const stores = useSelector((state) => state.stores);

  const dispatch = useDispatch();

  useEffect(() => {
    if (stores.length === 0) {
      dispatch(getStores());
    }
  }, []);
  return (
    <div>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search stores here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="heading-container">
        <h1 className="heading">STORES</h1>
      </div>
      <ul className="deals-list">
        {stores.filter((value) => value.active === 1).filter((value) => {
          if (!value) {
            return value;
          }
          if (value.title.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }

          return null;
        }).map((store) => (
          <Store
            key={uuidv4()}
            title={store.title}
            id={store.id}
            images={store.images}
          />
        ))}
      </ul>
    </div>
  );
};

export default Storehome;
