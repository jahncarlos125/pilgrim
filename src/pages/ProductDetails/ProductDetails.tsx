import { useEffect } from "react";
import { Product } from "../../shared/interfaces"

export default function ProductDetails(props: {selectedProduct: Product}) {
  const { author, publisher, title, format_type, cover_path} = props.selectedProduct;

  useEffect((() => {
    window.scrollTo(0, 0);
  }), [])

  function renderType(type: 'audiobook'|'ebook'){
    if(type === 'ebook'){
      return (
        <svg xmlns="http://www.w3.org/2000/svg" name='E-book' className="absolute top-2 right-2 h-10 w-10 stroke-current stroke-2 text-pilgrim" fill="none" viewBox="0 0 24 24">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute top-2 right-2 h-10 w-10 stroke-current stroke-2 text-pilgrim" fill="none">
        <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    )
  }

  return (
    <div className='container mx-auto'>
      <div className="flex flex-col md:flex-row m-10">
        <div className='flex-shrink'>
          <figure className='rounded-xl relative'>
            <img className='object-contain rounded-lg' src={cover_path} alt="" />
            {renderType(format_type)}
            <button onClick={() => alert('Item adicionado ao carrinho!')} title='Adicionar ao carrinho' className="flex flex-row items-center absolute -bottom-3 -right-3 bg-pilgrim p-1 text-white text-2xl md:text-3xl rounded-xl font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-1 fill-current" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
                R$ 59,99
            </button>
          </figure>
        </div>
        <div className='flex flex-col flex-1 justify-center pt-2 md:ml-5'>
          <p className="text-3xl font-semibold md:text-4xl my-1.5 text-pilgrim text-center md:text-left">
            {title}
          </p>
          <p className="text-2xl md:text-4xl text-gray-500 text-center md:text-left">
            {author}
          </p>
          <p className='text-justify mt-5'>
            <span className='font-bold'>Descri????o: </span> O que John Newton, Hudson Taylor, J. Gresham Machen, John Piper, Charles Spurgeon, Agostinho, D.L. Moody e Tim??teo t??m em comum? Talvez voc?? respondesse teologia, piedade ou impacto na sua gera????o, mas a verdade ?? que todos tinham m??es piedosas que intercediam por eles. O renomado escritor Tim Challies nos conta as hist??rias dessas mulheres cujo amor pela B??blia moldou os seus primeiros e mais importantes mestres. Essas mulheres, por mais que fossem ??timas te??logas por si s??, muitas vezes foram ouvidas apenas por seus filhos. Incluindo relato de m??es solteiras, rec??m-convertidas ou mulheres casadas com um incr??dulo, este livro ?? um verdadeiro guia para m??es que querem criar filhos para a honra e gl??ria de Deus na pr??tica, aprendendo da melhor forma poss??vel: a obra da gra??a de Deus na vida de crist??os e suas m??es ao longo dos s??culos.
          </p>
          <p className='text-justify mt-5'>
            <span className='font-bold'>Editora: </span> {publisher}
          </p>
        </div>
      </div>
    </div>
  )
}