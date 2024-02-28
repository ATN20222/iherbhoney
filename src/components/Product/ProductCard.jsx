import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import ProductImg from '../../Assets/Images/ProductImage.png'
import Star from '../../Assets/Images/star.png'

const ProductCard = () => {
    return(
        
            <div className="row card col-lg-2 CardProduct">
                <div className="col-lg-12 Center ImageCardContainer">
                    <img src={ProductImg} width="80%" alt="" srcset="" />
                </div>
                <div className="col-lg-12">
                <div className="row">
                    
                    <div className="col-lg-6 col-md-6 col-sm-6 ProductCol">
                        <span className='ProductRegularPrice' dir='rtl'>
                            <span className='Price'> 22 </span>
                            <span className='CurrancyName'>درهم اماراتي</span>
                            
                        </span>
                            <p className='ProductDiscountPrice' dir='rtl'>
                                <span className='DiscountPrice'> 45 </span>
                                <span className='CurrancyName'>درهم اماراتي</span>
                                
                            </p>
                            <div className='DiscountContainer'>
                            <span>خصم خاص %40</span>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 ProductCol">
                        <p className='ProductName'> عسل جبلي </p>
                        <p className='ProductDescription'>
                        عسل النحل معروف عند معظم طبيعيا و مقويا لجسم الانسان 
                        </p>
                    </div>
                    <div className='Rate'>
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    (10)
                    </div>
                        
                    
                    
                </div>
            </div>
            
            
            
        </div>
    );

}

export default ProductCard;