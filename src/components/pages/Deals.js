import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getDeals } from '../../redux/Deals/deals';
import Deal from '../Deal';
import '../../index.css';
import '../CSS/home.css';

const Dealsdetails = () => {
  const deals = useSelector((state) => state.deals);
  console.log(deals);

  const params = useParams();
  console.log(params);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeals(params.id));
  }, []);

  return (
    <div>
      <div className="heading-container">
        <h1 className="heading">GAMES</h1>
      </div>
      <ul className="deals-box">
        {deals.map((deal) => (
          <Deal
            key={uuidv4()}
            title={deal.title}
            id={deal.id}
            salePrice={deal.salePrice}
            normalPrice={deal.normalPrice}
            steamRating={deal.steamRating}
            steamRatingPercent={deal.steamRatingPercent}
            dealRating={deal.dealRating}
            thumb={deal.thumb}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dealsdetails;
