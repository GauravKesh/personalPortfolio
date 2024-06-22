import React from "react";
import "../style/loading.css"
  import ReactGA from "react-ga";
export default function Loading() {

  const TRACKING_ID = "G-J43TE65YWB";
    ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <div className="loadanimation"></div>
      <div id="load">
        <div>E</div>
        <div>M</div>
        <div>O</div>
        <div>C</div>
        <div>L</div>
        <div>E</div>
        <div>W</div>
      </div>
    </>
  );
}
