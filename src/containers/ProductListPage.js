import React from 'react';
import '../css/ProductListPage.css';
import Layout from '../components/Layout';
import ProductStore from '../components/ProductStore';
import ProductPage from '../components/ProductPage';
import getParams from '../utils/getParams';
import { useLocation } from "react-router-dom";
import ClothingAndAccessories from '../components/ClothingAndAccessories';

const ProductListPage = ({props}) => {

  const location = useLocation();
  const renderProduct = () => {
    const params = getParams(location.search);
    let content = null;
    switch(params.type){
      case "store":
        content = <ProductStore {...props} />
        break;
      case "page":
        content = <ProductPage {...props} />
        break;
      default:
        content = <ClothingAndAccessories {...props} />;
    }
    return content;
  }

  return (
    <Layout>
      {renderProduct()}
    </Layout>
  )
}

export default ProductListPage