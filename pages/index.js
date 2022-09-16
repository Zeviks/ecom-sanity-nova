import React from "react";

import { client } from "../lib/client";
import { Product, Footer, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <Footer />
    </>
  );
};

// Were fetching data that matches our query, using client.fetch and then passing the query to get the data
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  //Whatever gets returned from getServerSideProps is what is going to populate our dynamic fields.
  return { bannerData, products };
};

export default Home;
