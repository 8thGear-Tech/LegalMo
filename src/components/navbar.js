import legalmologo from "../assets/images/logo/legalmologo.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={legalmologo}
              alt="legalmologo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
