import React from "react";

const Sidebar = () => {
  return (
    <div className="links-container show-container">
      <ul className="links">
        {links.map((item) => {
          const { id, url, text } = item;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
