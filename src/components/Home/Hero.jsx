import './Home.css'

function Hero() {
  return (
    <div className="hero">
        <div className="sec1">
            <h1 className="hero-heading">Farm-Fresh Groceries <span>Delivered Weekly</span></h1>
            <p className="hero-text">Our subscription service brings the freshest produce straight from local farms to your doorstep. No more grocery runs - just delicious, seasonal food when you need it.</p>
            <div className="buttons">
                <button id="btn1">
                    Choose your plan
                </button>
                <button id="btn2">
                    How it works
                </button>
            </div>
        </div>
        <div className="sec2">
            <img src="/shelf.avif" className="hero-img" />
        </div>
        
    </div>
  )
}

export default Hero