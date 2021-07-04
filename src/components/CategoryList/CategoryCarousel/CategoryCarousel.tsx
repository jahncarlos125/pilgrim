import { Product } from '../interfaces';
import Slider, { Settings } from 'react-slick';
import './styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export default function CategoryCarousel(props: {product: Product[]}) {
  const {
    product
  } = props;

  return (
    <Slider {...settings}>
      {product.map((item) => (
        <img key={item.id} className='object-contain max-h-96' src={item.cover_path} alt={item.title} />
      ))}
    </Slider>
  )
}
