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
      <nav className="navBar row">
        <div className="col-md-4">
          <div className="navLogo">
            <h2>PrimeDogs</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="navItems">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Pricing</a>
          </div>
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

      <section className="row features">
        {features.map((a, i) => (
          <div className="col-lg-4 feature-container" key={i}>
            <img className="feature-img" src={features[i].url} alt="" />
            <h3>{features[i].intro}</h3>
            <p>{features[i].content}</p>
          </div>
        ))}
      </section>

      <section className="slider">
        <div
          id="testimonial-carousel"
          className="carousel slide"
          data-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2>
                I no longer have to sniff other dogs for love. I've found the
                hottest Corgi on TinDog. Woof.
              </h2>
              <img src={DogImg} alt="dog-profile" />
              <em>Pebbles, New York</em>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonial-carousel"
            role="button"
            data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#testimonial-carousel"
            role="button"
            data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>

      <section id="press">
        <img className="press-logo" src={TechCrunch} alt="tc-logo" />
        <img className="press-logo" src={Twn} alt="tnw-logo" />
        <img className="press-logo" src={BizInsider} alt="biz-insider-logo" />
        <img className="press-logo" src={Mashable} alt="mashable-logo" />
      </section>

      <section id="pricing">
        <div className="pricing-header">
          <h2>{pricingHeader.header}</h2>
          <p>{pricingHeader.text}</p>
        </div>

        <div className="row">
          {pricing.map((a, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="pricing-body">
                <div className="pricing-title">
                  <h3>{pricing[i].priceHeader}</h3>
                </div>
                <div className="pricing-items">
                  <h2>{pricing[i].price}</h2>
                  <p>{pricing[i].service1}</p>
                  <p>{pricing[i].service2}</p>
                  <p>{pricing[i].service3}</p>
                </div>
                <div className="pricing-footer">
                  <button type="button">{pricing[i].signUp}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h1>Find the True Love of Your Dog's Life Today.</h1>
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
      </section>

      <footer id="footer">
        <p>© Copyright TinDog</p>
      </footer>
    </div>
  );
}

export default Bootstrap;
