
import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'
import icon from '../images/divider.png'
import safari from '../images/safari.jpg'
import jungle from '../images/jungle.jpg'
import paragliding from '../images/paragliding.jpg'
import cave from '../images/cave.jpg'
import mountain from '../images/mountain.jpg'
import diving from '../images/diving.jpg'
import modernRuin from '../images/modernRuin.jpg'
import ancientRuin from '../images/ancientRuin.jpg'
import luxuryResort from '../images/luxuryResort.jpg'

console.log(safari)

// function overlayOn() {
//   document.getElementById('destinationsBigTitleOverlay').style.display = 'block'
// }

const overlayOff = () => {
  document.getElementById('destinationsBigTitleOverlay').style.display = "none";
}

const Travel = () => {
  return (
    <div className="travelMegaWrapper">
<Logo />
        <Navigation />
      <div className="travelHeading">

      </div>
      <div className="travelPage" >
        

        <div id="destinationsBigTitleOverlay" onClick={overlayOff}>
          <h1>See Our Destinations!</h1>
        </div>


        <div className="travelGrid">

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${safari})` }}></div>
            <a href='/destinations/safari' className="travelDestinationInfo">
              <h2 className="destinationTitle">Safari</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${jungle})` }}></div>
            <a href='/destinations/jungle' className="travelDestinationInfo">
              <h2 className="destinationTitle">Jungle</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${mountain})` }}></div>
            <a href='/destinations/mountain' className="travelDestinationInfo">
              <h2 className="destinationTitle">mountain</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${cave})` }}></div>
            <a href='/destinations/demoPage' className="travelDestinationInfo">
              <h2 className="destinationTitle">Cave</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${ancientRuin})` }}></div>
            <a href='/destinations/demoPage' className="travelDestinationInfo">
              <h2 className="destinationTitle">Ancient Ruin</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${modernRuin})` }}></div>
            <a href='/destinations/demoPage' className="travelDestinationInfo">
              <h2 className="destinationTitle">Modern Ruin</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${diving})` }}></div>
            <a href='/destinations/demoPage' className="travelDestinationInfo">
              <h2 className="destinationTitle">diving</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${paragliding})` }}></div>
            <a href='/destinations/demoPage' className="travelDestinationInfo">
              <h2 className="destinationTitle">paragliding</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>

          <div className="travelDestination">
            <div className="travelDestinationImage" style={{ backgroundImage: `url(${luxuryResort})` }}></div>
            <a href='/destinations/demoPage' className="travelDestinationInfo">
              <h2 className="destinationTitle">luxury Resort</h2>
              <img src={icon} alt={icon} />
            </a>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Travel