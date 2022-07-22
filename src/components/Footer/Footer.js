import React from "react";
import './FooterStyle.css';
import { Social } from "./Social/Social";
import { SiteMap } from "./SiteMap/SiteMap";
import { AboutList } from "./AboutList/AboutList";

export const Footer = () => {
    return(
        <footer>
            <SiteMap/>
            <AboutList/>
            <Social/>
        </footer>
    )
};

