import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
};
const Navigation = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.navItem}>
                    <NavLink className={buildLinkClass} to="/">
                        Home
                    </NavLink>
                    
                </li>
                <li className={s.navItem}>
                    <NavLink className={buildLinkClass} to="/movies">
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;