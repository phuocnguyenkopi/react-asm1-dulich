import React from "react";
import SearchListItem from "./SearchListItem"; // cac compoment list search
import "./SearchList.css";
import ObjectSearch from "../../../data/search.json";

const SearchList = () => {
  const searchListData = ObjectSearch;

  return (
    <div className="search__list">
      {searchListData.map((data) => {
        return <SearchListItem key={data.name} item={data} />;
      })}
    </div>
  );
};
export default SearchList;
