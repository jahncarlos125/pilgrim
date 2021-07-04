import { Product } from '../interfaces';
import Slider, { Settings } from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import './styles.css';

const settings: Settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'ondemand',
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
        <Link to='product'>
          <img key={item.id} className='object-contain max-h-96' src={item.cover_path} alt={item.title} />
        </Link>
      ))}
    </Slider>
  )
}
