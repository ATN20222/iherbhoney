import React, { useState } from 'react';

import CategoriesBar from "../../components/Categories/CategoriesBar";
import { useParams } from "react-router-dom";
import SpecialOfferImg from '../../Assets/Images/special offer.png'
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductDetailsImage from '../../Assets/Images/ProductDetailsImage.png';
import StarImg from '../../Assets/Images/star.png'
const Details = ()=>{
    const [IsSeeMoreOpen, setIsSeeMoreOpen] = useState(false);

    const handleSeeButtonClick = () => {
        setIsSeeMoreOpen(!IsSeeMoreOpen);
        
    };
    const handleShadowDivClick = () => {
        if (IsSeeMoreOpen) {
            setIsSeeMoreOpen(false);
        }
      };
      const handleInnerDivClick = (e) => {
        e.stopPropagation();
      };
    
    const { productId } = useParams();
        const [quantity, setQuantity] = useState(1);

        const handleMinus = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        };
    
        const handlePlus = () => {
            setQuantity(quantity + 1);
        };

        const [isFav, setIsFav] = useState(false);
        const handleFavClick = () => {
            setIsFav(!isFav);
        };
        const buttonClass = `btn FavBtn ${isFav ? 'AddedToFav' : ''}`;
    return(
        <section className="AllProductsSection">
            {IsSeeMoreOpen && (
                    <div className={`Shadow ${IsSeeMoreOpen ? 'active' : ''}`} onClick={handleShadowDivClick}>
                        <div className="card SettingsCard CardFilters GalleryCard" onClick={handleInnerDivClick}>
                            <div className="container">
                                <div className="row Center GalleryRow">
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                    <div className="card GalleryItem col-lg-3 col-sm-3">
                                        <img src={ProductDetailsImage} width="100%" alt="" />
                                    </div>
                                </div>
                            </div>
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
                    <div className="col-lg-3 col-md-7 col-sm-7 ProductImagesContainer">
                        <button className={buttonClass+" FavBtnInDetails"} onClick={handleFavClick}>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>   
                        {/* <div className="card"></div> */}
                        <div className="container">
                            <div className="row Center">
                                <div className="col-lg-12 col-md-12 MainImageContainer">
                                    <img src={ProductDetailsImage} width="100%" alt="" />
                                </div>

                                <div className="col-lg-3 col-md-2 col-sm-2 card SubImageCard">
                            <img src={ProductDetailsImage} width="100%" alt="" />
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 card SubImageCard">
                            <img src={ProductDetailsImage} width="100%" alt="" />
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 card SubImageCard" onClick={handleSeeButtonClick}>
                            <div className='SubImageSeeMore Center'>
                                see more
                            </div>
                            <img src={ProductDetailsImage} width="100%" alt="" />
                        </div>
                        
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="col-lg-6 col-md-12 CenterDetailsCol" dir='rtl'>
                        <div className="DetailsHeader">
                            <h2 className='d-block'>خل الأعشاب</h2>
                            <p>عسل جبلي يمني عسل جبلي يمني عسل جبلي يمني عسل جبلي يمني</p>
                        </div>
                        <div className="RateInDetails">
                            <span>(10)</span>
                            <img src={StarImg} width="20px" alt="" />
                            <img src={StarImg} width="20px" alt="" />
                            <img src={StarImg} width="20px" alt="" />
                            <img src={StarImg} width="20px" alt="" />
                            <img src={StarImg} width="20px" alt="" />
                            
                        </div>
                        <hr className='DetailsHr' />
                        <div className="ProductDetailsInDetails">
                            <h6 className='DetailsHeader'>تفاصيل المنتج</h6>
                            <span>عسل النحل معروف عند معظم الناس كمادة غذائية مهمة لجسم الإنسان و صحته كما اقر العلم الحديث المتوارث الحضاري حول كون العسل مضادا حيويا طبيعيا و مقويا لجسم الانسان عسل النحل معروف عند معظم الناس كمادة غذائية مهمة لجسم الإنسان و صحته كما اقر العلم الحديث المتوارث الحضاري حول كون العسل مضادا حيويا طبيعيا و مقويا لجسم الانسان …. المزيد</span>
                        </div>
                        <hr className='DetailsHr' />

                        <div className="VariationsContainer">
                            <div className="VariationOne">
                                <div className="row">
                                <h6 className='VariationName Center col-2' dir='ltr'> : الوزن</h6>
                                    <button className='btn btn-outline-dark VarItemBtn col-2'>100 جرام</button>
                                    <button className='btn btn-outline-dark VarItemBtn col-2'>100 جرام</button>
                                    <button className='btn btn-outline-dark VarItemBtn col-2'>100 جرام</button>
                                    <button className='btn btn-outline-dark VarItemBtn col-2'>100 جرام</button>
                                </div>

                            </div>

                            <div className="VariationTwo">
                                <div className="row">
                                <h6 className='VariationName Center col-2' dir='ltr'> : الكمية</h6>
                                    <button className='btn btn-outline-dark VarItemBtn col-2'>100 جرام</button>
                                    <button className='btn btn-outline-dark VarItemBtn col-2'>100 جرام</button>
                                    <button className='btn btn-outline-dark VarItemBtn col-2'>100 جرام</button>
                                    <button className='btn btn-outline-dark VarItemBtn col-2'>100 جرام</button>
                                </div>

                            </div>
                        </div>

                    </div>
                    
                    <div className="col-lg-2 col-md-5 col-sm-5 MostRightFilterCol">
                            <div className="PricesContainer">
                                <h4> <span className="PriceInDetails">22</span> درهم اماراتي</h4>
                                <s ><h5 className="PriceBeforeInDetails"> <span >45</span> درهم اماراتي</h5></s>

                                <div className="Container">
                                    <img src={SpecialOfferImg} width="50%" alt="" />
                                </div>
                                <div className="CartFavQuantContainer" dir='rtl'>
                                    <div className="Quantity">
                                        <h5 className='d-inline'>العدد : </h5>
                                        <div className="PlusMinusBtn d-inline">
                                            <button className='btn btn-warning' onClick={handlePlus}> <FontAwesomeIcon icon={faPlus}/> </button>
                                                <h5 className='d-inline'>{quantity}</h5>
                                            <button className='btn btn-warning' onClick={handleMinus}> <FontAwesomeIcon icon={faMinus}/> </button>
                                        
                                        </div>
                                        
                                    </div>

                                    <div className="RightSideBtns">
                                        <button className='btn btn-warning CardDetailsBtn'>
                                            <span>اضافة الي العربة</span>
                                            <FontAwesomeIcon icon={faCartShopping}/>
                                        </button>

                                        <button className='btn btn-outline-dark FavDetailsBtn'>
                                            <span> اضافة الي قائمة</span>
                                            <FontAwesomeIcon icon={faHeart}/>
                                        </button>
                                    </div>
                            </div>
                            </div>
                            


                            
                        
                        

                        
                    </div>
                

                </div>
            </div>
            
        </section>


    );

}
export default Details;