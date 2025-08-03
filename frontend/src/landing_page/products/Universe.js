import React from 'react';

function Universe() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>

      {/* Row 1 */}
      <div className="row text-center">
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" className="img-fluid w-50" alt="smallcase" />
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" className="img-fluid w-50" alt="streak" />
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" className="img-fluid w-50" alt="sensibull" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="row text-center">
        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" className="img-fluid w-50" alt="fundhouse" />
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" className="img-fluid w-50" alt="godenpi" />
        </div>
        <div className="col-4 p-3 mt-5 mb-5">
          <img src="media/dittoLogo.png" className="img-fluid w-50" alt="ditto" />
        </div>
        <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button>
      </div>
    </div>
  );
}

export default Universe;
