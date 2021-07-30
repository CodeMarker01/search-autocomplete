import React, { useEffect, useState } from "react";
import { useClickOutside } from "react-click-outside-hook";
import { IoClose, IoSearch } from "react-icons/io5";
import {
  CloseIcon,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from "./_searchBar";

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
  const [parentRef, isClickedOutside] = useClickOutside();
  console.log(parentRef, isClickedOutside);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  useEffect(() => {
    if (isClickedOutside) {
      handleCollapse();
    }
  }, [isClickedOutside]);

  //render
  return (
    <SearchBarContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      transition={containerTransition}
    >
      <SearchInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Search for TV shows..."
          onFocus={handleExpand}
          ref={parentRef}
        />
        <CloseIcon>
          <IoClose />
        </CloseIcon>
      </SearchInputContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
