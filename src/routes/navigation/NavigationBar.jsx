import "./navigation.styles.scss";
import { Fragment } from "react";
import {Link, Outlet} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
function NavigationBar () {
    return(
        <Fragment>
            <div className = 'navigation'>
                <Link className = 'logo-container' to='/'>
                    <CrwnLogo className = 'logo' />
                </Link>
                <div className = 'nav-links-container'>
                    <Link className = 'nav-link' to = '/shop' >
                        shop
                    </Link>
                    <Link className = 'nav-link' to = '/shop' >
                        cart
                    </Link>
                    <Link className = 'nav-links' to = '/shop' >
login                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavigationBar;