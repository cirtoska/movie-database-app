const SearchButton = (props) => {
  return (
    <button
      {...props}
      className="h-11 text-white font-bold px-7 py-3 rounded-[8rem] bg-searchButton hover:text-tmdbDarkBlue inline-flex justify-center items-center"
    >
      Search
    </button>
  );
};

export default SearchButton;
