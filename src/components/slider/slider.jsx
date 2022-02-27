import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import tw, { styled } from "twin.macro";

import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ children }) => {
  return (
    <SwiperSlider modules={[Navigation]} slidesPerView={`auto`} navigation>
      {children.map((child, index) => {
        return <SwiperSlide key={index}>{child}</SwiperSlide>;
      })}
    </SwiperSlider>
  );
};

const SwiperSlider = styled(Swiper)`
  ${tw`col-span-12`}

  margin-left: unset;
  margin-right: unset;

  .swiper-slide {
    ${tw`
      w-full
      sm:pr-16
      sm:pl-16
      pr-12
      pl-12
    `}
  }

  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      font-size: 30px;
      color: #000;
    }
  }

  .swiper-button-prev {
    ${tw`left-0`}

    font-size: 30px;
  }

  .swiper-button-next {
    ${tw`right-0`}
    font-size: 24px;
  }
`;

export default Slider;
