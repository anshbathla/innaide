import React from 'react';

import styles from './BlockCard.module.css';


const BlockCard = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title1} >{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
// pages/index.js




const IndexPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '70vh' }} id="Resources">
       
   
      <h1 className="title text-center">RESOURCES</h1>
       <div style={{ display: 'flex', gap: '150px', justifyContent: 'center', width: '100%', marginTop:'30px' }}>
       <BlockCard 
          title="“one in four women globally over the age of 18 experience episodes of leaking urine involuntarily.”"
          description="National Association for Incontinence Statistics"
          imageUrl="/features/Research.jpg"
        />
        <BlockCard
          title="“After 6 months of EMS therapy to the pelvic floor muscles, nearly 73% of the examined patients reported an improvement in continence”"
          description="Maharaj Medical University"
          imageUrl="/features/8454.jpg"
        />
       
         </div>
      </div>
    
  );
};




export default IndexPage;