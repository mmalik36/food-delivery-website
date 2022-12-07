import React from "react";
import "./products.css"
import Miso from "../assets/Miso_Soup_001.jpg"

const ProductItem = props => {
    const { product } = props;
    return (
        <div className=" column is-half">
            <div className="box">
                <div className="media">
                    <div className="media-left">
                        <figure className="figure1">
                            <img
                                src={Miso}
                                alt={product.shortDesc}
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <b style={{ textTransform: "capitalize" }}>
                            {product.name}{" "}
                            <span className="tag is-primary">${product.price}</span>
                        </b>
                        <div>{product.shortDesc}</div>
                        {product.stock > 0 ? (
                            <small>{product.stock + " Available"}</small>
                        ) : (
                            <small className="has-text-danger">Out Of Stock</small>
                        )}
                        <div className="is-clearfix">
                            <button
                                className="button is-small is-outlined is-primary   is-pulled-right"
                                onClick={() =>
                                    props.addToCart({
                                        id: product.name,
                                        product,
                                        amount: 1
                                    })
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;