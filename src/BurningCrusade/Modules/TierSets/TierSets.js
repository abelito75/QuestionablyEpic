// This module will be focused on BC mostly, Until Retail reintroduces tier sets

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../../General/Modules/SetupAndMenus/QEMainMenu";
import TierObject from "./TierObject";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";
import { Grid, Typography } from "@material-ui/core";
// import { useSelector } from "react-redux";
import { tierSets } from "../../Databases/TierSetsDB";
import HelpText from "../../../General/Modules/SetupAndMenus/HelpText";

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "70%",
      justifyContent: "space-between",
      display: "block",
      marginTop: "120px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      width: "70%",
      justifyContent: "space-between",
      display: "block",
      marginTop: "120px",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "auto",
      width: "70%",
      justifyContent: "space-between",
      display: "block",
      marginTop: "120px",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "auto",
      width: "70%",
      justifyContent: "space-between",
      display: "block",
    },
  },
}));

export default function LegendaryCompare(props) {
  const classes = useStyles();
  // const contentType = useSelector((state) => state.contentType);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const { t } = useTranslation();

  const helpText = ["A quick look at all tier sets available for your class throughout the expansion. Specific numbers coming very soon."];

  return (
    <div className={classes.header}>
      <Grid item container spacing={2} direction="row">
        {/* ---------------------------------------- Module Title ---------------------------------------- */}
        <Grid item xs={12}>
          <Typography color="primary" variant="h4" align="center" style={{ paddingBottom: 16 }}>
            {t("TierSets.Title")}
          </Typography>
        </Grid>
        {/* ------------------------------------------ Help Text ----------------------------------------- */}
        <Grid item xs={12}>
          <HelpText text={helpText} />
        </Grid>
        {/* ------------------------------ Map the Legendary list into Cards ----------------------------- */}
        <Grid item container spacing={1} direction="row">
          {tierSets
            .filter((filter) => (filter.spec + " BC") === props.player.getSpec())
            .map((set, index) => (
              <TierObject key={index} set={set} player={props.player} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
}
