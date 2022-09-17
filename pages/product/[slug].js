import React from "react";

import { client, urlFor } from "../../lib/client";

const ProductDetails = () => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div>
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
};

//getStaticProps is a function we use when we want to pre-render the page at build time ahead of user's request
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  //Whatever gets returned from getServerSideProps is what is going to populate our dynamic fields.
  return {
    props: { bannerData, products },
  };
};

export default ProductDetails;
