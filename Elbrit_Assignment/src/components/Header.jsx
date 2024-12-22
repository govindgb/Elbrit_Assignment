import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="header  w-100">
      <div className="header-img ml-40">
        <Image width={100} height={100} src="/Assets/logo.jpg" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
