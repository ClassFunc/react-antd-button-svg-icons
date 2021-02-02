import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "antd";

const useStyles = makeStyles(theme => ({
  primary: {
    marginRight: 2,
    minWidth: 125,
    minHeight: 35,
    fontWeight: "700",
    color: "#fff",
    fontSize: "1.2rem",
    borderRadius: 25,
    "&:hover": {
      opacity: 0.8,
      borderColor: "initial",
      color: "#FFF"
    },
    "&:focus": {
      opacity: 0.8,
      borderColor: "initial",
      color: "#FFF"
    }
  },
  secondary: {
    marginRight: 2,
    minWidth: 125,
    minHeight: 35,
    fontWeight: "700",
    color: "#fff",
    fontSize: "1.2rem",
    borderRadius: 25,
    "&:hover": {
      opacity: 0.8,
      borderColor: "initial",
      color: "#FFF"
    },
    "&:focus": {
      opacity: 0.8,
      borderColor: "initial",
      color: "#FFF"
    }
  },
  "clf-flex-center": {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important"
  },
  "clf-grid-center": {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important"
  }
}));

export const CLFButtonSVG = ({
                               display = "clf-flex-center",
                               iconComponent = null,
                               name = null,
                               onClick = null,
                               size = null,
                               typeClass = "primary",
                               disable = false,
                               loading = false,
                               width = null,
                               height = null,
                               key = null,
                               margin = null,
                               padding = null,
                               block = false,
                               className = null,
                               minWidth = null,
                               minHeight = null,
                               background = "#1790FF",
                               borderColor = "#1790FF"
                             }) => {
  const classes = useStyles();

  return (
    <Button
      className={`${classes[typeClass]} ${classes[display]} ${className}`}
      icon={iconComponent}
      size={size}
      onClick={onClick}
      disabled={disable}
      loading={loading}
      style={{
        width,
        height,
        margin,
        padding,
        minWidth,
        minHeight,
        background,
        borderColor
      }}
      key={key}
      block={block}
    >
      {name}
    </Button>
  );
};
