import React from 'react'
import Card from './modules/Card'

import styles from './styles/SearchBar.module.sass'

const SearchSuggestions = ({ closeSuggestions }) => {
    return (
        <Card>
            <div className={styles.searchSuggestionsOverlay} onClick={closeSuggestions}></div>
            <div className={styles.searchBarSuggestionsBox}>
                <div className={styles.suggestionsBar}>
                    <span>Search Results</span>
                    <span className="btn btnLink">See All Results</span>
                </div>
                <ul className={styles.suggestionsList}>

                </ul>
            </div>    
        </Card>
    )
}

export default SearchSuggestions
