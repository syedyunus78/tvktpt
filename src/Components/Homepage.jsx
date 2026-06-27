
import React, { useState } from 'react'
import "./Homepage.css";
import tvklogo  from "../images/51qh+14OaWL._SY575_.jpg"
import {

  FaFlag,
  FaUsers,
  FaHandshake,
  FaUser,
  FaDove,
  FaStar,
  FaCheckCircle,
  FaClipboardList,
  FaMapMarkerAlt,
  FaArrowRight,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaTimes
} from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Homepage = () => {
const [showLogin, setShowLogin] = useState(false);
  
const [language, setLanguage] = useState("ta");
  return (
  <>

  <div className="topbar">
  <div className="topbar-left">
    <span>
      {language === "ta"
        ? "தமிழகம் வெல்லும் !"
        : "Tamil Nadu Will Win!"}
    </span>

    <span className="divider">|</span>

    <span>
      {language === "ta"
        ? "வெற்றிக்காக!"
        : "For Victory!"}
    </span>
  </div>

  <div className="topbar-right">

    <div className="language-switch">
      <button
        className={language === "ta" ? "active" : ""}
        onClick={() => setLanguage("ta")}
      >
        தமிழ்
      </button>

      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        English
      </button>
    </div>

    <span className="follow-text">Follow Us :</span>

    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FaFacebookF />
    </a>

    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram />
    </a>

    <a href="https://youtube.com" target="_blank" rel="noreferrer">
      <FaYoutube />
    </a>

    <a href="https://x.com" target="_blank" rel="noreferrer">
      <FaXTwitter />
    </a>

  </div>
</div>


  <nav className="navbar">

  {/* Left */}
  <div className="navbar-left">
    <img
      src={tvklogo}
      alt="TVK Logo"
      className="logo"
    />

    <div className="logo-text">
      <h2>
        {language === "ta"
          ? "தமிழக வெற்றிக் கழகம்"
          : "Tamilaga Vettri Kazhagam"}
      </h2>

      <p>
        {language === "ta"
          ? "திருப்பத்தூர் மேற்கு மாவட்டம்"
          : "Tirupathur West District"}
      </p>
    </div>
  </div>

  {/* Center */}
  <ul className="navbar-menu">
    <li>
      <a href="/">
        {language === "ta" ? "முகப்பு" : "Home"}
      </a>
    </li>

    <li>
      <a href="/about">
        {language === "ta" ? "எங்களை பற்றி" : "About Us"}
      </a>
    </li>

    <li>
      <a href="/events">
        {language === "ta" ? "நிகழ்வுகள்" : "Events"}
      </a>
    </li>

    <li>
      <a href="/news">
        {language === "ta" ? "செய்திகள்" : "News"}
      </a>
    </li>

    <li>
      <a href="/gallery">
        {language === "ta" ? "புகைப்படங்கள்" : "Gallery"}
      </a>
    </li>
  </ul>

  {/* Right */}
  <div className="navbar-right">
    <button
      className="join-btn"
      onClick={() => setShowLogin(true)}
    >
      <FaUser />
      <span>
        {language === "ta"
          ? "உறுப்பினர் இணைவோம்"
          : "Join Membership"}
      </span>
    </button>
  </div>

</nav>






   <section className="herosection">

  {/* Center */}
  <div className="herocenter">

    <h2>
      {language === "ta"
        ? "தமிழகம் வெல்லும் !"
        : "Tamil Nadu Will Win!"}
    </h2>

    <h3>
      {language === "ta"
        ? "நாம் தமிழகம் !"
        : "We Are Tamil!"}
    </h3>

    <h3>
      {language === "ta"
        ? "நாம் வெல்லுவோம் !"
        : "Together We Will Win!"}
    </h3>

  </div>

  {/* Right */}
  <div className="hero-right">

    <div className="leaders">
      <img src="https://placehold.co/70x85?text=V1" alt="Leader 1" />
      <img src="https://placehold.co/70x85?text=V2" alt="Leader 2" />
      <img src="https://placehold.co/70x85?text=V3" alt="Leader 3" />
      <img src="https://placehold.co/70x85?text=V4" alt="Leader 4" />
    </div>

    <div className="leader-card">

      <h2>
        {language === "ta"
          ? "T. கமல்"
          : "T. Kamal"}
      </h2>

      <h4>
        {language === "ta"
          ? "மாவட்ட செயலாளர்"
          : "District Secretary"}
      </h4>

      <p>
        {language === "ta"
          ? "தமிழக வெற்றிக் கழகம்"
          : "Tamilaga Vettri Kazhagam"}
      </p>

      <p>
        {language === "ta"
          ? "திருப்பத்தூர் மேற்கு மாவட்டம்"
          : "Tirupathur West District"}
      </p>

    </div>

    <button className="whatsapp-btn">
      <FaWhatsapp />
      {language === "ta"
        ? "WhatsApp"
        : "WhatsApp"}
    </button>

  </div>

</section>

<section className="feature-section">

  <div className="feature-item">
    <div className="feature-top">
      <FaUsers className="feature-icon" />
      &nbsp;
      <h4>
        {language === "ta" ? "மக்கள் நலன்" : "People's Welfare"}
      </h4>
    </div>
    <p>
      {language === "ta" ? "எங்கள் முதன்மை" : "Our Priority"}
    </p>
  </div>

  <div className="feature-item">
    <div className="feature-top">
      <FaHandshake className="feature-icon" />
      &nbsp;
      <h4>
        {language === "ta" ? "சமூக சேவை" : "Social Service"}
      </h4>
    </div>
    <p>
      {language === "ta" ? "எங்கள் கடமை" : "Our Duty"}
    </p>
  </div>

  <div className="feature-item">
    <div className="feature-top">
      <FaFlag className="feature-icon" />
      &nbsp;
      <h4>
        {language === "ta" ? "தமிழ் வெற்றி" : "Tamil Victory"}
      </h4>
    </div>
    <p>
      {language === "ta" ? "எங்கள் இலக்கு" : "Our Goal"}
    </p>
  </div>

  <div className="feature-item">
    <div className="feature-top">
      <FaStar className="feature-icon" />
      &nbsp;
      <h4>
        {language === "ta" ? "இளைஞர் எழுச்சி" : "Youth Empowerment"}
      </h4>
    </div>
    <p>
      {language === "ta" ? "எங்கள் பலம்" : "Our Strength"}
    </p>
  </div>

  <div className="feature-item">
    <div className="feature-top">
      <FaDove className="feature-icon" />
      &nbsp;
      <h4>
        {language === "ta"
          ? "நேர்மை · நம்பிக்கை"
          : "Honesty & Trust"}
      </h4>
    </div>
    <p>
      {language === "ta" ? "எங்கள் கொள்கை" : "Our Policy"}
    </p>
  </div>

</section>

  

 <section className="mission-section">

  {/* Left */}
  <div className="mission-card">

    <span className="section-title">
      {language === "ta"
        ? "— எங்கள் நோக்கம் —"
        : "— Our Mission —"}
    </span>

    <h2>
      {language === "ta"
        ? "சமூக நீதியும், சமத்துவமும், வளர்ச்சியும் மிக்க தமிழகம் உருவாக்க, மக்கள் ஒன்றிணைந்து பாடுபடுவதே எங்கள் நோக்கம்."
        : "Our mission is to unite the people and work together to build a Tamil Nadu based on social justice, equality, and sustainable development."}
    </h2>

    <button className="know-btn">
      {language === "ta" ? "மேலும் அறிய" : "Learn More"}
      <FaArrowRight />
    </button>

  </div>

  {/* Center */}
  <div className="activity-section">

    <h2 className="activity-title">
      {language === "ta"
        ? "— எங்கள் செயல்பாடுகள் —"
        : "— Our Activities —"}
    </h2>

    <div className="activity-grid">

      <div className="activity-card">
        <img src="https://picsum.photos/220/150?random=1" alt="" />
        <p>
          {language === "ta"
            ? "மக்கள் நலப் பணிகள்"
            : "Public Welfare Services"}
        </p>
      </div>

      <div className="activity-card">
        <img src="https://picsum.photos/220/150?random=2" alt="" />
        <p>
          {language === "ta"
            ? "சுற்றுச் சூழல் பாதுகாப்பு"
            : "Environmental Protection"}
        </p>
      </div>

      <div className="activity-card">
        <img src="https://picsum.photos/220/150?random=3" alt="" />
        <p>
          {language === "ta"
            ? "இரத்த தான முகாம்"
            : "Blood Donation Camp"}
        </p>
      </div>

      <div className="activity-card">
        <img src="https://picsum.photos/220/150?random=4" alt="" />
        <p>
          {language === "ta"
            ? "கல்வி உதவிகள்"
            : "Educational Assistance"}
        </p>
      </div>

      <div className="activity-card">
        <img src="https://picsum.photos/220/150?random=5" alt="" />
        <p>
          {language === "ta"
            ? "பொது நிகழ்வுகள்"
            : "Public Events"}
        </p>
      </div>

      <button className="activity-btn">
        <span>
          {language === "ta"
            ? "மேலும் அறிய"
            : "Learn More"}
        </span>
      </button>

    </div>

  </div>

  {/* Right */}
  <div className="strength-card">

    <span className="section-title">
      {language === "ta"
        ? "— எங்கள் வலிமை —"
        : "— Our Strength —"}
    </span>

    <br />

    <div className="strength-item">
      <FaMapMarkerAlt style={{ marginBottom: "35px" }} />
      <div>
        <h3>100+</h3>
        <p>
          {language === "ta"
            ? "கிராமங்கள்"
            : "Villages"}
        </p>
      </div>
    </div>

    <div className="strength-item">
      <FaUsers style={{ marginBottom: "35px" }} />
      <div>
        <h3>5000+</h3>
        <p>
          {language === "ta"
            ? "தன்னார்வலர்கள்"
            : "Volunteers"}
        </p>
      </div>
    </div>

    <div className="strength-item">
      <FaClipboardList style={{ marginBottom: "35px" }} />
      <div>
        <h3>25+</h3>
        <p>
          {language === "ta"
            ? "செயல்பாடுகள்"
            : "Activities"}
        </p>
      </div>
    </div>

    <div className="strength-item">
      <FaCheckCircle style={{ marginBottom: "35px" }} />
      <div>
        <h3>100%</h3>
        <p>
          {language === "ta"
            ? "மக்கள் நம்பிக்கை"
            : "People's Trust"}
        </p>
      </div>
    </div>

  </div>

</section>
  

    <footer className="footer">

  {/* Left */}
  <div className="footer-left">
    <div className="footer-overlay">

      <h1>
        {language === "ta"
          ? "வாருங்கள் !"
          : "Come Join Us!"}
      </h1>

      <h2>
        {language === "ta"
          ? "தமிழகத்தை மாற்றுவோம் !!"
          : "Let's Transform Tamil Nadu!"}
      </h2>

    </div>
  </div>

  {/* Center */}
  <div className="footer-center">

    <div className="join-card">

      <div className="join-content">

        <FaUser className="join-icon" />

        &nbsp;&nbsp;

        <div className="join-text">

          <h3>
            {language === "ta"
              ? "உறுப்பினராக இணைவோம்"
              : "Join as a Member"}
          </h3>

          <p>
            {language === "ta"
              ? "தமிழக வெற்றிக்காக ஒன்றிணைவோம்"
              : "Let's Unite for Tamil Nadu's Victory"}
          </p>

        </div>

      </div>

    </div>

  </div>

  {/* Right */}
  <div className="footer-right">

    <div className="contact-card">

      <h3>
        {language === "ta"
          ? "தொடர்பு"
          : "Contact Us"}
      </h3>

      <div className="contact-item">
        <FaPhoneAlt />
        <span>+91 12345 67890</span>
      </div>

      <div className="contact-item">
        <FaEnvelope />
        <span>tvktrpmwest@gmail.com</span>
      </div>

      <div className="contact-item">
        <FaMapMarkerAlt />
        <span>
          {language === "ta"
            ? "திருப்பத்தூர், தமிழ்நாடு – 635601"
            : "Tirupathur, Tamil Nadu - 635601"}
        </span>
      </div>

      <div className="contact-item whatsapp">
        <FaWhatsapp />
        <span>
          {language === "ta"
            ? "WHATSAPP மூலம் தொடர்பு கொள்ளுங்கள்"
            : "Contact Us via WhatsApp"}
        </span>
      </div>

    </div>

  </div>

</footer>
   {showLogin && (
  <div
    className="modal-overlay"
    onClick={() => setShowLogin(false)}
  >
    <div
      className="register-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowLogin(false)}
      >
        <FaTimes />
      </button>

      <h2>உறுப்பினராக இணைவோம்</h2>

      <form>

        <div className="form-group">
          <label>பெயர்</label>
          <input
            type="text"
            placeholder="உங்கள் பெயரை உள்ளிடவும்"
          />
        </div>

        <div className="form-group">
          <label>மின்னஞ்சல்</label>
          <input
            type="email"
            placeholder="உங்கள் Email"
          />
        </div>

        <div className="form-group">
          <label>மொபைல் எண்</label>
          <input
            type="tel"
            placeholder="9876543210"
          />
        </div>

        <div className="form-group">
          <label>முகவரி</label>
          <textarea
            rows="2"
            placeholder="முழு முகவரி"
          ></textarea>
        </div>

        <div className="form-group">
          <label>ஊர் / இடம்</label>
          <input
            type="text"
            placeholder="உங்கள் ஊர்"
          />
        </div>

        <button
          type="submit"
          className="register-btn"
        >
          TVK-யில் இணையுங்கள்
        </button>

      </form>
    </div>
  </div>
)}

</>
  )
}

export default Homepage
