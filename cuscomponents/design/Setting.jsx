import React from "react";
import { exportComponentAsJPEG,   } from 'react-component-export-image';
import { useDispatch } from "react-redux";
const  Setting =(({
  upperText,
  lowerText,
  textColor,
  textSize,
  uploadImage
  
}, ) =>{
  return (
    <div >
      <h2 >Style</h2>
  
      <hr style={{ border: "1px solid #ccc" }} />
      <h5>Upload Image</h5>
      <br></br>
      <div className="row">
          <div className="col-8">
            <input type="file" onChange={uploadImage} />
            {/* <button
              type="btn"
              className="btn btn-info rounded my-2"
            >
              Upload
            </button> */}
          </div>
        
      </div>
      
      <hr style={{ border: "1px solid #ccc" }} />
      <div className="writeText">
        <h5>Write Text</h5>
        <br></br>
        <p>Upper Text</p>
        <input
          type="text"
          className="uppertext form-control border-0 shadow-sm bg-white rounded mb-2"
          onChange={upperText}
        />
        <p>Lower Text</p>
        <input
          type="text"
          className="lowertext form-control border-0 shadow-sm bg-white rounded mb-2"
          onChange={lowerText}
        />
      </div>
      <hr style={{ border: "1px solid #ccc" }} />
      <div className="textDecoration">
        <div className="row">
          <div className="text-size col-6">
            <h5>Text Size</h5>
            <br></br>
            <input type="range" onChange={textSize} min="5" max="20" />
          </div>
          <hr style={{ border: "1px solid #ccc" }} />
          <div className="text-color col-6">

            <h5>Text-color</h5>
            <br></br>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Black"
                  onChange={textColor}
                />
                Black
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="white"
                  onChange={textColor}
                />
                White
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
                  onChange={textColor}
                />
                Blue
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
                  onChange={textColor}
                />
                Red
              </label>
            </div>
          </div>










          <hr style={{ border: "1px solid #ccc" }} />
          <div className="text-color col-6">
            <h5>T-shirt-color</h5>
            <br></br>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Black"
                
                />
                Black 
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="white"
                
                />
                White
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
                Blue
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
                Grey
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
                Green
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
                Yellow
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
                Red
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-primary my-3 rounded" 
      onClick={() => {
        
      //  const image  = exportComponentAsJPEG(ref)
      //  console.log(image);
      }}
      
      >Save</button> */}
    </div>
  );
})

export default Setting;
