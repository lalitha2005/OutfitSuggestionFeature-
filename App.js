import React, { useState } from 'react';
import outfits from './outfits'; // Import our mock data
import OutfitCard from './components/OutfitCard'; // We'll create this next

function App() {
  // State for the budget filter
  const [budgetFilter, setBudgetFilter] = useState(null);

  // Function to handle changes in the budget filter dropdown
  const handleFilterChange = (e) => {
    setBudgetFilter(Number(e.target.value)); // Update budget filter
  };

  // Filter outfits based on the selected budget
  const filteredOutfits = outfits.filter(outfit =>
    budgetFilter ? outfit.budget <= budgetFilter : true
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Outfit Suggestions</h1>

      {/* Budget Filter Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <label>Filter by budget: </label>
        <select onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="30">Under $30</option>
          <option value="50">Under $50</option>
          <option value="100">Under $100</option>
          <option value="200">Under $200</option>
        </select>
      </div>

      {/* Display filtered outfits */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredOutfits.map(outfit => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </div>
  );
}

export default App;
