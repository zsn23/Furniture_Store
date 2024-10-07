// import React from 'react'
import Carousals from "../Components/Carousals/Carousals"
import CategoryCarousal from "../Components/Carousals/CategoryCarousal"
import ProductsInCarousel from "../Components/Carousals/ProductsInCarousel "
import Video from "../Components/ProductVideo/Video"
import Reviews from "../Components/Reviews/Reviews"
import ServicesFeatures from "../Components/Service Feature/ServicesFeatures"

const Home = () => {
  return (
    <>
      <Carousals />
      <CategoryCarousal/>
      <ProductsInCarousel />
      <Video/>
      <Reviews/>
      <ServicesFeatures/>
    </>
  )
}

export default Home