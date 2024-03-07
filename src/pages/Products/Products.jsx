// YourComponent.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { productService } from '../../services/Services.js';
import './Products.css'
import CategoriesBar from '../../components/Categories/CategoriesBar.jsx';
import ProductCard from '../../components/Product/ProductCard.jsx';
import Star from '../../Assets/Images/star.png';
import Ad from '../../Assets/Images/AD.png'
import Collapse from '../../components/Collapse/Collapse.jsx';
import ProductNewCard from '../../components/ProductNewCard/ProductNewCard.jsx';
import Filters from './Fitlers.jsx';
import FilterImg from '../../Assets/Images/filter.svg';

const Products = (props) => {
  const [isSmallWidth, setIsSmallWidth] = useState(window.innerWidth < 990);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallWidth(window.innerWidth < 990);
    };

    
  }, []);



  const [isFilterListOpen, setIsFilterListOpen] = useState(false);

  const handleFilterButtonClick = () => {
    setIsFilterListOpen(!isFilterListOpen);
  };

  const handleShadowDivClick = () => {
    if (isFilterListOpen) {
      setIsFilterListOpen(false);
    }
  };
  const handleInnerDivClick = (e) => {
    e.stopPropagation();
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};
  const [checkedItems, setCheckedItems] = useState([]);
  

  const handleCollapseToggle = (isOpen, newCheckedItems) => {
    if (!isOpen) {
      setCheckedItems(newCheckedItems);
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await productService.getAllProducts();
        setProducts(productsData);
        // console.log("sbdha");
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div>
    //   <h2>Products</h2>
      
    //   <div className="container">
    //     <div className="row">
    //     {products.map((product) => (
    //       <div className="col-lg-2 card">
    //         <div className='ProductImage'>
    //         <img src={product.image} alt="" width="50%" />
    //         </div>
    //         <div className="TitleContainer">
    //           <span key={product.id}>{product.title}</span>
    //         </div>
    //         <div className="PriceContainer">
    //           <span key={product.id}>{product.price}$</span>
    //         </div>
    //       </div>
    //     ))}
          
    //     </div>
    //   </div>
    // </div>
    <section className='AllProductsSection'>
        {isSmallWidth &&isFilterListOpen && (
          <div className={`Shadow ${isFilterListOpen ? 'active' : ''}`} onClick={handleShadowDivClick}>
            <div className="card SettingsCard CardFilters" onClick={handleInnerDivClick}>
              <Filters />
            </div>
          </div>
        
          )}
      <div className="Container">
            <div className="HeaderRow row">
              <div className="col-lg-7">
                <div className="">
                  <CategoriesBar/>
                </div>
              </div>
              <div className="col-lg-3">
                

                </div>
            </div>

            
      </div>

      <div className="AllProductsContainer">

        <div className="ProductsRow row">
          <div className="col-lg-8">
            <div className='row HeaderItems'>
            <div className="col-lg-7 SelectedFilters">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                  <span>
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                  <span>جرام 500</span>

                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                  <span>من 10 : 50 درهم</span>

                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 FirstFilter">
                  <span>عسل جبلي</span>

                  </div>
                </div>
                
                </div>
              <div className="col-lg-4 OrderdByContainer">
              {isSmallWidth && (
                  
                <button onClick={handleFilterButtonClick} className='btn d-flex Center FiltersBtn'><img src={FilterImg} width="15px"  alt="" />FILTER</button>
              )}

                <select id='OrderdBy' className='form-select'>
                    
                    <option dir='rtl' selected>{t("PriceFromHighToLow")}</option>
                    <option dir='rtl' value="1">{t('PriceFromLowToHigh')}</option>
                    <option dir='rtl' value="2">{t('MostSale')}</option>
                </select>
                <label htmlFor="OrderdBy">{t('OrderdBy')}</label>
              </div>
              
              
            </div>
                {!props.IsDeals && (
                        
              <div className="row">
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
                <ProductCard IsInHome={false}/>
              </div>
                    
                  )}

                {props.IsDeals && (
                        
                        <div className="row">
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
              <ProductNewCard IsInHome={false}/>
            </div>
                    
                )}
                
            
          </div>
          
          <div className="col-lg-3 col-md-5 col-sm-5 RightFilterCol">
            {!isSmallWidth && (
            <div className="card SettingsCard CardFilters">
              
                <Filters/>
            </div>
              )}
            

            <div className="card SettingsCard ADInAllProducts">
                <img src={Ad} alt="" width="100%" />
              </div>
          </div>

          

        </div>
      </div>
    </section>
    
  );
};

export default Products;
