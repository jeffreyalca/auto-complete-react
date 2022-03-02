import React, { useState } from 'react';
import "./styles.css";
import countries from "../Countries";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
import SearchList from './SearchList';


function AutoComplete(props) {


    const [isVisible, setVisibility] = useState(false);
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const showSuggestion = () => setVisibility(true);
    const hideSuggestion = () => setVisibility(false);


    const handleChange = (e) => {
        const value = e.target.value;
        setInput(e.target.value);
        if (value.length > 0) {
            showSuggestion();
            const regex = new RegExp(`^${e.target.value}`, "i");
            setSuggestion(countries.sort().filter(term => regex.test(term)));
        }
        else {
            hideSuggestion();
            setSuggestion([]);
        }
    
    }
    const handleClear = () => {
        setInput("");
        setSuggestion([]);
        hideSuggestion();
    }

    return (

        <form className="auto-complete-wrapper">
            <div className="input-wrapper">
                <span><AiOutlineSearch /></span>
                <input
                    className="search-bar"
                    placeholder="Search"
                    onClick={() => showSuggestion()}
                    onChange={(e) => handleChange(e)}
                    value={input}>
                </input>
                <span onClick={()=> handleClear()}><MdClear /></span>
            </div>
            {isVisible &&
                <ul>
                    {suggestion.length ? (
                        suggestion.map((x, i) => (
                            <SearchList
                                key={i}
                                index={i}
                                hideSuggestion={hideSuggestion}
                                setInput={setInput}
                                search={x}
                            />
                        )))
                        : (<li></li>)
                    }

                </ul>}
        </form>
    )
}
export default AutoComplete;