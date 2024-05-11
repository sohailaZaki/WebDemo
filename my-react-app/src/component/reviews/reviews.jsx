import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductReview = () => {
    const [number, setNumber] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);
  
    const handleText = () => {
      switch (number || hoverStar) {
        case 0:
          return "Evaluate";
        case 1:
          return "Dissatisfaction";
        case 2:
          return "Unsatisfied";
        case 3:
          return "Normal";
        case 4:
          return "Satisfied";
        case 5:
          return "Very Satisfied";
        default:
          return "Evaluate";
      }
    };
  
    const handlePlaceHolder = () => {
      switch (number || hoverStar) {
        case 0:
          return "Comment here...";
        case 1:
        case 2:
        case 3:
        case 4:
          return "What is your problem?";
        case 5:
          return "Why do you like the product?";
        default:
          return "Comment here...";
      }
    };
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">{handleText()}</h1>
                    <div className="text-center">
                        {Array(5)
                            .fill()
                            .map((_, index) =>
                                number >= index + 1 || hoverStar >= index + 1 ? (
                                    <AiFillStar
                                        key={index}
                                        onMouseOver={() => !number && setHoverStar(index + 1)}
                                        onMouseLeave={() => setHoverStar(undefined)}
                                        style={{ color: "orange", cursor: "pointer" }}
                                        onClick={() => setNumber(index + 1)}
                                    />
                                ) : (
                                    <AiOutlineStar
                                        key={index}
                                        onMouseOver={() => !number && setHoverStar(index + 1)}
                                        onMouseLeave={() => setHoverStar(undefined)}
                                        style={{ color: "orange", cursor: "pointer" }}
                                        onClick={() => setNumber(index + 1)}
                                    />
                                )
                            )}
                    </div>
                    <textarea className="form-control mt-3" placeholder={handlePlaceHolder()}></textarea>
                    <button className={`btn btn-primary mt-3 ${!number && "disabled"}`}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;
