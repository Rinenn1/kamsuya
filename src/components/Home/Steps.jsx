import './Home.css'

function Steps() {
  return (
    <div className='how-it-works'>
        <div className="heading">
            <h2>How Kamsuya Works</h2>
            <p>Simple steps to get fresh, seasonal produce delivered to your home weekly</p>
        </div>
        <div className="steps">
            <div className="step">
                <p id="step">1</p>
                <span>Choose Your Plan</span>
                <p>Select from our flexible subscription options based on your household size and preferences.</p>
            </div>
            <div className="step">
                <p id="step">2</p>
                <span>We Harvest Fresh</span>
                <p>Our partner farms pick your produce at peak ripeness, usually the day before delivery.</p>
            </div>
            <div className="step">
                <p id="step">3</p>
                <span>Delivered to Your Door</span>
                <p>Receive your weekly box of farm-fresh goodness at your chosen delivery time.</p>
            </div>
        </div>
    </div>
  )
}

export default Steps