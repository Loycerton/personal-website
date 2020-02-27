import React, {useContext} from "react";
import ContactLink from "./ContactLink";
import { Link } from "react-router-dom";
import ThemeContext from '../../../../context/theme/ThemeContext'

const Contacts = () => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

  return (
      <div style={darkMode ? {backgroundColor:'#303030'} : {backgroundColor:'#F0F0F0'}}>
        <div className='d-flex justify-content-center text-white pt-5 pb-1'>
          <h4 className={'text-center'} style={darkMode ? {color:"#F0F0F0"} : {color:"#303030"}}>Contact me</h4>
        </div>
        <div className='d-flex justify-content-center pb-5'>
          <div className='container text-center'>
            <li className='mb-2' style={{ display: "inline-block" }}>
                <ContactLink icon='Github' link={"https://github.com/CrazyRedKitten"} />
            </li>
            {/*<li className='mb-2' style={{ display: "inline-block" }}>*/}
            {/*  <ContactLink icon='Instagram' link={"https://www.instagram.com/crazyredkitten/"}/>*/}
            {/*</li>*/}
            {/*TODO Fix instagram logo error*/}
              <button className={ darkMode ? 'ContactLink-Dark' : 'ContactLink-Light'}>
                  <a  href={'https://www.instagram.com/crazyredkitten'} target='blank'>
                      <div style={{width:'2rem', height:'2rem'}}>
                          <svg  height={'100%'} width={'100%'}  className={darkMode ? 'ContactLink-Dark-Image' : 'ContactLink-Light-Image'}  viewBox={'0 0 504 504'}>
                              <g>
                                  <path d="M251.921,0.159c-68.418,0 -76.997,0.29 -103.867,1.516c-26.814,1.224 -45.127,5.482 -61.152,11.71c-16.566,6.438 -30.615,15.052 -44.62,29.057c-14.005,14.005 -22.619,28.054 -29.057,44.62c-6.228,16.024 -10.486,34.337 -11.71,61.151c-1.226,26.87 -1.515,35.449 -1.515,103.867c0,68.417 0.289,76.996 1.515,103.866c1.224,26.814 5.482,45.127 11.71,61.151c6.438,16.566 15.052,30.615 29.057,44.621c14.005,14.005 28.054,22.619 44.62,29.057c16.025,6.227 34.338,10.486 61.152,11.709c26.87,1.226 35.449,1.516 103.867,1.516c68.417,0 76.996,-0.29 103.866,-1.516c26.814,-1.223 45.127,-5.482 61.151,-11.709c16.566,-6.438 30.615,-15.052 44.621,-29.057c14.005,-14.006 22.619,-28.055 29.057,-44.621c6.227,-16.024 10.486,-34.337 11.709,-61.151c1.226,-26.87 1.516,-35.449 1.516,-103.866c0,-68.418 -0.29,-76.997 -1.516,-103.867c-1.223,-26.814 -5.482,-45.127 -11.709,-61.151c-6.438,-16.566 -15.052,-30.615 -29.057,-44.62c-14.006,-14.005 -28.055,-22.619 -44.621,-29.057c-16.024,-6.228 -34.337,-10.486 -61.151,-11.71c-26.87,-1.226 -35.449,-1.516 -103.866,-1.516Zm0,45.392c67.265,0 75.233,0.256 101.797,1.468c24.562,1.121 37.901,5.225 46.778,8.674c11.759,4.57 20.151,10.03 28.966,18.845c8.816,8.815 14.275,17.208 18.845,28.966c3.45,8.877 7.554,22.216 8.674,46.778c1.212,26.564 1.469,34.532 1.469,101.798c0,67.265 -0.257,75.233 -1.469,101.797c-1.12,24.562 -5.224,37.901 -8.674,46.778c-4.57,11.759 -10.029,20.151 -18.845,28.966c-8.815,8.816 -17.207,14.275 -28.966,18.845c-8.877,3.45 -22.216,7.554 -46.778,8.674c-26.56,1.212 -34.527,1.469 -101.797,1.469c-67.271,0 -75.237,-0.257 -101.798,-1.469c-24.562,-1.12 -37.901,-5.224 -46.778,-8.674c-11.759,-4.57 -20.151,-10.029 -28.967,-18.845c-8.815,-8.815 -14.275,-17.207 -18.844,-28.966c-3.45,-8.877 -7.554,-22.216 -8.675,-46.778c-1.212,-26.564 -1.468,-34.532 -1.468,-101.797c0,-67.266 0.256,-75.234 1.468,-101.798c1.121,-24.562 5.225,-37.901 8.675,-46.778c4.569,-11.758 10.029,-20.151 18.844,-28.966c8.816,-8.815 17.208,-14.275 28.967,-18.845c8.877,-3.449 22.216,-7.553 46.778,-8.674c26.564,-1.212 34.532,-1.468 101.798,-1.468Z"/>
                                  <path d="M251.921,336.053c-46.378,0 -83.974,-37.596 -83.974,-83.973c0,-46.378 37.596,-83.974 83.974,-83.974c46.377,0 83.973,37.596 83.973,83.974c0,46.377 -37.596,83.973 -83.973,83.973Zm0,-213.338c-71.447,0 -129.365,57.918 -129.365,129.365c0,71.446 57.918,129.364 129.365,129.364c71.446,0 129.364,-57.918 129.364,-129.364c0,-71.447 -57.918,-129.365 -129.364,-129.365Z"/>
                                  <path d="M416.627,117.604c0,16.696 -13.535,30.23 -30.231,30.23c-16.695,0 -30.23,-13.534 -30.23,-30.23c0,-16.696 13.535,-30.23 30.23,-30.23c16.696,0 30.231,13.534 30.231,30.23Z"/>
                              </g>
                          </svg>
                      </div>
                  </a>
              </button>
            <li className='mb-2' style={{ display: "inline-block" }}>
                <ContactLink icon='Snapchat' link={"https://www.snapchat.com/add/crazyredkitten"}/>
            </li>
            <li className='mb-2' style={{ display: "inline-block" }}>
              <ContactLink icon='Twitter' link={"https://twitter.com/crazyredkitten"}/>
            </li>
            <li className='mb-2' style={{ display: "inline-block" }}>
              <ContactLink icon='YouTube' link={"https://www.youtube.com/channel/UCJYmru-hgW4CYYuoyMmWOnw"}/>
            </li>
            <li className='mb-2' style={{ display: "inline-block" }}>
              <ContactLink icon='VK' link={"https://vk.com/crazyredkitten"}/>
            </li>
            <li className='mb-2' style={{ display: "inline-block" }}>
              <ContactLink icon='Facebook' link={"https://www.facebook.com/crazyredkitten"}/>
            </li>
            <li className='mb-2' style={{ display: "inline-block" }}>
              <ContactLink icon='LinkedIn' link={"https://www.linkedin.com/in/crazyredkitten/"}/>
            </li>
            {/*<li className='mb-2' style={{ display: "inline-block" }}>*/}
            {/*  <ContactLink icon='Email' link={"/Contact"}/>*/}
            {/*</li>*/}
            {/* TODO Add Link component to the ContactLink */}
              <Link to={'/contact'}>
              <button className={ darkMode ? 'ContactLink-Dark' : 'ContactLink-Light'}>
                  <div style={{width:'2rem', height:'2rem'}}>
                      <svg  height={'100%'} width={'100%'}  className={darkMode ? 'ContactLink-Dark-Image' : 'ContactLink-Light-Image'} viewBox={'0 0 500 500'}>
                          <path d='M34.054 437.99 C18.135 438 5.223 425.104 5.213 409.184 L5.056 153.826 250.137 286.421 495.055 152.792 495.213 408.883 C495.223 424.802 482.325 437.714 466.407 437.723 Z M250.177 236.205 L5.042 132.307 5.018 92.126 C5.008 76.207 17.904 63.294 33.823 63.284 L466.176 63.018 C482.094 63.008 495.008 75.905 495.018 91.824 L495.043 132.751 Z'/>
                      </svg>
                  </div>
              </button>
              </Link>
          </div>
        </div>
      </div>
  );
};

export default Contacts;
