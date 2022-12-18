import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {BsCart3} from 'react-icons/bs'

const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt=""/>
            <span>K Store</span>
        </div>

        <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>

                </ul>
            </div>
            
            <input type="text" className={css.search} placeholder="Search"/>

            <BsCart3 className={css.cart}/>
        </div> 
    </div>
  )
}

export default Header