import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function Sneakers() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" style={{ zIndex: "999" }}>
      <div>
        <Button ref={anchorRef} onClick={handleToggle} className="!px-0">
          <h1 className="navBar__headers">Sneakers</h1>
        </Button>
        <Popper
          style={{ marginTop: "5px" }}
          className="z-999"
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper style={{ marginTop: "5px" }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <ul
                    className="flex flex-col py-3 mx-7"
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link
                      className="hamburger-link"
                      href="#about"
                      onClick={handleClose}
                    >
                      Air Jordans
                    </Link>
                    <Link
                      className="hamburger-link"
                      href="#services"
                      onClick={handleClose}
                    >
                      Yeezys
                    </Link>
                    <Link
                      className="hamburger-link"
                      href="#quotes"
                      onClick={handleClose}
                    >
                      Dunks
                    </Link>
                    <Link
                      className="hamburger-link"
                      href="#quotes"
                      onClick={handleClose}
                    >
                      New Balance
                    </Link>
                  </ul>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
