import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form">
        <input
          type="search"
          required
          placeholder="Search for a city..."
          className="search-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
