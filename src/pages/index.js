import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BetaBanner from './betaBanner';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faRobot, faDog, faCog, faRocket, faPlane, faSpider, faFlask } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

import Heading from '@theme/Heading';
// import styles from './index.module.css';
import styles from './ApplicationAdvertise.module.css'; // Import the CSS module
import carouselStyles from './CompanyCarousel.module.css'; // Import the CSS Module
import CompareStyles from './ComparisonComponent.module.css';
import SurveyStyles from './SurveyStyles.module.css';
import Robotstyles from './RobotDefinitions.module.css';
import ServicesStyles from './ServicesStyles.module.css'; // Corrected import for styles
import Insstyles from './InspirationalQuote.module.css'; // Import the CSS module
import './header.css'; // Link to your custom CSS
import './Spinner.css'; // Import the CSS file for spinner styling
import dis_styles from './display_sections.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="header"> {/* Apply custom class here */}
      <div className="header-container">
        <div className="left-section">
          <div className="title-container">
            <h1 className="title">
              AI powered <span className="robo-gradient"> ERP </span> systems for better business visibility and intelligence
              {/* Use<span className="robo-gradient"> lever </span>to setup your next simulation */}
            </h1>
          </div>
          <p className="subtitle text-lightModeBlack dark:text-white">
            Create your own flexible and custom system built on data understood by AI
            <br /><span className="robo-gradient big-words"> <strong>no code</strong> </span>
            <br /><span className="robo-gradient big-words"> <strong>flexible</strong> </span>
            <br /><span className="robo-gradient big-words"> <strong>simple</strong> </span>
          </p>

          <div className="button-container">
            <div className="left-container">
              <a href="/#quote">
                <button className="base-button left-button">Schedule a Demo</button>
              </a>
            </div>
            <div className="right-container">
              <a href="/#services">
                <button className="base-button right-button">Explore Services</button>
              </a>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img
            src="img/front_img.png"
            alt="App Preview"
            className="image-transform"
          />
        </div>
      </div>
    </header>
  );
}


const InspirationalQuote = ({ quote }) => {
  return (
    <div className={Insstyles.quoteContainer}>
      <p className={Insstyles.quoteText}>{quote}</p>
    </div>
  );
};


const images = [
  { src: 'img/unreal_transparent.png', width: '120px', height: '120px', link: 'https://www.unrealengine.com/en-US/' },
  { src: 'img/autocad_transparent.png', width: '550px', height: '100px', link: 'https://www.autodesk.com/products/autocad/overview' },
  { src: 'img/ros_logo_transparent.png', width: '360px', height: '80px', link: 'https://www.ros.org/' },
  { src: 'img/isaac_sim_transparent.png', width: '140px', height: '250px', link: 'https://developer.nvidia.com/isaac-sim' },
  { src: 'img/gazebo_transparent.png', width: '200px', height: '150px', link: 'http://gazebosim.org/' },
  { src: 'img/solidworks_transparent.png', width: '440px', height: '240px', link: 'https://www.solidworks.com/' },
  { src: 'img/unity_sim.png', width: '230px', height: '80px', link: 'https://unity.com/' },
];

