import './App.css';
import {useState} from 'react'
import github from './images/github.png';
import instagram from './images/instagram.png';
import vk from './images/vk.png';
import VectorSwell from './images/VectorSwell.png';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import pic3 from './images/pic3.png';
import pic5 from './images/pic5.png';
import pic7 from './images/pic7.png';
import pic8 from './images/pic8.png';
import pic9 from './images/pic9.png';
import pic71 from './images/pic7-1.png';
import pic81 from './images/pic8-1.png';
import pic91 from './images/pic9-1.png';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    message: ''
})

  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  const openMenu = () => {
      const doc = document
      const menuOpen = doc.querySelector('.menu')
      const menuClose = doc.querySelector('.close')
      const overlay = doc.querySelector('.overlay')

      menuOpen.addEventListener('click', () => {
        overlay.classList.add('overlay--active')
    })

    menuClose.addEventListener('click', () => {
      overlay.classList.remove('overlay--active')
    })
  }

  const sendMessageHandler = () => {
    async function fetchData() {
        const data = await axios.post('https://damp-retreat-00203.herokuapp.com/api/send/message', {...form})
        alert('Message sent.')
    }
    fetchData()
  }

  return (
    <div className="App">
    <main>
        <header>
          <div className="header-wrapper">
            <img src={VectorSwell} className="header-logo" />
            <nav>
              <ul className="nav-links">
                <li><a href="#">Why swell</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </nav>
            <span className="header-start-free">Start free trial</span>
            <a href="#"><button className="header-btn">Log in</button></a>
            <button className="menu header-btn" onClick={openMenu}>Menu</button>
          </div>
        </header>
        <div className="overlay">
          <a className="close">×</a>
          <div className="overlay__content">
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
          </div>
        </div>
        <div className="main-container">
          <div className="main-wrapper">
            <p className="main-logo">Sell Creatively</p>
            <p className="main-text">Swell is the most powerful <span className="main-link-words">headless ecommerce platform</span><br /> for modern brand, startups, and agencies.</p>
            <div className="main-input">
              <input className="main-input-input" name='email' onChange = {changeHandler} placeholder="Enter your email" />
              <button className="main-input-btn" onClick={sendMessageHandler}>Start free trial</button>
            </div>
            <img src={pic1} className="main-pic" />
            <img src={pic2} className="main-pic" />
            <div className="float-container">
              <p className="FC-title">Made for Growth</p>
              <p className="FC-text">
                Until now, brands looking to stand out have been using a <br /> 
                patchwork of apps for legacy platforms or building from <br />
                scratch. Swell enables you to create sophisticated <br />
                solutions faster, without having to think about infrastructure <br />
                or maintenance.
              </p>
              <p className="FC-links"><span className="main-link-words">Read the case studies</span></p>
            </div>
            <img src={pic3} className="main-pic " />
            <div className="float-container left">
              <p className="FC-title">Commerce without compromise</p>
              <p className="FC-text">
                Free your storefront from your backend. With headless
                <br /> themes and extensive options for modelling products, you
                <br /> can offer unique customer experiences anywhere.
              </p>
              <p className="FC-links"><span className="main-link-words">Tell me more</span></p>
            </div>
            <p className="main-logo-2">More of what you need,<br /> out of the box</p>
            <div className="section-wrapper">
              <div>
                <img src={pic5} className="section-pic" /><p className="section-text">Native subscriptions</p>
              </div>
              <div>
                <img src={pic5} className="section-pic" /><p className="section-text">1,000+ variants per product</p>
              </div>
              <div>
                <img src={pic5} className="section-pic" /><p className="section-text">Custom content models</p>
              </div>
              <div>
                <img src={pic5} className="section-pic" /><p className="section-text">B2B wholesale features</p>
              </div>
              <div>
                <img src={pic5} className="section-pic" /><p className="section-text">Checkout API</p>
              </div>
              <p className="section-link">Explore all features</p>
            </div>
            <p className="main-logo-3">Merchants on the move</p>
            <div className="main inline">
              <div className="left-block">
                <img src={pic7} className="main-pic left-block-pic" /><br />
                <img src={pic71} className="main-pic icon" />
                <p className="left-block-text">A modern and elegant website, designed by BCMH</p>
                <p style={{padding: '21px'}}><span className="left-block-text-link">Soon the Sun</span></p>
              </div>
              <div className="content">
                <img src={pic81} className="main-pic content-block-icon" />
                <p className="content-text">“Swell has been like a spring for Spinn, allowing us to efficiently grow and scale.”</p>
                <p style={{padding: '21px'}}><span className="main-link-words left-block-text-link">Roderick de Rode<br /> Spinn Coffee</span></p>
                <img src={pic8} className="main-pic content-block-pic" />
              </div>
              <div className="right-block">
                <img src={pic9} className="main-pic right-block-pic" />
                <img src={pic91} className="main-pic right-block-icon" />
                <p className="content-text">“Magento is expensive. Shopify is limiting. Moltin isn’t there yet. There are a lot of options but none of them are great.”</p>
                <p style={{padding: '21px'}}><span className="main-link-words left-block-text-link">Ryan Bonifacino<br /> Great Heights</span></p>
              </div>
            </div>
            <div className="footer-wrapper inline" style={{paddingTop: '100px'}}>
              <div className="github">
                <a href="#"><img height={50} width={50} src={github} /></a>
              </div>
              <div className="instagram">
                <a href="#"><img height={50} width={50} src={instagram} /></a>
              </div>
              <div className="vk">
                <a href="#"><img height={50} width={50} src={vk} /></a>
              </div>
            </div>
          </div>
          <footer style={{paddingTop: '70px'}}>
            <div className="header-wrapper footer-text">
              <p className="header-logo">© 2021 Swell. Made worldwide.</p>
              <nav>
                <ul className="nav-links">
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms of service</a></li>
                </ul>
              </nav>
              <span className="header-start-free">All Systems Operational</span>
            </div>
          </footer>
        </div>
      </main>
      <script type = 'text/javascript' src='script.js'></script>
    </div>
  );
}

export default App;
