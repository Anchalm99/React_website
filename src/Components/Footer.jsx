var React = require("react");
function Footer() {
  const am = new Date().getFullYear();
  return <footer>copyright @{am}</footer>;
}
export default Footer;
