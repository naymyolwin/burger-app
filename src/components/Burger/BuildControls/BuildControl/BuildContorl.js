import React from "react";
import classes from "./BuildContorl.module.css";

const BuildContorl = (props) => {
  return (
    <div className={classes.BuildContorl}>
      <div className={classes.label}>{props.label}</div>
      <button className={classes.less}>Less</button>
      <button className={classes.more}>More</button>
    </div>
  );
};

export default BuildContorl;
