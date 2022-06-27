import MenuItems from "./MenuItems";
const Megamenu = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu " : "";
    console.log(submenus);
    return (
        <>
            <ul className={`dropdown ${dropdownClass} ${dropdown ? "show mxr__header-navbarmegamenu" : ""}`}>
                <li>
                    <ul>
                        <li>
                            {submenus.map((section, index) => (
                                <>
                                    <ul>
                                        <h3>{section.sectiontitle}</h3>
                                        {section.submenu.map((submenu, index) => (
                                            <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
                                        ))
                                        }
                                    </ul>
                                </>
                            ))}
                        </li>

                    </ul>
                </li>
            </ul >
        </>
    );
};

export default Megamenu;