function CompanyCarousel() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Generate the image list twice for continuous scrolling
    setImageList([...images, ...images]);
  }, []);

  return (
    <div className={carouselStyles.carouselContainer} id="services">
      <div className={carouselStyles.carouselContent}>
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Company ${index + 1}`}
            className={carouselStyles.carouselImage}
            style={{
              width: image.width,
              height: image.height,
              objectFit: 'cover' // Ensures the image is cropped to fit the container
            }}
          />
        ))}
      </div>
    </div>
  );
}

const stepsWithLever = [
  { text: 'Define their own ERP system and ontology using AI tools', emoji: '🤖' },
  { text: 'Deploy the system and get AI insights into system improvements', emoji: '⚙️' },
  { text: 'Easily alter the system when business requirements change', emoji: '🔄' }
];

const stepsWithoutLever = [
  { text: 'Purchase an expensive system', emoji: '💰' },
  { text: 'Work with clunky tooling', emoji: '🔧' },
  { text: 'Struggle to gather accurate data from the system', emoji: '📉' },
  { text: 'Request changes to the ERP system, taking 5 months to implement', emoji: '⏳' },
  { text: 'Spend significant resources on consultants to patch issues', emoji: '🛠️' },
  { text: 'Endure disruptions while waiting for the system update', emoji: '🚧' },
  { text: 'Discover the functionality doesn’t meet specific requirements', emoji: '❌' },
  { text: 'Face delays in adapting to new business needs', emoji: '🐢' }
];

function ComparisonComponent() {
  return (
    <div className={CompareStyles.comparisonContainer}>
      {/* With Lever Section */}
      <div className={CompareStyles.section}>
        <h2 className={CompareStyles.withLever}>With lever</h2>
        {stepsWithLever.map((step, index) => (
          <div key={index} className={CompareStyles.stepCardWith}>
            <span className={CompareStyles.emoji}>{step.emoji}</span>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      {/* Without Lever Section */}
      <div className={CompareStyles.section}>
        <h2 className={CompareStyles.withoutLever}>Without lever</h2>
        {stepsWithoutLever.map((step, index) => (
          <div key={index} className={CompareStyles.stepCardWithout}>
            <span className={CompareStyles.emoji}>{step.emoji}</span>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



const Spinner = () => {
  return (
    <div className="spinner"></div>
  );
};

const SurveySection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setcompName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading
  const [success, setSuccess] = useState(false); // State to track success


  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setLoading(true); // Start loading after form submission

    // Send email to yourself (internal notification)
    emailjs
      .sendForm(
        'service_jj1wsqp', // Replace with your EmailJS service ID
        'template_0qdtk3f', // Replace with your internal notification template ID
        e.target,
        'TrAW6-R-IGHMVtP7Z' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setLoading(false); // Stop loading
          setSuccess(true); // Set success to true
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          setLoading(false); // Stop loading
          alert('There was an error submitting the form.');
        }
      );
  };

  return (
    <div className={SurveyStyles.container}>
      {loading ? (
        <Spinner />
      ) : success ? (
        <div className={SurveyStyles.successMessage}>
          <p>Your request has been submitted successfully. We will get back to you soon.</p>
        </div>
      ) : (
        <form className={SurveyStyles.form} onSubmit={handleSubmit}>
          <div className={SurveyStyles.header}>
            <h2>Request a Demo</h2>
            <p className={SurveyStyles.subtitle}>Develop your new age ERP system with <br /><span className="robo-gradient"> lever </span>
            </p>
          </div>
          <div className={SurveyStyles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              required
            />
          </div>
          <div className={SurveyStyles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
            />
          </div>
          <div className={SurveyStyles.inputGroup}>
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              value={companyName}
              onChange={(e) => setcompName(e.target.value)}
              placeholder="company"
              required
            />
          </div>
          {error && <p className={SurveyStyles.errorMessage}>{error}</p>}
          <button type="submit" className={SurveyStyles.submitButton}>Request Demo</button>
        </form>
      )}
    </div>
  );
};

const CRMAd = () => {
  return (
    <div className={dis_styles.leftSection}>
      <div className={dis_styles.text}>
        <h1>Customize your interaction with customers</h1>
        <p>
          Care for each customer in a unique way, enable all employees to have personal relationships with each customer
        </p>
      </div>
      <div>
        <img
          className={dis_styles.image}
          src="img/CRM.png"
          alt="Placeholder"
        />
      </div>
    </div>
  );
};

const LogisticsAd = () => {
  return (
    <div className={dis_styles.rightSection}>
      <div>
        <img
          className={dis_styles.image}
          src="img/Logistics.png"
          alt="Placeholder"
        />
      </div>
      <div className={dis_styles.text}>
        <h1>Plan and manage on demand logistics decisions</h1>
        <p>
          Use AI to predict and optimize logistics decisions, and manage the supply chain efficiently
        </p>
      </div>
    </div>
  );
};

const SalesAd = () => {
  return (
    <div className={dis_styles.leftSection}>
      <div className={dis_styles.text}>
        <h1>Take control of your sales funnel</h1>
        <p>
          Optimize which clients to spend effort on and gain better forecasting for future sales.
        </p>
      </div>
      <div>
        <img
          className={dis_styles.image}
          src="img/salesfunnel.png"
          alt="Placeholder"
        />
      </div>
    </div>
  );
};

// "          <Link className="button button--lg" to="/docs/quick-start">
//             Quick Start
//           </Link>"
//           "

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="URDF Creator">
      <HomepageHeader />
      <hr className={styles.pageBreakLine} />
      <InspirationalQuote quote="“The future of business lies in knowledge graphs, as they provide the crucial ability to connect and understand complex relationships within data, enabling businesses to make informed decisions and gain a competitive edge through deeper insights.”" />
      <hr className={styles.pageBreakLine} />
      <ComparisonComponent />
      <hr className={styles.pageBreakLine} />
      <CRMAd />
      <hr className={styles.pageBreakLine} />
      <LogisticsAd />
      <hr className={styles.pageBreakLine} />
      <SalesAd />
      <hr className={styles.pageBreakLine} />
      <SurveySection />
      <div id="contact"></div>
    </Layout>
  );
}
