import React, { useState, useRef } from 'react';

// ============================
// Debounce Component
// ============================
//Create a simple search box component that will take in a list of users and provide suggestions as the user types. 
// Add debounce of 300 milliseconds before triggering the suggestions.

//The suggestions should only be shown when the user types something in the input.
//When the user selects one of the suggestions, it should populate the input box.

const Debounce = ({ users }) => {
  // ----------------------------
  // 1. State and References
  // ----------------------------
  const [query, setQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceRef = useRef(null);

  // ----------------------------
  // 2. Handle Input Change
  // ----------------------------
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowDropdown(true);

    // Debounce previous input
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Delay the filtering by 300ms
    debounceRef.current = setTimeout(() => {
      if (value.trim() === '') {
        setFilteredUsers([]);
        return;
      }

      const lowerQuery = value.toLowerCase();
      const matches = users.filter((user) =>
        user.toLowerCase().includes(lowerQuery)
      );

      setFilteredUsers(matches);
    }, 300);
  };

  // ----------------------------
  // 3. Handle User Selection
  // ----------------------------
  const handleSelect = (user) => {
    setQuery(user);
    setShowDropdown(false);
  };

  // ----------------------------
  // 4. Render Component
  // ----------------------------
  return (

    <div style={{ position: 'relative', width: '250px' }}>
        <h2>Debounce Search</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={handleInputChange}
        style={{ width: '100%', padding: '8px' }}
      />

      {showDropdown && filteredUsers.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: '5px',
            border: '1px solid #ccc',
            position: 'absolute',
            top: '100%',
            color: '#333',
            width: '100%',
            background: 'white',
            zIndex: 1,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {filteredUsers.map((user) => (
            <li
              key={user}
              onClick={() => handleSelect(user)}
              style={{
                padding: '5px 8px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
            >
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Debounce;
