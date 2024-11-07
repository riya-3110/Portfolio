import React from "react";
import "./Testimonials.scss";
import { testimonials } from "../../DataTestimonials";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="card-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          spaceBetween={0}
          navigation
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="cards">
                <img src={item.image} alt="person-img" />
                <h3>{item.name}</h3>
                <h5>{item.profession}</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi, dicta. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Molestiae, itaque.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
