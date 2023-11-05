import React from 'react'; 
import Navbar from '../Navbar/Navbar';
import './Home.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faFacebook, faTiktok, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const starterFeatures = [
    { feature: '10,000 credits', included: true },
    { feature: 'Facebook Ads', included: true },
    { feature: 'Influencer placements', included: true },
    { feature: 'Details of ads and placements', included: true },
    { feature: 'Advanced Filters', included: true },
    { feature: 'Chrome Extension', included: true },
    { feature: 'Tiktok Ads', included: false },
    { feature: 'Pinterest Ads', included: false },
    { feature: 'Shop analysis', included: false },
    { feature: 'Winning product finder tool', included: false },
    { feature: 'AI Success Tracker', included: false },
  ];

  const premiumFeatures = [
    { feature: '100,000 credits', included: true },
    { feature: 'Facebook Ads', included: true },
    { feature: 'Influencer placements', included: true },
    { feature: 'Details of ads and placements', included: true },
    { feature: 'Advanced Filters', included: true },
    { feature: 'Chrome Extension', included: true },
    { feature: 'Tiktok Ads', included: true },
    { feature: 'Pinterest Ads', included: true },
    { feature: 'Shop analysis', included: true },
    { feature: 'Winning product finder tool', included: false },
    { feature: 'AI Success Tracker', included: false },
  ];

  const businessFeatures = [
    { feature: '150,000 credits', included: true },
    { feature: 'Facebook Ads', included: true },
    { feature: 'Influencer placements', included: true },
    { feature: 'Details of ads and placements', included: true },
    { feature: 'Advanced Filters', included: true },
    { feature: 'Chrome Extension', included: true },
    { feature: 'Tiktok Ads', included: true },
    { feature: 'Pinterest Ads', included: true },
    { feature: 'Shop analysis', included: true },
    { feature: 'Winning product finder tool', included: true },
    { feature: 'AI Success Tracker', included: true },
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <div className="container">
          <h1>Launch winning products in 3 clicks</h1>
          <p>
            Minea is an all-in-one solution, designed to help you launch your ecommerce, scale your sales & boost profits
          </p>
          <a href="#trial" className="btn btn-primary btn-lg">FREE Trial</a>
          <div className="social-icons">
            <a href="https://www.pinterest.com">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.tiktok.com">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.snapchat.com">
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
          </div>
        </div>
      </div>
      <div className="plans">
        <div className="plan">
          <h2>Starter</h2>
          <p>$49 /month</p>
          <ul>
            {starterFeatures.map((feature, index) => (
              <li key={index} className={feature.included ? 'included' : 'excluded'}>
                {feature.included ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>} {feature.feature}
              </li>
            ))}
          </ul>
          <a href="#start" className="btn btn-primary btn-lg">Start</a>
          <p>No commitment.</p>
        </div>
        <div className="plan">
          <h2>Premium</h2>
          <p>$99 /month</p>
          <ul>
            {premiumFeatures.map((feature, index) => (
              <li key={index} className={feature.included ? 'included' : 'excluded'}>
                {feature.included ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>} {feature.feature}
              </li>
            ))}
          </ul>
          <a href="#premium" className="btn btn-primary btn-lg">Start</a>
          <p>No commitment.</p>
        </div>
        <div className="plan">
          <h2>Business</h2>
          <p>$399 /month</p>
          <ul>
            {businessFeatures.map((feature, index) => (
              <li key={index} className={feature.included ? 'included' : 'excluded'}>
                {feature.included ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>} {feature.feature}
              </li>
            ))}
          </ul>
          <a href="#business" className="btn btn-primary btn-lg">Start</a>
          <p>No commitment.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;