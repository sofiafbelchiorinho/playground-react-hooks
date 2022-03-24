import React from "react";

const Autocomplete = () => {
  let names = [
    "Adam",
    "Anna",
    "Anthony",
    "Bob",
    "Billy",
    "Carol",
    "Cathy",
    "Kevin",
    "Kyle",
    "Frank",
    "Fred",
  ];

  const [suggestions, setSuggestions] = React.useState([]);
  const [value, setValue] = React.useState();

  const onSetInputValue = (e, value) => {
    setValue(value);
  };

  const autocomplete = (event) => {
    // update input value
    const inputtedValue = event.target.value;
    setValue(inputtedValue);

    // if empty input, clear suggestions
    if (inputtedValue.length === 0) {
      setSuggestions([]);
      return;
    }

    let matches = [];
    // look for matches
    names.forEach((name) => {
      // gets a substring of result with the size of the inputtedValue, starting in the beggining
      const nameSubstring = name.substring(0, inputtedValue.length);

      if (name.match(new RegExp(inputtedValue, "gi"))) {
        // OR if (nameSubstring.toUpperCase() === inputtedValue.toUpperCase()) {
        matches.push(name);
        setSuggestions(matches);
      }
    });

    // no suggestions match inputtedValue
    if (matches.length === 0) {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <h3>Autocomplete</h3>
      <input onChange={(e) => autocomplete(e)} value={value}></input>
      <div>
        {suggestions.map((n, index) => (
          <p key={index} onClick={(e) => onSetInputValue(e, n)}>
            {n}
          </p>
        ))}
        {value && suggestions.length === 0 && <p>No suggestions..</p>}
      </div>
    </div>
  );
};

export default Autocomplete;
