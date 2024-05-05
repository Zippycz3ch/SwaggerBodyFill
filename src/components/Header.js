// components/Header.js
const Header = ({ error }) => (
    <>
      <h1>Swagger Body Fill</h1>
      {error && <p className="error">{error}</p>}
    </>
  );
  
  export default Header;
  