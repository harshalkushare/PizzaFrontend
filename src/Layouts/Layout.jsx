import pizzalogo from '../assets/images/pizza.png';
import Footer from '../components/icons/Footer';

function Layout({children}) {
  return (
     <div>
        <nav className="flex items-center justify-around h-16 font-mono shadow-md border-none text-[#6B7280]">
        <div className="flex items-center justify-center">
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
    </nav>
         {children}
        <Footer/>
     </div>
  )
}

export default Layout