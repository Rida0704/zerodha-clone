import React from 'react';
function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className="container">
            <div className="row">
               
                
                <div className='col-6 mt-3 p-3'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    
                    <div>
                    <a href={learnMore} >Learn More</a>
                    </div>
                  
                </div>
                <div className='col-6'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
     

     );
}

export default RightSection;