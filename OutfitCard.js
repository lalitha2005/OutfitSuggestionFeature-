import React, { useState } from 'react';

function OutfitCard({ outfit }) {
  const [showDetails, setShowDetails] = useState(false);

  // Toggle function to show/hide outfit details
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      margin: '16px',
      width: '200px',
      textAlign: 'center'
    }}>
      <h3>{outfit.name}</h3>
      <p>Curated by: {outfit.influencer}</p>
      <p>Budget: ${outfit.budget}</p>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'View Outfit'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '10px' }}>
          {outfit.items.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} />
              <p>{item.type}: {item.name} - ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OutfitCard;
