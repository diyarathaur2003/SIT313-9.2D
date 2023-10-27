// import React from 'react';

// function Th(props) {
//   return (
//     <div className="thank-you-page">
//       <h1>Thank You for Subscribing!</h1>
//       <p>We appreciate your subscription.</p>
//     </div>
//   );
// }

// export default Th;
import React from 'react';
import './ThankYou.css'; // Create a separate CSS file for your styles

function ThankYou(props) {
  return (
    <div className="thank-you-overlay">
      <div className="thank-you-modal">
        <h1 className="thank-you-heading">Thank You for Subscribing!</h1>
        <p className="thank-you-message">We appreciate your subscription.</p>
      </div>
    </div>
  );
}

export default ThankYou;



