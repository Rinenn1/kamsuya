import './styles.css';

const Navbar = () => {
  return (
    <div className="overall">
        <div className="logo">
            <img src="/leaf logo.svg" className='logo-img' />
            <h2 className="logo-text">Kamsuya Enterprises</h2>
        </div>

        <div className='links'>
            <ul className='link-items'>
                <li><a href="#">Home</a></li>
                <li><a href="#">How it Works</a></li>
                <li><a href="#">Our Farms</a></li>
                <li><a href="#">Subscriptions Plans</a></li>
                <div className="account">
                  <img src='/person.svg' className='account-icon' />
                  <li><a href="#">Account</a></li>
                </div>
                
            </ul>
        </div>
        
    </div>
        
  )
}

export default Navbar