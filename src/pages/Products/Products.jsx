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


const Products = (props) => {
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
          
          <div className="col-lg-3">
            <div className="card SettingsCard">
              <div className="AllSettingsContainer">
                <div className="row">
                  <div className="col-lg-12">
                  <div>
                    <Collapse title={t('Category')}>
                    <div class="CollapsedItems" dir='ltr'>
                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            منتجات عسل
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>
                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            شمع عسل
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>
                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            وصفات طبية
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>
                        
                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            صحة
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>
                      </div>
                    </Collapse>


                    <Collapse title={t('Price')}>
                    <div class="CollapsedItems" dir='ltr'>
                        
                        
                        
                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            من 10 الي 50 درهم
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>

                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            من 100 الي 250 درهم
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>
                      </div>
                    </Collapse>


                    

                    <Collapse title={t('Rate')}>
                    <div class="CollapsedItems" dir='ltr'>
                        
                        
                        
                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            <img src={Star} alt="" />
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>

                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>


                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>

                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>
                        <div className="ItemCheckBox">
                          <label class="form-check-label" for="flexCheckDefault">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          </label>
                        
                        </div>
                    </div>
                    </Collapse>

                  </div>
                    <button className='btn btn-warning ApplyBtn'>( 450 {t("Result")} ) {t('Apply')}</button>
                  </div>
                </div>
              </div>
            </div>

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
