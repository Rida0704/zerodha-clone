import React from 'react';
function Hero() {
    return (  
        <section className='container-fluid' id="supportHero">
            <div className='p-5 ' id="supportWrapper">
                <h4> Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            
            <div className='row p-5 '>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Search for an answer</h1>
                    <input placeholder='Eg. how do I activate F&O' className="form-control"/>
                </div>
                
                <div className='col-6 p-5 '>
                    <h1>Featured</h1>
                    {/* Add featured content here */}
                </div>
            </div>
        </section>
    );
}

export default Hero;
