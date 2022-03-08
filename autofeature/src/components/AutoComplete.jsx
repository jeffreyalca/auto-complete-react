import React, { useState, useCallback } from 'react';
import "./styles.css";
import countries from "../Countries";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
import SearchList from './SearchList';
import debounce from 'lodash.debounce';


function AutoComplete() {
    const [isVisible, setVisibility] = useState(false);
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const showSuggestion = () => setVisibility(true);
    const hideSuggestion = () => setVisibility(false);


    const debounceSearch = useCallback(
        debounce(query => {
            if (!query) return setSuggestion([])

            const regex = new RegExp(`^${query}`, "i");
            setSuggestion(countries.filter(term => regex.test(term)))
            console.log('test');
        }, 500), []
    )

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(e.target.value);
        debounceSearch(value);
    }

    const handleClear = () => {
        setInput("");
        setSuggestion([]);
        hideSuggestion();
    }

    return (
        <div className="auto-complete-wrapper">
            <div className="input-wrapper">
                <span><AiOutlineSearch /></span>
                <input
                    className="search-bar"
                    placeholder="Search"
                    onClick={showSuggestion}
                    onChange={(e) => handleChange(e)}
                    value={input}>
                </input>
                <span onClick={handleClear}><MdClear /></span>
            </div>

            {isVisible && input &&
                <ul>
                    {suggestion.map((x, i) => (
                        <SearchList
                            key={i}
                            index={i}
                            hideSuggestion={hideSuggestion}
                            setInput={setInput}
                            search={x}
                        />
                    ))}
                </ul>}
        </div>
    )
}
export default AutoComplete;