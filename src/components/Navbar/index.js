import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Styling
import { Avatar, Button, Toolbar, useTheme } from "@material-ui/core";
import { AiOutlineLogout } from "react-icons/ai";
import {
  LogoLink,
  MenuLinkWhite,
  StyledFaUserCircle,
  StyledAppBar,
  StyledLabel,
  StyledTitle,
  useStyles,
} from "./styles";

// Assets
import LogoImage from "../../assets/Logo.png";

// Actions
import { signout } from "../../store/actions/userActions";
import { updateLastLocation } from "../../store/actions/locationActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  const classes = useStyles();

  const user = useSelector((state) => state.userReducer.user);

  const handleSignout = () => {
    dispatch(updateLastLocation("/"));
    dispatch(signout());
    history.replace("/");
  };

  return (
    <div className={classes.root}>
      <StyledAppBar elevation={0} theme={theme}>
        <Toolbar>
          <LogoLink to="/">
            <Avatar alt="Scritches" src={LogoImage} />
          </LogoLink>
          <StyledTitle variant="h4">Scritches</StyledTitle>

          {user ? (
            <>
              <div>
                <MenuLinkWhite to="/profile">
                  <StyledLabel>{user.username}</StyledLabel>
                  <StyledFaUserCircle color="#fff" size="2em" />
                </MenuLinkWhite>

                <MenuLinkWhite to="/">
                  <AiOutlineLogout
                    color="#fff"
                    size="2em"
                    onClick={handleSignout}
                  />
                </MenuLinkWhite>
              </div>
            </>
          ) : (
            <>
              <MenuLinkWhite
                to={{ pathname: "/signup", state: { type: "petSitter" } }}
              >
                <Button color="inherit">Become a pet sitter</Button>
              </MenuLinkWhite>

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
