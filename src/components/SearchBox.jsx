import { useState } from "react";

function SearchBox({ searchText }) {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(search);
    setSearch("");
  };
  return (
    <div className="input-box">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search.."
          required
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
