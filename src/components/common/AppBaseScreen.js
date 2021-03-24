import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import './index.less';
import PropTypes from 'prop-types';
const AppBaseScreen = props => {
    const { children,footerItems,toolbarLeftItem, toolbarRightItem, showHeader} = props
    return <React.Fragment>
        {showHeader && <AppBar>
            <Toolbar>
                {toolbarLeftItem}
                {toolbarRightItem}
            </Toolbar>
        </AppBar>}
        <div className="body">
            {children}
        </div>
     {/*    Footer sett*/}
     {footerItems && footerItems}
    </React.Fragment>
}
AppBaseScreen.propTypes= {
    children: PropTypes.any,
    footerItems: PropTypes.array,
    toolbarLeftItem: PropTypes.array,
    toolbarRightItem: PropTypes.array,
    showHeader: PropTypes.bool
}
AppBaseScreen.defaultProps = {
    showHeader: true
}
export default AppBaseScreen;