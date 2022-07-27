import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getStores } from '../../redux/Storepage/storepage';
import Store from '../Store';
import '../../index.css';
import '../CSS/home.css';

const Storehome = () => {
  const stores = useSelector((state) => state.stores);
  // console.log(stores);

  const dispatch = useDispatch();

  useEffect(() => {
    if (stores.length === 0) {
      dispatch(getStores());
    }
  }, []);
  console.log(stores);
  return (
    <div>
      <div className="heading-container">
        <h1 className="heading">STORES</h1>
      </div>
      <ul className="deals-list">
        {stores.map((store) => (
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
