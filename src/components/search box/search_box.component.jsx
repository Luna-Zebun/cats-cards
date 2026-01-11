import "./search_box.style.css"
const SearchBox = ({ChangeHandler}) => {
    return <input className="search-box-container" type="search" onChange={ChangeHandler} />
};
export default SearchBox;