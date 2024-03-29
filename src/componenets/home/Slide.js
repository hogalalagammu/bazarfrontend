import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-material-ui-carousel';
import {Divider} from "@mui/material"
// import {products} from "./Productdata"
import {NavLink} from "react-router-dom";
import './slide.css'
// import hoto from ""

export default function Slide({title,products,op}) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='products_section'>
      <div className="products_deal">
     
          <h3>{title}</h3>
          <NavLink to={`/view/${op}`}>
          <button className="view_btn">View All</button>
          </NavLink>
        </div>
        <Divider/>
        { <Carousel
         responsive={responsive}
         infinite={true}
         draggable={false}
         swipeable={true}
         centerMode={true}
         autoPlay={true}
         autoPlaySpeed={4000}
         keyBoardControl={true}
         showDots={false}
         removeArrowOnDeviceType={["tablet", "mobile"]}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
         containerClass="carousel-container" 
        >
         
        {
  products.map((e) => {
    return (
      <NavLink to={`/getproducts/${e.id}`}>
        <div className="products_items" key={e.id}>
        
        <div className="product_img">
         
          <img src={process.env.PUBLIC_URL + String(e.url)} alt="error" />
        </div>
        <p className="products_name"style={{ color: "#007185" }}>{e.title.shortTitle}</p>
        <p className="products_offer" style={{ color: "#007185" }}>{e.discount}</p>
        <p className="products_explore"style={{ color: "#007185" }}>{e.tagline}</p>
      </div>
      </NavLink>
      
    );
  })
}
        </Carousel> }
    </div>
  )
}
