import React from 'react';
import Aux from '../../ho/Auxx';
const Layout = (props) => (
    <Aux>
      <div>
        Toolbar
        </div>
        <main>
                {props.children}
          </main>
    </Aux>
)
export default Layout;