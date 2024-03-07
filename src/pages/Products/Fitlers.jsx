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


const Filters = (props) => {
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

  return(
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
  );
}
export default Filters;