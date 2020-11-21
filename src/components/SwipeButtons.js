import React from "react";
import { Close, Favorite, FlashOn, Replay, StarRate } from "@material-ui/icons";
import { Icon, IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__left">
        <Close fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__right">
        <Favorite fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__lightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
