// ModalA.jsx
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

const ModalB = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [nonFilteredContacts, setNonFilteredContacts] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);

  // API call function
  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://contact.mediusware.com/api/contacts/');
      console.log(response.data.results[0].id);
      setNonFilteredContacts(response.data.results); // Assuming the API response is an array of contacts
      setFilteredContacts(response.data.results);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []); 

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    //console.log(e.target.value);
    filterResults(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Make API call with the search value when Enter key is pressed
      fetchContacts();
    }
  };

  // const filterResults = (value) => {
  //   //alert(onlyEven);
  //   const filteredInventory = nonFilteredContacts.filter(item => {
  //     // Convert both item names and search value to strings
  //     const itemName = String(item.id);
  //     const searchInput = String(value);
  //     if(onlyEven = true) return itemName.includes(searchInput) && 2;
  //     else return itemName.includes(searchInput);
  //   });
  //   setFilteredContacts(filteredInventory);
  // };

  const filterResults = (value) => {
    const filteredInventory = nonFilteredContacts.filter(item => {
      const itemName = String(item.id);
      const searchInput = String(value);
  
      if (!onlyEven) {
        // If checkbox is checked, filter only even IDs
        return item.id % 2 === 0 && itemName.includes(searchInput);
      } else {
        // If checkbox is not checked, filter all IDs
        return itemName.includes(searchInput);
      }
    });
  
    setFilteredContacts(filteredInventory);
  };

  const handleCheckboxChange = () => {
    setOnlyEven(!onlyEven);
    filterResults(searchValue);
  };
  

  return (
    <div>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <Link to="/modalA" className="btn btn-lg btn-outline-primary" >All Contact</Link>
        <Link to="/modalB" className="btn btn-lg btn-outline-warning" >US Contact</Link>
        <Link to="/problem-2" className="btn btn-lg btn-outline-primary" >Close</Link>
      </div>
      
      <div style={{ textAlign: 'center', backgroundColor: '#ff7f50'}} className="text-white w-full">
        <h4 className="text-center text-uppercase mb-5 pt-5">ModalA</h4>

        <input
          type="text"
          placeholder="Search contacts"
          value={searchValue}
          onChange={handleSearchChange}
          onKeyPress={handleSearchKeyPress}
          className="mb-5"
        />

        <label>
          <input
            type="checkbox"
            checked={onlyEven}
            onChange={handleCheckboxChange}
          />
          Only even IDs
        </label>
      
        {filteredContacts && filteredContacts.length > 0 && (
          <div>
            {/* Render your filteredContacts here */}
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="mb-5">
                <p>ID: {contact.id}</p>
                <p>Phone: {contact.phone}</p>
                <p>Country: {contact.country.name}</p>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalB;
