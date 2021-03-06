import React, {useContext} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";

import Container from "../../Layout/Container/Container.component";

import './StudiesAndProjects.style.css';
import '../../Layout/About.style.css'


const StudiesAndProjects = () => {
  const themeContext =  useContext(ThemeContext);
  const {darkMode} = themeContext;

  return (
      <div className={`${darkMode ? 'background-dark' : 'background-light'}`}>
        <div className='container-fluid pt-5 pb-5'>
          <div className='container'>
            <div className='d-flex justify-content-center'>
            </div>
              <h1 className='display-5 pt-3 pb-3 header'>Studies <span style={{color:'#ED2939'}}>&</span> Projects</h1>
            </div>
               <div className={'container pt-3 pb-3'}>
                 <div className={'row'}>
                   <div className={'col-lg-4 mb-4'}>
                     <Container className={`CRK-container ${darkMode && 'container-dark'}`}>
                       <div className={'pb-2 pt-3 pr-2 pl-2'}>
                         <h5 className={'text-center header'}>Software Development</h5>
                         <ul>
                           <li>Weather Data Analyser with <span className='badge' style={{backgroundColor:'rgb(42,93,148)',color:'#FFF'}}>Python</span></li>
                           <li>Android Applications with <span className='badge' style={{backgroundColor:'rgb(236,122,40)',color:'#FFF'}}>Kotlin</span></li>
                           <li>Full-stack Web applications with <span className='badge' style={{backgroundColor:'rgb(84,210,249)', color:'rgb(30,33,39)'}}>React</span> and <span className='badge' style={{backgroundColor:'rgb(54,117,47)',color:'#FFF'}}>Node.js</span></li>
                           <li>Small projects with pure <span className='badge' style={{backgroundColor:'rgb(244,219,26)', color:'#000'}}>JavaScript</span></li>
                         </ul>
                       </div>
                     </Container>
                   </div>
                   <div className={'col-lg-4 mb-4'}>
                     <Container className={`CRK-container ${darkMode && 'container-dark'}`}>
                       <div className={'pb-2 pt-3 pr-2 pl-2'}>
                         <h5 className={'text-center header'}>Networking</h5>
                         <ul>
                           <li><span className={'badge'} style={{backgroundColor:'rgb(22,174,229)',color:'#FFF'}}>Cisco</span> routers and switches configuration</li>
                           <li>Network configuration</li>
                         </ul>
                       </div>
                     </Container>
                   </div>
                   <div className={'col-lg-4 mb-4'}>
                     <Container className={`CRK-container ${darkMode && 'container-dark'}`}>
                       <div className={'pb-2 pt-3 pr-2 pl-2'}>
                         <h5 className={'text-center header'}>Electronics & IoT</h5>
                         <ul>
                           <li>Home Climate Monitoring and Surveillance Camera Projects with <span className='badge' style={{backgroundColor:'rgb(182,0,58)', color:'#FFF'}}>Raspberry Pi</span> and <span className='badge' style={{backgroundColor:'rgb(42,93,148)',color:'#FFF'}}>Python</span></li>
                           <li> Small Christmas Lights project with <span className='badge' style={{backgroundColor:'rgb(17,134,139)',color:'#FFF'}}>Arduino</span></li>
                         </ul>
                       </div>
                     </Container>
                   </div>
                 </div>
              </div>
          <div className='container pt-3 pb-3'>
          </div>
        </div>
    </div>
  );
};

export default StudiesAndProjects;


// <div className={`${darkMode ? 'background-dark' : 'background-light'}`}>
//   <div className='container-fluid pt-5 pb-5'>
//     <div className='container'>
//       <div className='d-flex justify-content-center'>
//       </div><h1 className='display-5 pt-3 pb-3'>Studies & Projects:</h1></div>
//     <div className='container pt-3 pb-3'>
//       <div className='row'>
//         <div className='col-lg-4 mb-3'>
//           <Container className={`CRK-container ${darkMode && 'container-dark'}`}>
//             <div className={'pb-2 pt-3 pr-2 pl-2'}>
//               <h5 className={'text-center'}>Software Development</h5>
//               <ul>
//                 <li>Weather Data Analyser with <span className='badge' style={{backgroundColor:'rgb(42,93,148)',color:'#FFF'}}>Python</span></li>
//                 <li>Android Applications with <span className='badge' style={{backgroundColor:'rgb(236,122,40)',color:'#FFF'}}>Kotlin</span></li>
//                 <li>Full-stack Web applications with <span className='badge' style={{backgroundColor:'rgb(84,210,249)', color:'rgb(30,33,39)'}}>React</span> and <span className='badge' style={{backgroundColor:'rgb(54,117,47)',color:'#FFF'}}>Node.js</span></li>
//                 <li>Small projects with pure <span className='badge' style={{backgroundColor:'rgb(244,219,26)', color:'#000'}}>JavaScript</span></li>
//               </ul>
//             </div>
//           </Container>
//         </div>
//         <div className='col-lg-4 mb-3'>
//           <Container className={`CRK-container ${darkMode && 'container-dark'}`}>
//             <div className={'pb-2 pt-3 pr-2 pl-2'}>
//               <h5 className={'text-center'}>Networking</h5>
//               <ul>
//                 <li><span className={'badge'} style={{backgroundColor:'rgb(22,174,229)',color:'#FFF'}}>Cisco</span> routers and switches configuration</li>
//                 <li>Network configuration</li>
//               </ul>
//             </div>
//           </Container>
//         </div>
//         <div className='col-lg-4 mb-3'>
//           <Container className={`CRK-container ${darkMode && 'container-dark'}`}>
//             <div className={'pb-2 pt-3 pr-2 pl-2'}>
//               <h5 className={'text-center'}>Electronics & IoT</h5>
//               <ul>
//                 <li>Home Climate Monitoring with <span className='badge' style={{backgroundColor:'rgb(182,0,58)', color:'#FFF'}}>Raspberry Pi</span> and <span className='badge' style={{backgroundColor:'rgb(42,93,148)',color:'#FFF'}}>Python</span></li>
//                 <li>Surveillance Camera Project with <span className='badge' style={{backgroundColor:'rgb(182,0,58)',color:'#FFF'}}>Raspberry Pi</span></li>
//                 <li> Small Christmas Lights project with <span className='badge' style={{backgroundColor:'rgb(17,134,139)',color:'#FFF'}}>Arduino</span></li>
//               </ul>
//             </div>
//           </Container>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


// <span style={{color:'#ED2939'}}>&</span>