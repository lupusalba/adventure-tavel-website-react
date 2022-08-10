import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'
import servicesBgImage from '../images/servicesBackground.jpg'
import smallGroups from '../images/smallGroups.png'
import flexible from '../images/flexible.png'
import good from '../images/good.png'
import localComunities from '../images/localComunities.png'
import locals from '../images/locals.png'
import trophy from '../images/trophy.png'

const Services = () => {
  return (
    <div className="servicesPage onePage" style={{ backgroundImage: `url(${servicesBgImage})` }}>
      <Logo />
      <Navigation />

      <h1 className="servicesTitleHeading">Our Services Are Taillored For YOU!</h1>
      <div className="servicesIntro servicesGrid">
        <div className="serviceGridItem">
          <div className="servicesTitleContainer">
            <img src={smallGroups} alt="" className="servicesItemIcon" />
            <h3 className="serviceTitle">
              Small groups
            </h3>
          </div>
          <p className="serviceItemDescription">
            Join a small group of like-minded travellers that, like you, are eager to safely and confidently experience all the things that make our world worth exploring.
          </p>
        </div>

        <div className="serviceGridItem">
          <div className="servicesTitleContainer">
            <img src={trophy} alt="" className="servicesItemIcon" />
            <h3 className="serviceTitle">
              Book & Travel with Confidence
            </h3>
          </div>
          <p className="serviceItemDescription">
            We have measures in place to help keep you safe from the moment you book to the moment you (reluctantly) head home.
          </p>
        </div>

        <div className="serviceGridItem">
          <div className="servicesTitleContainer">
            <img src={locals} alt="" className="servicesItemIcon" />
            <h3 className="serviceTitle">
              Locally based guides
            </h3>
          </div>
          <p className="serviceItemDescription">
            At G Adventures, we don’t have tour guides — we have Chief Experience Officers. And they are all locally based, meaning they know the area you’re exploring like the back of their well-travelled hand.
          </p>
        </div>

        <div className="serviceGridItem">
          <div className="servicesTitleContainer">
            <img src={localComunities} alt="" className="servicesItemIcon" />
            <h3 className="serviceTitle">
              Built to support local communities
            </h3>
          </div>
          <p className="serviceItemDescription">
            We have always created our tours by building meaningful relationships with local communities, directly benefiting the people and places we visit.
          </p>
        </div>

        <div className="serviceGridItem">
          <div className="servicesTitleContainer">
            <img src={flexible} alt="" className="servicesItemIcon" />
            <h3 className="serviceTitle">
              Flexibility, freedom, fun
            </h3>
          </div>
          <p className="serviceItemDescription">
            No matter the Travel Style, our tours balance well-planned itineraries with the flexibility to do your own thing and make the experience your own.
          </p>
        </div>

        <div className="serviceGridItem">
          <div className="servicesTitleContainer">
            <img src={good} alt="" className="servicesItemIcon" />
            <h3 className="serviceTitle">
              G for Good
            </h3>
          </div>
          <p className="serviceItemDescription">
            When you travel with us, you experience first-hand our commitment to making travel a force for good is in everything we do.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
