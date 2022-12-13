import "./BelowSliderPage.css";

const BelowSliderPage = () => {
  return (
    <>
      <div id="mainDiv">
        <div id="latestNews">
          <h1>LATEST</h1>
          <hr />
          <div id="movingContent">
            <marquee
              id="marqueeSecond"
              height="400px"
              width="490px"
              direction="up"
            >
              <ul>
                <li>
                  <div className="circle"></div>
                  <h4>Student Feedback Fall 2022 </h4>
                  <p>Student Feedback Fall 2022 </p>
                </li>
                <li>
                  <div className="circle"></div>
                  <h4>Student Feedback Fall 2022 </h4>
                  <p>Student Feedback Fall 2022 </p>
                </li>
                <li>
                  <div className="circle"></div>
                  <h4>Student Feedback Fall 2022 </h4>
                  <p>Student Feedback Fall 2022 </p>
                </li>
                <li>
                  <div className="circle"></div>
                  <h4>Student Feedback Fall 2022 </h4>
                  <p>Student Feedback Fall 2022 </p>
                </li>
                <li>
                  <div className="circle"></div>
                  <h4>Student Feedback Fall 2022 </h4>
                  <p>Student Feedback Fall 2022 </p>
                </li>
              </ul>
            </marquee>
          </div>
        </div>

        <div id="links">
          <h1>AU LINKAGES</h1>
          <hr />
          {/* <div id="flipBox"> */}
          <div id="flipBoxInner">
            <div className="flipBoxImg">
              <img className="imgs" src="./images/link2.jpg" alt="" />
              <img className="imgs" src="./images/link1.jpg" alt="" />
            </div>
            {/* <div className="flipBoxText">
                <h2>National Linkages</h2>
              </div> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default BelowSliderPage;
