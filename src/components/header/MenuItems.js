import { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import Dropdown from "./Dropdown";
import Megamenu from "./Megamenu";
import { FaCaretDown } from 'react-icons/fa';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      id={items.title}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.megamenu ? (
        <>
          <div className="testing"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <NavLink className="nav-link" to={items.link}>{items.title}</NavLink>
            {depthLevel > 0 ? <span>&raquo;</span> : <FaCaretDown />}
          </div>
          <Megamenu
            depthLevel={depthLevel}
            submenus={items.menusections}
            dropdown={dropdown}
          />
        </>
      ) : (
        <>
          {items.submenu ? (
            <>
              <div
                type="button" className="testing"
                aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}
              >
               
                <NavLink className="nav-link" to="#">{items.title}</NavLink>
                {depthLevel > 0 ? <span>&raquo;</span> : <FaCaretDown />}
              </div>
              <Dropdown
                depthLevel={depthLevel}
                submenus={items.submenu}
                dropdown={dropdown}
              />
            </>
          ) : (
            <NavLink className="nav-link" to={items.link}>{items.title}</NavLink>
          )}
        </>
      )}


    </li>
  );
};

export default MenuItems;
