import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import './styles.css';
import { Product } from '../../../shared/interfaces';
import { useRedirect } from '../../../hooks';

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

interface CategoryCarouselProps{
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>,
  product: Product[],
}

export default function CategoryCarousel(props: CategoryCarouselProps) {
  const redirect = useRedirect();
  const {
    product,
    setSelectedProduct
  } = props;

  function goToProduct(item: Product){
    setSelectedProduct(item);
    redirect(`product/${item.id}`);
  }

  return (
    <Slider {...settings}>
      {product.map((item) => (
        <img key={item.id} onClick={() => goToProduct(item)} className='object-contain max-h-96' src={item.cover_path} alt={item.title} />
      ))}
    </Slider>
  )
}
