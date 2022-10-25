import React from "react";
//  after adding header in order page we add header in here:

const Header = ({ category, title }) => {
  // we call props from order page:
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
