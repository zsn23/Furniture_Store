import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './products';
import { addToCart } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const ProductDetail = () => {
const dispatch = useDispatch();
const navigate = useNavigate();


  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState('mainImage');

  if (!product) {
    return <div>Product not found</div>;
  }

  const showImageLarge = () => {
    setSelectedImage('mainImage');
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
    navigate("/MyCart");
    console.log(`${product.name} added to cart`);
  };

  return (
    <div className="container mt-2 border-bottom Main_cardBodyContainer">
      <div className="row Main_cardBody m-0 p-0">
        {/* Product Images */}
        <div className="col-7 Product_images">
          <div className="d-flex justify-content-center largerPics mt-3">
            <img
              src={product.image}
              className="ProductLarge_img"
              alt="Product img"
              id="mainImage"
              style={{ display: selectedImage === 'mainImage' ? 'block' : 'none' }}
            />
          </div>

          {/* <div className="small_pic_col">
            <img
              src={logo1}
              alt="Product img"
              className="ProductSmall_img"
              id="smallImage"
              onClick={showImageLarge}
            />
          </div> */}
        </div>
        {/* Product Images */}

        {/* Product Info */}
        <div className="col-5 Product_info mt-4">
          {/* Title */}
          <div>
            <span className="product__title">{product.name}</span>
          </div>

          {/* Price */}
          <div>
            <h5 className="product-price"> Rs. {product.price}.00</h5>
          </div>

          {/* Colors */}
          {/* <div>
            <h5 className="Product_colors">Color</h5>
            <div className="Productcolor-options">
              <span
                onClick={showImageLarge}
                className="Productcolor-option"
                style={{ backgroundColor: '#003B6F' }}
              ></span>
            </div>
          </div> */}

          {/* Product Description */}
          <div>
            <p className="Product_description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum perspiciatis vero autem ullam, veniam necessitatibus laudantium quis velit dolores quasi fugit tempora. Iusto voluptas atque quos aliquam quod, accusamus in dolore harum, doloribus voluptatibus corporis velit nam id laborum! Obcaecati eligendi omnis minima doloremque!
            </p>
          </div>

          {/* Dimensions */}
          <div className="product__accordion accordion quick-add-hidden border-bottom border-top">
            <details className="custom-smoothness">
              <summary
                role="button"
                aria-expanded="false"
                aria-controls="ProductAccordion-collapsible_tab_xmPLdQ-template--22077431808287__main"
              >
                <div className="dimension_headingAnd_icon">
                  <svg
                    className="icon icon-accordion"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    {/* SVG path content */}
                  </svg>
                  Dimensions
                </div>
              </summary>

              <div className="accordion__container pt-1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veniam ab atque fuga harum ipsum obcaecati optio magnam? Minus, sapiente?
                </p>
              </div>
            </details>
          </div>

          {/* Add to Cart Button */}
          <div className="btn_container mt-4" >
            <span className="button_">
              <button
                className=" rounded-pill add_to_cart text-center"
                type="submit"
                id="add_to_cart_button"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </span>
          </div>

          

          {/* Icons */}
          <div className="last_three_icons mt-5">
            <div className="row">
              <div className="col-4 icon_">
                <i className="bi bi-box-seam"></i>
                <h6 style={{ fontSize: 'medium', fontWeight: 100, textAlign: 'center' }}>
                  Wrapped with care
                </h6>
              </div>

              <div className="col-4 icon_">
                <i className="bi bi-truck"></i>
                <h6 style={{ fontSize: 'medium', fontWeight: 100, textAlign: 'center' }}>
                  Speedy Delivery
                </h6>
              </div>

              <div className="col-4 icon_">
                <i className="bi bi-arrow-return-left"></i>
                <h6 style={{ fontSize: 'medium', fontWeight: 100, textAlign: 'center' }}>
                  Hassle-Free returns
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/* Product Info */}
      </div>
    </div>
  );
};

export default ProductDetail;

