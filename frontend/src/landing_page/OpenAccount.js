import React from 'react';
function OpenAccount() {
    return (  
        <div className='container p-5 mb-5'>
        <div className='row text-center'>
         
          <h1 className='mt-5'>Ready to Start Trading?</h1>
          <p>Access your trading dashboard with modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
          <button 
            className='p-2 btn btn-primary fs-5' 
            style={{width:"20%",margin:"0 auto"}}
            onClick={() => window.location.href = process.env.REACT_APP_DASHBOARD_URL || "https://zerodha-clone-dashboard-ce0c.onrender.com"}
          >
            Go to Dashboard
          </button>
         
        </div>

      </div>
    );
}

export default OpenAccount;