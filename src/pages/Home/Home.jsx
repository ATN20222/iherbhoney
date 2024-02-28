import './Home.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import FirstImg from '../../Assets/Images/ADS.png';
import HealthImg from '../../Assets/Images/Health.png'
import HerbsImg from '../../Assets/Images/Herbs.png'
import OilsImg from '../../Assets/Images/Oils.png'
import HoneyImg from '../../Assets/Images/Honey.png'
import Slider1 from '../../components/Slider/Slider1';
import Slider2 from '../../components/Slider/Slider2';
import SubscribingImage from '../../Assets/Images/SubscribingImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  const { t, i18n } = useTranslation();
  const [CurrentCategoryFont, setCurrentCategoryFont] = useState('LightFontEn');

  useEffect(() => {
      if (i18n.language === 'ar') {
          setCurrentCategoryFont('BoldFontAr');
      } else {
          setCurrentCategoryFont('BoldFontEn');
      }
  }, [i18n.language]);

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  return (
    <div className='Home'>
      <section className='FirstHomeSection'>
        <img src={FirstImg} alt="" width="100%" />
      </section>
      
      <section className='CategoriesSection'>
        <div className="container">
          <div className="row container">
            <div className="col-lg-3 CategoryItem pd-0"> 
              <button className='btn btn-warning CategoryBtn'>
                <div className="row">
                  <div className="col-lg-6 Center">
                    <img src={HealthImg} width="60%" alt="" />
                  </div>
                  <div className="col-lg-6 Center">
                    <span className={`CategoryText CategoryTextHealth Center ${CurrentCategoryFont}`}>
                      {t('HealthBeauty')}
                    </span>

                  </div>
                </div>
              </button>
            </div>
            <div className="col-lg-3 CategoryItem pd-0"> 
              <button className='btn btn-warning CategoryBtn'>
                  <div className="row">
                    <div className="col-lg-6 Center">
                      <img src={HoneyImg} width="60%" alt="" />
                    </div>
                    <div className="col-lg-6 Center">
                      <span className={`CategoryText Center ${CurrentCategoryFont}`}>
                        {t('Honey')}
                      </span>

                    </div>
                  </div>
              </button>
            </div>
            <div className="col-lg-3 CategoryItem pd-0"> 
              <button className='btn btn-warning CategoryBtn Center'>
                  <div className="row">
                    <div className="col-lg-6 Center">
                      <img src={OilsImg} width="40%" alt="" />
                    </div>
                    <div className="col-lg-6 Center">
                      <span className={`CategoryText Center ${CurrentCategoryFont}`}>
                        {t('Oils')}
                      </span>

                    </div>
                  </div>
              </button>
            </div>
            <div className="col-lg-3 pd-0"> 
              <button className='btn btn-warning CategoryBtn'>
                    <div className="row">
                      <div className="col-lg-6 Center">
                        <img src={HerbsImg} width="50%" alt="" />
                      </div>
                      <div className="col-lg-6 Center">
                        <span className={`CategoryText Center ${CurrentCategoryFont}`}>
                          {t('Herbs')}
                        </span>

                      </div>
                    </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='FirstSliderSection'>
        <div className="container">
          <div className="SliderHeader">
            <button className='btn btn-warning ShowMoreProductsBtn'>{t('More')}</button>
            <h3 className='ProductsSliderHeader'>{t('products')}</h3>
          </div>
          
        </div>
        <Slider1/>
      </section>
    


      <section className='SecondSliderSection'>
        <div className="container">
          <div className="SliderHeader">
            <button className='btn btn-warning ShowMoreProductsBtn'>{t('More')}</button>
            <h3 className='ProductsSliderHeader'>{t('ForYou')}</h3>
          </div>
          
        </div>
        <Slider2/>
        
      </section>
      <hr className='container' />
      <section className='SecondSliderSection'>
        <div className="container">
          <div className="SliderHeader">
            <button className='btn btn-warning ShowMoreProductsBtn'>{t('More')}</button>
            <h3 className='ProductsSliderHeader'>{t('NewProducts')}</h3>
          </div>
          
        </div>
        <Slider2/>
        
      </section>
      <hr className='container' />
      <section className='SubscribeSection'>
        <div className="container">
          <div className="row Center">
            <div className="col-lg-4">
              <img src={SubscribingImage} width="80%" alt="" />
            </div>
            <div className="col-lg-4">
              <div className="SubscribingText">
                <h1>{t('NewsLetter')}</h1>
                <h5>{t('SubscribeUs')}</h5>
              </div>
              <div className="SubscribingInput">
                <input className='form-control' type="text" placeholder={t('YourEmail')} />
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </section>

      

        <Footer/>
      

    </div>

  );
};

export default Home;
