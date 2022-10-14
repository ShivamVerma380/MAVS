import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './Solution.css'
import Slider from './Slider';
import Feature from './FeatureCards';
import Card from './BenefitCard';
import AvailableImplemtation from './Avai-implemtation';
function Solution() {


   return (

      <>
         <div>
            <Slider />
         </div>


         <section>

            <p className='About-Sol'>
               An immersive visual experience is the result of the use of the latest large screen display technologies — for high-contrast, high resolution images and video.
               Well integrated AV technology improves the quality of internal and external events involving a large number of stakeholders.
            </p>


         </section>
         <h1 style={{ paddingLeft: "80px", paddingBottom: "20px", fontSize: "34px", fontFamily: "sans-serif" }}>
            FEARURES:
         </h1>


         <div>
            <Feature />
         </div>

         <h1 style={{ paddingLeft: "80px", paddingBottom: "20px", fontSize: "34px", fontFamily: "sans-serif" }}>
            BENIFITS:
         </h1>
         <div>
            <Card />
         </div>

         <AvailableImplemtation />


      </>


   )
}

export default Solution;