import Navbar from "./navbar";
import { SurveyBtn, WaitListBtn } from "./buttons";

export const HomeHero = () => {
  return (
    <>
      <div className="container-fluid HomeHeroBg d-flex align-items-center">
        <div className="px-3 container-fluid HomeHeroBgg d-flex pt-3 pb-4">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center">
                We are researching to understand your legal needs. Share your
                thoughts with us.
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
                {" "}
                We are researching to understand your legal needs. Share your
                thoughts with us.
              </h3>
            </div>{" "}
            <SurveyBtn />
            <WaitListBtn />
            <div className="pt-3">
              <div className="d-flex justify-content-center">
                <a href="tel:2348137686118" className="text-decoration-none">
                  <p className="paragraphColor mx-3">+2348137686118</p>
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <a
                  href="mailto:bukola@legalmo.biz"
                  className="text-decoration-none"
                >
                  <p className="paragraphColor mx-3">bukola@legalmo.biz</p>
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <a
                  href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <p className="paragraphColor mx-3">
                    41 CMD Road, Magodo/Secretariat, Lagos
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
