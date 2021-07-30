import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// import { useClickOutside } from "react-click-outside-hook";
import { IoClose, IoSearch } from "react-icons/io5";
import {
  useOnClickOutsideMe,
  useClickOutside,
} from "../../state/hooks/helpers";
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
  // const [parentRef, isClickedOutside] = useOnClickOutsideMe();
  // console.log(parentRef.current.value, isClickedOutside);
  // const parentRef = useRef();

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
    if (parentRef.current) {
      parentRef.current.value = "";
    }
  };

  // useOnClickOutsideMe(parentRef, handleCollapse);

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
    </SearchBarContainer>
  );
};

export default SearchBar;
