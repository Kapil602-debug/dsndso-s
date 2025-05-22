import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <h2>Image Carousel</h2>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Slide+1" alt="Slide 1" style={{ width: '100%' }}/>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Slide+2" alt="Slide 2" style={{ width: '100%' }}/>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Slide+3" alt="Slide 3" style={{ width: '100%' }}/>
        </div>
      </Slider>
    </div>
  );
}
export default ImageSlider;