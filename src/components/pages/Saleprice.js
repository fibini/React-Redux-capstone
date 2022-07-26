import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getSales } from '../../redux/Deals/sales';
import Sales from '../Sales';
import '../../index.css';

const Saleprice = () => {
  const sales = useSelector((state) => state.sales);
  console.log(sales);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSales());
  }, []);

  return (
    <div>
      <ul className="deals-list">
        {sales.map((sale) => (
          <Sales
            key={uuidv4()}
            title={sale.title}
            salePrice={sale.salePrice}
            thumb={sale.thumb}
          />
        ))}
      </ul>
    </div>
  );
};

export default Saleprice;
