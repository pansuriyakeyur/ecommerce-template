import React from 'react'
import css from './Footer.module.css' 
import {RiMailLine, RiLoginCircleLine, RiUserLine, RiPhoneLine,RiLink} from 'react-icons/ri'
import Logo from '../../assets/logo.png';
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
  return (

    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>K Store</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact US</span>
                    <span className={css.pngLine}>
                        <MdOutlineLocationOn className={css.icon} />
                        
                        <span>202 Breadowstrasse, Berlin 10553</span>
                    </span>

                    <span className={css.pngLine}>
                            {" "}
                            <RiPhoneLine className={css.icon} />
                            <a href="tel:352-306-4415">352-306-4415</a>
                    </span>

                    <span className={css.pngLine}>
                        <RiMailLine className={css.icon} />

                        <a href="mailto:support@kstore.com">support@kstore.com</a>
                    </span>

                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <RiLoginCircleLine className={css.icon} />
                        Sign In
                    </span>
                </div>
            </div>


            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <RiUserLine className={css.icon} />
                        <a href="/about">
                            <p>About us</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <RiLink className={css.icon} />
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>

        <div className={css.copyRight}>
            <span>Template Design by Keyur Pansuriya</span>
            <span>All rights reserved.</span>
        </div>
    </div>

    );
};

export default Footer