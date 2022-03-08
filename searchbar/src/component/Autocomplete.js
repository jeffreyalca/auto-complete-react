import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

export default function Autocomplete({ suggestions }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSuggestions(true);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //     setShowSuggestions(false);
  //   };
  // }, [input]);

  const onChange = (e) => {
    const userInput = e.target.value;

    // filters the list that contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const debouncedChangedHandler = useCallback(debounce(onChange, 1000), []);

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <em>Not Found</em>
      </div>
    );
  };

  return (
    <>
      <input type="text" onChange={debouncedChangedHandler} />
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
}
