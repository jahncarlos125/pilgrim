import { useEffect, useState } from 'react'
import axios from 'axios';
import { Categories } from './interfaces';
import CategoryCarousel from './CategoryCarousel';
import { Product } from '../../shared/interfaces';

interface CategoryListProps {
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>
}

export default function CategoryList(props: CategoryListProps) {
  const [ products, setProducts ] = useState<Categories[]>([]);

  useEffect(() => {
    async function getProductsByCategory(){
      const { data } = await axios.get('https://my-json-server.typicode.com/filipeveronezi/fake-api/categories');
      setProducts(data);
    }

    getProductsByCategory();
  })

  return (
    <div>
      {products.slice(0).reverse().map((item, index) => {
        const style = index === 0 ? 'my-8 py-2 bg-pilgrim bg-opacity-20': 'my-8 mx-1';
        return (
          <div key={item.id} className={style}>
            <p className='text-2xl font-sans text-pilgrim font-bold m-2'>{item.title}</p>
            <CategoryCarousel setSelectedProduct={props.setSelectedProduct} product={item.products}/>
          </div>
        )
      })}
    </div>
  )
}
