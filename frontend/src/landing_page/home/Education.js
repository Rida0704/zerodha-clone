import React from 'react';
function Education () {
    return (
      <div className='container mt-5 p-5'>
      <div className='row'>
      
        <div className='col-6'>
          <img src='/media/education.svg' style={{width:"80%"}}/>
          
        </div>

        <div className='col-md-4'>
          <h1 className='mb-3 fs-2'>Free and open market education</h1>
          <p>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          <br/>
          <a href='' style={{ textDecoration: 'none' }}>
            Varsity <i className='fa-solid fa-arrow-right'></i>
          </a>
          </p>
          <p className='mt-5 mb-5'>
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
          <br/>
          
          <a href='' style={{ textDecoration: 'none' }}>
            Trading Q&A<i className='fa-solid fa-arrow-right'></i>
          </a>
          </p>

        </div>
      </div>
    </div>
  );
       
         
      
}

export default Education ;