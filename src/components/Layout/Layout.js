import React from 'react';
import Aux from '../../ho/Auxx';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer />
        <main>
         {props.children}
        </main>
    </Aux>
)
export default Layout;