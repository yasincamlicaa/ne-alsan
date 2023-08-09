import React from 'react';
import './WalletInfo.css';

const WalletInfo = () => {
  return (
    <div className='wallet-info'>
        <div className='wallet-info-line'>
            <h5>Toplam bakiyeniz:</h5>
            <p>500.00 TL</p>
        </div>
        <div className='wallet-info-line'>
            <h5>Toplam sepet tutarınız:</h5>
            <p>320.00 TL</p>
        </div>
        <div className='wallet-info-line'>
            <h5>Kalan bakiyeniz:</h5>
            <p>180.00 TL</p>
        </div>
    </div>
  )
}

export default WalletInfo