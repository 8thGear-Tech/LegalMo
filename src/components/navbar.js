import legalmologo from "../assets/images/logo/logo.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={legalmologo}
              alt="legalmologo"
              width="100"
              height="94"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
