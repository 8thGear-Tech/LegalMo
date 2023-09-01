import legalmologo from "../assets/images/logo/logo.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src={legalmologo}
              alt="legalmologo"
              width="120"
              height="114"
              className="d-inline-block align-text-top mt-lg-5"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
