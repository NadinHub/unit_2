const { default: Nav } = require("../Header/Nav");

function Footer(props) {
  return (
    <footer>
      <h3>{props.site_name}</h3>
      <Nav />
    </footer>
  );
}

export default Footer
