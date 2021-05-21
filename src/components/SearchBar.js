import React, { useState } from 'react'

import classes from './styles/SearchBar.module.sass'

import SearchSuggestions from './SearchSuggestions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ showSuggestions }) => {
    const [isSearchSuggestions, setSearchSuggestions] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const searchFieldSuggestionsIfNotEmpty = (e) => {
        if (searchInput !== "") {
            setSearchSuggestions(true)
        }
    }
    const handleGetSearchValue = (e) => {
        setSearchInput(e.target.value);
        searchFieldSuggestionsIfNotEmpty();
    }

    const handleKeyDownSearchBar = (e) => {
        if(e.key === 'Enter'){
            handleToggleSearchBar();
        }
    }

    const handleToggleSearchBar = () => setSearchSuggestions(!isSearchSuggestions);
    const handleSubmitForm = (e) => e.preventDefault();

    return (
        <div className={classes.search}>
            <form className={classes.searchForm} onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    onChange={handleGetSearchValue}
                    name="q"
                    className={classes.searchInput}
                    onFocus={searchFieldSuggestionsIfNotEmpty}
                    onKeyDown={handleKeyDownSearchBar}
                    autoComplete="off"
                />
                <button type="submit" className={classes.searchBtn}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            {showSuggestions ? isSearchSuggestions && <SearchSuggestions closeSuggestions={handleToggleSearchBar} /> : null}
        </div>
    );
};

export default SearchBar;
