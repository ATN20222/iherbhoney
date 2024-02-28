import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './Footer.css';
import Logo  from  '../../Assets/Images/I_H_H_LOGO.png';
import AppStoreImg from '../../Assets/Images/download-on-the-app-store.svg'
import GooglePlayImg from '../../Assets/Images/Google_Play_Store_badge_EN.svg.png'

const Footer = ()=>{
    const { t, i18n } = useTranslation();
    const [CurrentFooterFont, setCurrentFooterFont] = useState('LightFontEn');
  
    useEffect(() => {
        if (i18n.language === 'ar') {
            setCurrentFooterFont('LightFontAr');
        } else {
            setCurrentFooterFont('FooterFontEn');
        }
    }, [i18n.language]);
  
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return(
        <section className="FooterSection">
        <div className="FooterShadow"></div>
        <footer>
          <div className="container">
            <div className="row FooterRow">
              <div className="col-lg-3 FooterLogo">
                <div className="row">
                  <div className="col-lg-12">
                    <img src={Logo} alt="" width="80px"/> 

                    <span className='LogoFooterWords BoldFontEn Center'>
                        I HONEYHERB
                    </span>
                    
                  </div>
                  
                  <div className="col-lg-12 btnCotainer FooterDownload Center">
                    
                      <img className="bn46" src={AppStoreImg} width="100%" alt="bn45" />
                    
                    
                  </div>
                  <div className="col-lg-12 btnCotainer FooterDownload Center">
                  
                      <img className="bn45" src={GooglePlayImg} alt="bn45" width="100%" />
                    
                  </div>
                </div>
                <div></div>
              </div>
  
              <div className="col-lg-3 col-md-4 col-sm-4 Center LinksCol">
                <div className="row Center">
                  <div className="col-lg-12">
                    <ul className="list-unstyled">
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`} href="#Features">{t('TheHoney')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="HowItWorks.html">{t('Oils')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('Herbs')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('HealthBeauty')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('Recipes')}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-sm-4 Center LinksCol">
                <div className="row Center">
                  <div className="col-lg-12">
                    <ul className="list-unstyled">
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="#Features">{t('products')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="HowItWorks.html">{t('NewProducts')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('ForYou')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('HowWeAre')}</a>
                      </li>

                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('Vision')}</a>
                      </li>

                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('About')}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
  
              <div className="col-lg-3 col-md-4 col-sm-4 Center FooterContact">
                <div className="row Center">
                  <div className="col-lg-12">
                  <ul className="list-unstyled">
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="#Features">{t('PaymentMethods')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="HowItWorks.html">{t('Points')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('ContactUs')}</a>
                      </li>
                      <li className="list-item FooterListItem">
                        <a className={`FooterLink ${CurrentFooterFont}`}  href="">{t('TheQuestions')}</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="Center CopyRightsContainer">
          <h6 className="Center copyRights FooterFontEn">© 2024 MIND for Information Technology & Media. All Rights Reserved.</h6>
        </div>
      </section>
    );
}
export default Footer;