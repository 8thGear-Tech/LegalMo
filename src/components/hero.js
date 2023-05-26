import Navbar from "./navbar";
import { SurveyBtn, WaitListBtn } from "./buttons";

export const HomeHero = () => {
  return (
    <>
      <div className="container-fluid HomeHeroBg d-flex align-items-center">
        <div className="px-1 container-fluid HomeHeroBgg d-flex pb-4">
          <div className="row justify-content-center">
            <Navbar />
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center mt-5 pt-3">
                We are researching to understand your legal needs.
                <br /> Share your thoughts with us.
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center mt-5">
                {" "}
                We are researching to understand your legal needs. Share your
                thoughts with us.
              </h3>
            </div>{" "}
            <div className="d-flex justify-content-center">
              {" "}
              <SurveyBtn />
              <WaitListBtn />
            </div>
            <div className="">
              <div className="d-flex justify-content-center mt-5 pt-5">
                <a
                  href="mailto:bukola@legalmo.biz"
                  className="text-decoration-none"
                >
                  <p className="paragraphColor mx-3 textShow m-0 p-1">
                    bukola@legalmo.biz
                  </p>
                </a>
              </div>{" "}
              <div className="d-flex justify-content-center">
                <a href="tel:2348137686118" className="text-decoration-none">
                  <p className="paragraphColor mx-3 textShow m-0 p-1">
                    +2348137686118
                  </p>
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <a
                  href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <p className="paragraphColor textShow m-0 p-1">
                    41 CMD Road, Magodo/Secretariat, Lagos
                  </p>
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="" target="_blank" className="text-decoration-none">
                  <i class="bi bi-linkedin mx-2 paragraphColor textShow"></i>
                </a>
                <a
                  href="https://instagram.com/legalmoplatform?igshid=ZDc4ODBmNjlmNQ=="
                  target="_blank"
                  className="text-decoration-none"
                >
                  <i class="bi bi-instagram mx-2 paragraphColor textShow"></i>
                </a>
                <a
                  href="https://twitter.com/legalmoplatform"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <i class="bi bi-twitter mx-2 paragraphColor textShow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
