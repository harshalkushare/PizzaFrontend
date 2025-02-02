import { useDispatch, useSelector } from 'react-redux';
import pizzalogo from '../assets/images/pizza.png';
import Footer from '../components/icons/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/slices/AuthSlice';

function Layout({children}) {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogOut(e) {
        e.preventDefault();
        dispatch(logout()); 
    }

  return (
     <div>
        <nav className="flex items-center justify-around h-16 font-mono shadow-md border-none text-[#6B7280]">
        <div onClick={() => navigate('/')} className="flex items-center justify-center">
            <p>Pizza App</p>
            <img src={pizzalogo} alt="pizaalogo"/>
        </div>
        <div className='hidden md:block'>
            <ul className='flex gap-4'>
                <li className='hover:text-[#ff9110]'>
                    {' '}
                    <p>Menu{' '}</p>
                </li>
                <li className='hover:text-[#ff9110]'>
                    {' '}
                    <p>Services{' '}</p>
                </li>
                <li className='hover:text-[#ff9110]'>
                    {' '}
                    <p>About{' '}</p>
                </li>
            </ul>
        </div>
        
        
        <div>
        <ul className='flex gap-4'>
                <li className='hover:text-[#FF9110]'>
                    {isLoggedIn?(
                        <Link onClick={handleLogOut}>Logout</Link>
                    ):(
                    <Link to={"/auth/login"}>LogIn</Link>
                    )}
                </li>
            </ul>
        </div>
    </nav>
         {children}
        <Footer/>
     </div>
  )
}

export default Layout