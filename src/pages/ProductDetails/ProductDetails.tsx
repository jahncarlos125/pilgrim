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
            <div className="absolute -bottom-3 -right-3 bg-pilgrim p-1 text-white text-2xl md:text-3xl rounded-xl font-medium">
              R$ 59,99
            </div>
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
            <span className='font-bold'>Descrição: </span> O que John Newton, Hudson Taylor, J. Gresham Machen, John Piper, Charles Spurgeon, Agostinho, D.L. Moody e Timóteo têm em comum? Talvez você respondesse teologia, piedade ou impacto na sua geração, mas a verdade é que todos tinham mães piedosas que intercediam por eles. O renomado escritor Tim Challies nos conta as histórias dessas mulheres cujo amor pela Bíblia moldou os seus primeiros e mais importantes mestres. Essas mulheres, por mais que fossem ótimas teólogas por si só, muitas vezes foram ouvidas apenas por seus filhos. Incluindo relato de mães solteiras, recém-convertidas ou mulheres casadas com um incrédulo, este livro é um verdadeiro guia para mães que querem criar filhos para a honra e glória de Deus na prática, aprendendo da melhor forma possível: a obra da graça de Deus na vida de cristãos e suas mães ao longo dos séculos.
          </p>
          <p className='text-justify mt-5'>
            <span className='font-bold'>Editora: </span> {publisher}
          </p>
        </div>
      </div>
    </div>
  )
}