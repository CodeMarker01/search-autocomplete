import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// import { useClickOutside } from "react-click-outside-hook";
import { IoClose, IoSearch } from "react-icons/io5";
import {
  useOnClickOutsideMe,
  useClickOutside,
  useDebounceYoutube,
  useDebounce,
} from "../../state/hooks/helpers";
import {
  CloseIcon,
  LineSeperator,
  LoadingWrapper,
  SearchBarContainer,
  SearchContent,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from "./_searchBar";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

const containerVariants = {
  expanded: {
    height: "30em",
  },
  collapsed: {
    height: "3.8em",
  },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

const SearchBar = () => {
  //states
  const [isExpanded, setExpanded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();

  const [parentRef, isClickedOutside] = useClickOutside();
  // const [parentRef, isClickedOutside] = useOnClickOutsideMe();
  // console.log(parentRef.current.value, isClickedOutside);
  // const parentRef = useRef();

  //todo useDebounce
  const debouncedSearchTerm = useDebounce(searchQuery, 1500);
  console.log("debounceSearchterm", debouncedSearchTerm);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    // if (e.target.value.trim() === "") setNoTvShows(false);

    setSearchQuery(e.target.value);
  };

  // useOnClickOutsideMe(parentRef, handleCollapse);

  useEffect(() => {
    if (isClickedOutside) {
      handleCollapse();
    }
  }, [isClickedOutside]);

  useEffect(() => {
    if (!debouncedSearchTerm || debouncedSearchTerm.trim() === "") return;

    setLoading(true);

    const URL = prepareSearchQuery(debouncedSearchTerm);
    // promise with then
    // const response2 = axios
    //   .get(URL)
    //   .then((res) => console.log("Response from useEffect: ", res.data))
    //   .catch((err) => console.log("Error: ", err));

    (async () => {
      const res = await axios.get(URL);
      console.log("Response from useEff async", res.data);
    })();
  }, [debouncedSearchTerm]);

  const prepareSearchQuery = (query) => {
    const url = `http://api.tvmaze.com/search/shows?q=${query}`;
    // console.log(url);
    console.log(encodeURI(url));
    //* fix bad request, ex: space -> %20
    return encodeURI(url);
  };
  //******************************************************* */
  // callback to fetch api with useDebounceCallback
  // const searchTvShow = async () => {
  //   if (!searchQuery || searchQuery.trim() === "") return;

  //   setLoading(true);

  //   const URL = prepareSearchQuery(searchQuery);
  //   const response = await axios
  //     .get(URL)
  //     .catch((err) => console.log("Error: ", err));

  //   if (response) {
  //     console.log("Response: ", response.data);
  //   }
  // };

  // console.log("value", searchQuery);
  // useDebounceYoutube(searchQuery, 1000, searchTvShow);
  //******************************************************* */

  //render
  return (
    <SearchBarContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <SearchInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Search for TV shows..."
          onFocus={handleExpand}
          ref={inputRef}
          value={searchQuery}
          onChange={handleChange}
        />
        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              onClick={handleCollapse}
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputContainer>
      {isExpanded && <LineSeperator />}
      {isExpanded && (
        <SearchContent>
          <LoadingWrapper>
            <MoonLoader loading />
          </LoadingWrapper>
        </SearchContent>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
