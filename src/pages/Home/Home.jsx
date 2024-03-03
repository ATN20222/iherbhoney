import './Home.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FirstImg from '../../Assets/Images/ADS.png';
import Slider1 from '../../components/Slider/Slider1';
import Slider2 from '../../components/Slider/Slider2';
import SubscribingImage from '../../Assets/Images/SubscribingImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer';
import CategoriesBar from '../../components/Categories/CategoriesBar';
const Home = () => {
  const { t, i18n } = useTranslation();
  const [CurrentCategoryFont, setCurrentCategoryFont] = useState('BoldFontEn');
  const [CurrentDirection, setCurrentDirection] = useState('rtl');
  
  useEffect(() => {
      if (i18n.language === 'ar') {
          setCurrentCategoryFont('BoldFontAr');
          setCurrentDirection('ltr');
      } else {
          setCurrentCategoryFont('BoldFontEn');
          setCurrentDirection('rtl');

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
          <CategoriesBar/>
        </div>
      </section>

      <section className='FirstSliderSection'>
        <div className="container">
          <div className="SliderHeader" dir={CurrentDirection}>
            <button className={'btn btn-warning ShowMoreProductsBtn '+ CurrentCategoryFont}>{t('More')}</button>
            <h3 className={'ProductsSliderHeader ' + CurrentCategoryFont}>{t('products')}</h3>
          </div>
          
        </div>
        <Slider1/>
      </section>
    


      <section className='SecondSliderSection'>
        <div className="container">
          <div className="SliderHeader" dir={CurrentDirection}>
            <button className={'btn btn-warning ShowMoreProductsBtn '+ CurrentCategoryFont}>{t('More')}</button>
            <h3 className={'ProductsSliderHeader ' + CurrentCategoryFont}>{t('ForYou')}</h3>
          </div>
          
        </div>
        <Slider2/>
        
      </section>
      <hr className='container' />
      <section className='SecondSliderSection'>
        <div className="container">
          <div className="SliderHeader" dir={CurrentDirection}>
            <button className={'btn btn-warning ShowMoreProductsBtn '+ CurrentCategoryFont}>{t('More')}</button>
            <h3 className={'ProductsSliderHeader ' + CurrentCategoryFont}>{t('NewProducts')}</h3>
          </div>
          
        </div>
        <Slider2/>
        
      </section>
      <hr className='container'/>
      <section className='SubscribeSection'>
        <div className="container">
          <div className="row Center">
            <div className="col-lg-4">
              <img className='MailingImg' src={SubscribingImage} width="80%" alt="" />
            </div>
            <div className="col-lg-4">
              <div className={"SubscribingText " +CurrentCategoryFont}>
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

      

        
      

    </div>

  );
};

export default Home;
