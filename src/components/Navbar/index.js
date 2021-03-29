import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// Actions
import { signout } from "../../store/actions/userActions";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core";
import {
  LogoLink,
  StyledFaUserCircle,
  MenuLinkWhite,
  StyledAppBar,
  StyledLabel,
} from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AiOutlineLogout } from "react-icons/ai";

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
                <MenuLinkWhite
                  to={user.type === "petOwner" ? "/profile" : "/profile/sitter"}
                >
                  <StyledLabel>{user.firstName}</StyledLabel>
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
