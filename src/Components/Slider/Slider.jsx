import React, { useState, useEffect, useRef } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

//type ImagesType = { images: string }[];

const Slider = (images) => {
  const [imagesArray, setImageArray] = useState([]);

  useEffect(() => {
    setImageArray(images.images);
  }, [images]);

  {
    if (imagesArray.length === images.images.length) {
      var imagess = [];
      for (var i = 0; i <= imagesArray.length; i++) {
        imagess.push({ url: imagesArray[i] });
      }

      return (
        <React.Fragment>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <img className="slide__img" src={imagesArray[0]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide__img" src={imagesArray[1]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide__img" src={imagesArray[2]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide__img" src={imagesArray[3]} alt="" />
            </SwiperSlide>
          </Swiper>
        </React.Fragment>
      );
    }
  }
};

export default Slider;
