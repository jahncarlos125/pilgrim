import { useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { useRedirect } from '../../hooks';

export default function Header() {
  const location = useLocation();
  const redirect = useRedirect();

  return (
    <div className='flex flex-row justify-between h-12 px-4 py-2 bg-pilgrim'>
      <img src={Logo} alt='logo' className='h-10 w-auto'/>
      {location.pathname !== '/pilgrim' && (
        <button className='text-white border-2 p-1 rounded-md self-center'
          onClick={() => redirect('/pilgrim')}
        >
          Voltar
        </button>
      )}
    </div>
  )
}
