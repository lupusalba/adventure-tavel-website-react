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


const Travel = () => {
  return (
    <div className="travelPage onePage">
      <Logo />
      <Navigation />

      <h1>See Our Destinations!</h1>

      <div className="travelGrid">

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={safari} alt={safari} />
          </div>
          <div className="travelDetinationInfo">
            <h2 className="destinationTitle">Safari</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={jungle} alt={jungle} />
          </div>
          <div className="travelDetinationInfo">
            <h2 className="destinationTitle">Jungle</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={mountain} alt={mountain} />
          </div>
          <div className="travelDetinationInfo">
            <h2 className="destinationTitle">mountain</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={cave} alt={cave} />
          </div>
          <div className="travelDestinationInfo">
            <h2 className="destinationTitle">cave</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={ancientRuin} alt={ancientRuin} />
          </div>
          <div className="travelDetinationInfo">
            <h2 className="destinationTitle">Ancient Ruin</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={modernRuin} alt={modernRuin} />
          </div>
          <div className="travelDetinationInfo">
            <h2 className="destinationTitle">Modern Ruin</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={diving} alt={diving} />
          </div>
          <div className="travelDetinationInfo">
            <h2 className="destinationTitle">diving</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={paragliding} alt={paragliding} />
          </div>
          <div className="travelDetinationInfo">
            <h2 className="destinationTitle">paragliding</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>

        <div className="travelDestination">
          <div className="travelDestinationImage">
            <img src={luxuryResort} alt={luxuryResort} />
          </div>
          <div className="travelDetinationInfo">
            <h2 className="destinationTitle">luxury Resort</h2>
            <img src={icon} alt={icon}/>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Travel
