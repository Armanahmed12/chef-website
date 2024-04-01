import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/ActiveNavLink.css'

const ActiveNavLink = ({path, children}) => {
    console.log(path, children);
    return (
        <NavLink
            to={`${path}`}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveNavLink;