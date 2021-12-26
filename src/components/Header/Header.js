import ButtonMenu from './ButtonMenu'
import Logo from './Logo'
import MyAccount from './MyAccount'
import Search from './Search'
import Cart from './Cart'

import './style.scss'
export default function Header(){
    return(
        <header id="header" className="header">
            <div className="header__container">
                {window.innerWidth <= 991 &&(
                    <ButtonMenu />
                )}
                <Logo />
                <Search />
                {window.innerWidth >= 991 && (
                    <MyAccount />
                )}
                <Cart />
            </div>
        </header>
    )
}