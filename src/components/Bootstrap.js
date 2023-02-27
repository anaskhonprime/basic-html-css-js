import React from "react";

import {
  DogImg,
  BizInsider,
  Mashable,
  TechCrunch,
  Twn,
  LadyImg,
  Iphone6,
} from "../assets/index.js";

import { headerContent, features, pricing, pricingHeader } from "./data.js";

function Bootstrap() {

  return (
    <div className="contentBody">
      <nav className="navBar">
        <div className="navLogo">
          <h2>PrimeDogs</h2>
        </div>
        <div className="navItems">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Download</a>
          <button>Login</button>
        </div>
      </nav>

      <section className="row title">
        <div className="col-lg-6 title-content">
          <h1>{headerContent[0].header}</h1>

          <button className="iphone">
            <img
              className="title-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
              alt=""
            />
            <a href="#">{headerContent[1].get}</a>
          </button>
          <button className="android">
            <img
              className="title-image"
              src="https://www.svgrepo.com/download/223032/playstore.svg"
              alt=""
            />
            <a href="#">{headerContent[1].get}</a>
          </button>
        </div>
        <div className="col-lg-6">
          <img className="title-mainImg" src={Iphone6} alt="" />
        </div>
      </section>

      <div className="container-fluid">
        <section className="row features">
          {features.map((a, i) => (
            <div className="col-lg-4" key={i}>
              <img className="feature-img" src={features[i].url} alt="" />
              <h3>{features[i].intro}</h3>
              <p>{features[i].content}</p>
            </div>
          ))}
        </section>
      </div>

      <section className="">
        <h2>
          I no longer have to sniff other dogs for love. I've found the hottest
          Corgi on TinDog. Woof.
        </h2>
        <img src="" alt="dog-profile" />
        <em>Pebbles, New York</em>
      </section>

      <section id="press">
        <img src={TechCrunch} alt="tc-logo" />
        <img src={Twn} alt="tnw-logo" />
        <img src={BizInsider} alt="biz-insider-logo" />
        <img src={Mashable} alt="mashable-logo" />
      </section>

      <section id="pricing">
        <h2>{pricingHeader.header}</h2>
        <p>{pricingHeader.text}</p>

        {pricing.map((a, i) => (
          <div key={i}>
            <h3>{pricing[i].priceHeader}</h3>
            <h2>{pricing[i].price}</h2>
            <p>{pricing[i].service1}</p>
            <p>{pricing[i].service2}</p>
            <p>{pricing[i].service3}</p>
            <button type="button">{pricing[i].signUp}</button>
          </div>
        ))}
      </section>

      <section id="cta">
        <h3>Find the True Love of Your Dog's Life Today.</h3>
        <button type="button">Download</button>
        <button type="button">Download</button>
      </section>

      <footer id="footer">
        <p>© Copyright TinDog</p>
      </footer>
    </div>
  );
}

export default Bootstrap;
