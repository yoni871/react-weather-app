import React, { useState, useEffect, useRef } from 'react'
import Today from './Today';

export default function Search() {
    const [city, setCity] = useState('Austin');
    const [input, setInput] = useState('');

    const handleSearch = () => {
        const trimmedInput = input.trim();
        if(trimmedInput && trimmedInput && trimmedInput.toLowerCase() !== city.toLowerCase()) {
            setCity(trimmedInput || 'Austin');
            setInput('');
        }
    };

    return (
        
        <div className="container">
            <div className="row">
            <div className="input-group rounded search">
                <input 
                    type="search"
                    className="form-control rounded search-input" 
                    placeholder="Search" 
                    aria-label="Search" 
                    aria-describedby="search-addon" 
                    value={input}
                    onChange = {(e) => setInput(e.target.value)}
                    />
                <span className="input-group-text border-0 search-icon-box" id="search-addon" onClick={handleSearch}>
                    <i className="fas fa-search search-icon"></i>
                </span>
            </div>
        </div>
        <div className="row">
            {city && city !== 'undefined'
             && <Today city={city} />}
             </div>
        </div>
    );
}
