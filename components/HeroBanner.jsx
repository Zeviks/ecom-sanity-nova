import Link from "next/link";
import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h1 className="hero-largeTxt">{heroBanner.largeText1}</h1>
        <h3 className="hero-title">{heroBanner.midText}</h3>
      </div>
      <img
        src={urlFor(heroBanner.image)}
        alt="headphones"
        className="hero-banner-image"
      />
      <div className="btn-group test">
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>

        <div className="desc">
          <h5>Description</h5>
          <p className="heroDesc">{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
