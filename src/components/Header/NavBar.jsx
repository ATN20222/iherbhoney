// src/components/Navbar.js
import './Header.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo  from  '../../Assets/Images/I_H_H_LOGO.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUserIcon , faCartArrowDown, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';



import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [NavFont, setNavFont] = useState('LightFontEn');

    useEffect(() => {
        if (i18n.language === 'ar') {
            setNavFont('LightFontAr');
        } else {
            setNavFont('LightFontEn');
        }
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    
    return (
        <header>
            
            <div className="container">
                <div className="container row">
                    <div className="col-lg-12 d-flex justify-content-end">
                        <button className='btn LangBtn' onClick={() => changeLanguage('ar')}><span>AR</span></button>
                        <button className='btn LangBtn' onClick={() => changeLanguage('en')}><span>EN</span></button>
                    </div>
                </div>
            </div>



        <nav className="navbar">
            <div className="Container">
                <div className="row">
                    <div className="col-lg-3">
                    <Link className="navbar-brand Center " to="/"> 
                        <img src={Logo} alt="" width="50px"/> 

                        <span className='LogoWords Center'>
                        <span className='Word-1'>I</span> <span className='Word-2'>HONEY</span><span className='Word-3'>HERB</span>

                        </span>
                    </Link>
                    </div>
                    <div className="col-lg-9 RightNav">
                        <ul class="list-unstyled row">
                            <li className="nav-item col-lg-2">
                                <Link className={`nav-link ${NavFont}`} to="Deals"> {t('Deals')}</Link>
                            </li>
                            <li className="nav-item col-lg-2"> 
                                <Link className={`nav-link ${NavFont}`} to="products"> {t('products')}</Link>
                            </li>   
                            <li className="nav-item col-lg-2">  
                                <Link className={`nav-link ${NavFont}`} to="favourites"> {t('favourites')}</Link>
                            </li>
                            
                            <li className="nav-item col-lg-3 SearchContainer"> 
                                <input className='form-control' type="text" name="" id="" placeholder={t('SearchProducts')} />
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </li> 
                            <li className="nav-item col-lg-2"> 
                            {/* Compliments of the <FontAwesome icon="fa-sharp fa-solid fa-hat-chef" />! */}
                                <Link className={`nav-link ${NavFont}`} to="favourites">
                                    <span className='LoginText'>{t('Login')} </span>
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>


                            </li> 
                            <li className="nav-item col-lg-2"> 
                                <Link className={`nav-link ${NavFont}`} to="favourites"> 
                                    {t('Cart')} <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                </Link>
                            </li>   
                        </ul>
                </div>

                </div>
          
            
            </div>
        </nav>
        </header>
        );
    };

export default Navbar;
