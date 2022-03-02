import React from 'react';
import "./styles.css";


function SearchList(props) {

return (
    <li className="suggestion" onClick={() => {
        props.hideSuggestion();
        props.setInput(props.search);

    }}>{props.search}</li>
)
}

export default SearchList;