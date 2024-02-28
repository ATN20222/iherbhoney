import React, { useEffect, useState } from 'react';
import './ProductNewCard.css';
import ProductImg from '../../Assets/Images/ProductImage.png';
import Star from '../../Assets/Images/star.png';

const ProductNewCard = ()=>{
    return(
           
            
<div className="card col-lg-2 ProductNewCard">
<div className="col-lg-12 Center ImageNewCardContainer">
    <img src={ProductImg} width="80%" alt="" srcset="" />
</div>
<div className="col-lg-12">
<div className="row">
    
    <div className="col-lg-12">
        <h6 className='ProductName'>عسل جبلي</h6>
        <span className='ProductNewCardDescription'>عسل النحل معروف عند معظم طبيعيا و مقويا لجسم الانسان </span>
        <div className="RateNewCard Center">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <span>(10)</span>
        </div>
        <div className="priceNewCard">
            <span className='ProductRegularPrice' dir='rtl'>
                <span className='Price'> 22 </span>
                <span className='CurrancyName'>درهم اماراتي</span>
                
            </span>
        </div>
    </div>
        
    
</div>
</div>



</div>
        
    );
}
export default ProductNewCard;