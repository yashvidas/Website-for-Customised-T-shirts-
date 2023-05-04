import { useRouter } from 'next/router';
import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/product.slice';


const ProductDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(router.query.id));
  }, []);
  const product = useSelector((state) => state.product.product);
  console.log(product);
  if (!product.image) {
    return <h1>Error</h1>
  }
  return (
    <>
      <div style={{
        display: "flex",
      }}>
        <div style={{
        width:600,
        padding:50,
      }}>
          <Image src={product.image} height={600} width={520} />
        </div>
        <div  style={{
        width:800,
        padding:50,
      }}>
          <h1>{product.product}</h1>
          <hr style={{ border: "1px solid #ccc" }} />
          <br/>
          <h3 style={{     fontWeight:'normal'}}>Price - ₹ {product.price}</h3>
          <br/>
       
          <h4 style={{
            fontWeight:'normal',
          
          }}>
            <ui>
              <li>Care Instructions: Hand Wash Only</li>
              <li>Fit Type: Regular Fit</li>
              <li>Neck pattern: round neck.</li>
              <li>Material Composition : 80% Cotton, 20% Polyester.b</li>
              <li>Material and quality: 100% Premium bio-washed soft and smooth skin friendly cotton fleece material and well stitched with 100% cotton threads for long lasting use.</li>
              <li>Happy Shopping: As we use cotton Fleece material, please follow wash-care instructions for long lasting use. </li>
     
            </ui>
          </h4>
          <br/>
          <h3 style={{    fontWeight:'normal'}}>Size -</h3>   <br/>
          <div className="text-color col-6">
            {/* <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Black"
                
                />
                      XS 
              </label>
            </div> */}
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="white"
                
                />
              S
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Blue"
                
                />
                M
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Blue"
                
                />
                L
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Blue"
                
                />
                XL
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Blue"
                
                />
                XXL
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Red"
                
                />
                XXXL
              </label>
            </div>
          </div>
<br/>
          <button  style={{
            
            width: 150,
            margin: 2,
            padding: 2 ,
            background: "black",
            border: 2,
            color: "white",
            fontSize: 20,
          }}
        onClick={() =>{ 
          if(auth.length > 0){

          dispatch(addToCart(product))
          } else {
            router.push('/login')
          }
        
        }}
       
      >
        Add to Cart
      </button>
        </div>
      </div>
    </>
  )
}


export default ProductDetail