import React from "react";
import { Name, Rating, Thumbnail, TvShowContainer } from "./_tvShow";

const TvShow = ({ thumbnailSrc, name, rating }) => {
  return (
    <TvShowContainer>
      <Thumbnail>
        <img src={thumbnailSrc} alt={name} />
      </Thumbnail>
      <Name>{name}</Name>
      <Rating>{rating || "N/A"}</Rating>
    </TvShowContainer>
  );
};

export default TvShow;
