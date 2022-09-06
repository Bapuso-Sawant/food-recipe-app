import React from "react";
const Header = props => {
    const {search, onInputChange, onSearchClick} = props;
    return <div className="jumbotron">
        <h1 className="display-1" >
            <i class="material-icons brand-icon">
                fastfood
            </i> Food Recipe</h1>
        <div class="input-group w-50 mx-auto">
            <input type="text"
                class="form-control"
                placeholder="Search Your Favourite Recipe"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={search}
                onChange={onInputChange} />
            <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
        </div>
    </div>
}
export default Header;