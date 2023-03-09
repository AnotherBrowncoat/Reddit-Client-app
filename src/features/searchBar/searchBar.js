// library imports: 
import React from 'react';
import { useNavigate } from 'react-router-dom';

// my elements imports:


// styling imports:
import './searchBar.css';

export const SearchBar = () => {
    const navigate = useNavigate();
    // set up an empty string to be populated by our search input:
    let searchTermString = "";

    // json data will use whitespace between terms, but we need to use "+" instead:
    const handleInput = (e) => {
        const searchTermEntered = e.target.value;
        searchTermString = searchTermEntered.replaceAll(" ", "+");
    };

    // when search is executed, we want to navigate to our reddit url with the search query appended:
    const executeSearch = () => {
        navigate(`/${searchTermString}`);
    };

    // rendering the searchbar:
    return (
        <div className="searchBar">
            <input
                id="searchBar"
                type="text"
                name="search"
                placeholder="Search for posts or comments"
                onChange={handleInput}
                onSubmit={executeSearch}
            >
            </input>
            <button className="searchButton" onClick={executeSearch} type="submit">Search</button>
        </div>
    );

};

export default SearchBar;