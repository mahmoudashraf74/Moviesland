import React from "react";

const SearchBox = (props) => {
    return (
        <div className="col col-sm-2">
            <input
                className="form-control"
                placeholder="Search Movie"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
            ></input>
        </div>
    );
};
export default SearchBox;
