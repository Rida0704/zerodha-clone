import React from 'react';

function Pricing() {
  return (
    <div className='container p-5'>
      <div className='row'>
        {/* Left Section */}
        <div className='col-md-4'>
          <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href='' style={{ textDecoration: 'none' }}>
            See Pricing <i className='fa-solid fa-arrow-right'></i>
          </a>
        </div>

        {/* Right Section */}
        <div className='col-md-6 offset-md-2'>
          <div className='row'>
            <div className='col p-2 border'>
              <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
              <p>Free account opening</p>
            </div>
            <div className='col p-2 border'>
              <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
