import React from "react";

function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p>
          Copyright @ {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
