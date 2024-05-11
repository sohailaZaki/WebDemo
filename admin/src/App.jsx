import React, { useState } from 'react';
import NavbarComponent from './component/navbar/navbar';
import Admin from './pages/admin/admin'


const App = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategorySelect = (category) => {
      setSelectedCategory(category);
  }
    return (
        <div>
        <NavbarComponent onCategorySelect={handleCategorySelect} />
          <Admin/>
        </div>
)}
export default App;