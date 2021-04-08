import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import './index.less';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import {Logo} from '../../../../../assets';
import Copyright from "../../../Copyright";
import { NotesOutlined, PeopleOutline } from "@material-ui/icons";

const items = [

  {
    href: "/admin/users",
    icon: PeopleOutline,
    title: "Users",
  },
  {
    href: '/admin/transactions',
    icon: NotesOutlined,
    title: 'Transactions'
  }
]

const NavBar = ({ onMobileClose, openMobile }) => {
  const auth = useSelector(({Auth})=>Auth);
  const user = {
  avatar: auth.user.picture || Logo,
  jobTitle: auth.role,
  name: auth.user?.name,
  email: auth.user?.email
};
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box className="navbar-root" height="100%" display="flex" flexDirection="column">
      <Box className="navbar-box-1" alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className="nav-avatar"
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography className="nav-name" color="secondary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.email}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
        
      </Box>
      <Divider />
      <Box className="navbar-box-2" p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Copyright color="primary"/>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes="nav-drawer-mobile"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes="nav-drawer"
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
