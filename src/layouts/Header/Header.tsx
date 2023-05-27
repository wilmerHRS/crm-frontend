const Header = () => {
  return (
    <header className="px-2 px-xl-3 px-xxl-5 py-2 bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="fs-4 fw-bold">ABC S.A.</h1>
        <div
          style={{ width: "42px", height: "42px" }}
          className="rounded-circle bg-primary d-flex justify-content-center align-items-center"
        >
          <span className="inline-block text-light">WR</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
