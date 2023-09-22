// create product

import { useEffect, useState } from "react";
import priceBox from '../../assets/images/price-box.svg'

export const  CreateProductForm=()=> {

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [formValid, setFormValid] = useState(false); 


  useEffect(() => {
  
    if (productName.trim() !== ''  && productPrice.trim() !== '' && productDescription.trim() !== ''  ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [productName, productPrice, productDescription]);

    return (
      <form className="login-card">
         <div className="mb-5" style={{ position: 'relative' }}>
              <label className="form-label">
               Product Name
              </label>
              <div className="input-group">
                <input
                  type='text'
                  className="form-control py-2"
                  name='productName'
                 placeholder="Textbox" value={productName}
                 onChange={(event) => setProductName(event.target.value)} required
                />
               
              </div>
            
            </div>

            <div className="mb-5" style={{ position: 'relative' }}>
              <label className="form-label">
               Price
              </label>
              <div className="input-group position-relative" style={{width:'60%'}}>
                
                <input
                  type='text'
                  className="form-control py-2 "
                  name='productPrice'
                  placeholder="Textbox"
                  value={productPrice}
                 onChange={(event) => setProductPrice(event.target.value)} required
                />
                <img src={priceBox} alt='box' className='' style={{position:'absolute',top:'30%',right:'3%'}}/>
               
              </div>
            
            </div>

            <div className="mb-5" style={{ position: 'relative' }}>
              <label className="form-label">
               Description
              </label>
              <div className="input-group">
                <input
                  type='text'
                  className="form-control py-2"
                  name='description'
                  placeholder="Textbox"
                  value={productDescription}
                 onChange={(event) => setProductDescription(event.target.value)} required
                />
               
              </div>
            
            </div>
        <div className="text-center">

        <button type="submit" className={` btn px-5 ${formValid ? 'btn-primary btn-newPrimary' : 'btn-secondary'}`}
       >CREATE</button>
        </div>
      </form>
    );
}