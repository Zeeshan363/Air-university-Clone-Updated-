import React from "react";
import "./CampusCollege.css";

const CampusCollege = () => {
  return (
    <>
      <div id="mainDivCampusCollege">
        <div id="campus">
          <h1>AU CAMPUSES</h1>
          <div id="allCampuses">
            <div className="cam">
              <img src="./images/campus1.jpg" alt="" />
              <p>
                The campus is located near the Margalla foothills in the south
                east corner of sector E-9 (PAF Complex) of Islamabad. The
                University is a degree awarding autonomous institution and its
                graduates are offered good placement opportunities in the job
                market.
              </p>
            </div>
            <div className="cam">
              <img src="./images/campus1.jpg" alt="" />
              <p>
                The campus is located near the Margalla foothills in the south
                east corner of sector E-9 (PAF Complex) of Islamabad. The
                University is a degree awarding autonomous institution and its
                graduates are offered good placement opportunities in the job
                market.
              </p>
            </div>
            <div className="cam">
              <img src="./images/campus1.jpg" alt="" />
              <p>
                The campus is located near the Margalla foothills in the south
                east corner of sector E-9 (PAF Complex) of Islamabad. The
                University is a degree awarding autonomous institution and its
                graduates are offered good placement opportunities in the job
                market.
              </p>
            </div>
          </div>
        </div>
        <div id="college">
          <h1>CONSTITUENT COLLEGES</h1>
          <div id="logos">
            <div>
              <img src="./images/logo1.jpg" alt="" />
            </div>
            <div>
              <img src="./images/logo2.jpg" alt="" />
            </div>
            <div>
              <img src="./images/logo3.jpg" alt="" />
            </div>
            <div>
              <img src="./images/logo4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div id="affCollege">
          <h1>AFFILIATED COLLEGES</h1>
          <div>
            <p>Bilquis College of Education for Women, Chaklala, Rawalpindi</p>
            <p>Fazaia College of Education for Women, Lahore</p>
            <p>Aero Medical Institute, PAF Base, Masroor, Karachi</p>
            <p>College of Education, Peshawar</p>
            <p>College of Education for Women, Peshawar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampusCollege;
