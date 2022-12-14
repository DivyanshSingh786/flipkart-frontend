import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { getProductsPage } from '../actions';
import getParams from '../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../components/Card';

const ProductPage = (props) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const { page } = product;


  useEffect(() => {
    const params = getParams(location.search);
    const payload = {
      params
    }
    dispatch(getProductsPage(payload));
  }, []);

  return (
    <div style={{ margin: '0 10px' }}>
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {
          page.banners && page.banners.map((banner, index) =>
          <a key={index} style={{display: 'block'}} href={banner.navigateTo}>
            <img src={banner.img} alt="" />
          </a>
          )
        }
      </Carousel>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '10px 0'}}>
        {
          page.products && page.products.map((product, index) =>
            <Card key={index} style={{width: '400px', height: '200px', margin: '5px'}}>
              <img width={'100%'} height={'100%'} src={product.img} alt="" />
            </Card>
          )
        }
      </div>
    </div>
  )
}

export default ProductPage