import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";

// Actions
import { signout } from "../../store/actions/userActions";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core";
import {
  LogoLink,
  StyledFaRegUserCircle,
  MenuLink,
  MenuLinkWhite,
  StyledMenuItem,
  StyledAppBar,
} from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();

  const handleSignout = () => {
    dispatch(signout());
    history.replace("/");
  };

  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StyledAppBar elevation={0} theme={theme}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <LogoLink to="/">Scritches</LogoLink>
          </Typography>
          {user ? (
            <>
              <div>
                <StyledFaRegUserCircle
                  color="#fff"
                  size="1.5em"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                />
                <label>{user.firstName}</label>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {user.type === "petOwner" ? (
                    <MenuLink to="/profile">
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </MenuLink>
                  ) : (
                    user.type === "petSitter" && (
                      <MenuLink to="/profile/sitter">
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                      </MenuLink>
                    )
                  )}
                  <StyledMenuItem onClick={handleSignout}>
                    Sign out
                  </StyledMenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <MenuLinkWhite
                to={{ pathname: "/signup", state: { type: "petOwner" } }}
              >
                <Button color="inherit">Sign up</Button>
              </MenuLinkWhite>

              <MenuLinkWhite to="/signin">
                <Button color="inherit">Sign in</Button>
              </MenuLinkWhite>
            </>
          )}
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
