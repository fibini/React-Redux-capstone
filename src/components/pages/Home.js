import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getDeals } from '../../redux/Deals/deals';
import Deal from '../Deal';
import '../../index.css';

const Home = () => {
  const deals = useSelector((state) => state.deals);
  console.log(deals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeals());
  }, []);

  return (
    <div>
      <ul className="deals-list">
        {deals.map((deal) => (
          <Deal
            key={uuidv4()}
            title={deal.title}
            salePrice={deal.salePrice}
            normalPrice={deal.normalPrice}
            thumb={deal.thumb}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
