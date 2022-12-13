import React from "react";
import "./DocumentTwoMore.css";
import CardOfDTM from "./CardOfDTM";
import CardAcademyDTM from "./CardAcademyDTM";

const DocumentaryTwoMore = () => {
  return (
    <>
      <div id="mainDivDocument">
        <div id="docVideo">
          <h1>AU DOCUMENTARY</h1>
          {/* <video height="auto" width="100%" controls>
            <source
              src="https://www.youtube.com/watch?v=4mEiXcTQpkA"
              type="video/mp4"
            />
          </video> */}
          <iframe
            width="1100"
            height="615"
            src="https://www.youtube.com/embed/JJAJyEnfAWQ?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div id="institutes">
          <h1>AU FACULTIES & INSTITUTES</h1>
          <CardOfDTM />
        </div>
        <div id="academy">
          <h1>AU DOCUMENTARY</h1>
          <CardAcademyDTM />
        </div>
      </div>
    </>
  );
};

export default DocumentaryTwoMore;
