import NavBar from "../home/NavBar";
import Navfooter from "../home/navfooter";
import SearchList from "./SearchList/SearchList";
import SearchPopup from "./searchPopUp/SearchPopup";

const Search = () => {
  return (
    <div>
      <header className="bg-[#003580] py-5">
        <NavBar />
      </header>
      {/*  */}
      <section className="container flex justify-between py-10 items-start	">
        <SearchPopup />
        <SearchList />
      </section>
      {/*  */}
      <Navfooter />
    </div>
  );
};

export default Search;
