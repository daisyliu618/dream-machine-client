import React, { useState, useEffect } from "react";
import { Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

// import * as actionType from '../../constants/actionTypes';
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            {/* <Typography className={classes.userName} variant='h6'>
              {user?.result.name}
            </Typography> */}
            <Button
              size="small"
              variant="contained"
              className={classes.logout}
              style={{ backgroundColor: "#4D1FF9", color: "#fff" }}
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            size="small"
            variant="contained"
            style={{ backgroundColor: "#ED4E74", color: "#fff" }}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </div>
  );
};

export default Navbar;
