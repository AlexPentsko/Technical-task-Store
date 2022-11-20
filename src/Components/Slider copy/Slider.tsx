import { useState, useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

//type ImagesType = { images: string }[];

const Slider = (images: any) => {
  const [imagesArray, setImageArray] = useState([]);

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

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
        // <div>
        //   <SimpleImageSlider
        //     width={500}
        //     height={500}
        //     images={imagess}
        //     showBullets={true}
        //     showNavs={true}
        //     navStyle={1}
        //     navMargin={-30}
        //     autoPlay={true}
        //     nav
        //   />
        // </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img className="img-slide" src="/img/empty-star.svg" alt="rfds" />
            </div>
            <div className="swiper-slide">
              <img className="img-slide" src="/img/empty-star.svg" alt="yht" />
            </div>
            <div className="swiper-slide">
              <img className="img-slide" src="/img/empty-star.svg" alt="yht" />
            </div>
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-scrollbar"></div>
        </div>
      );
    }
  }
};

export default Slider;
