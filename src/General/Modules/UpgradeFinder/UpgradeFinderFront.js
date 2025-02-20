import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import HelpText from "../SetupAndMenus/HelpText";
import UpgradeFinderSlider from "./Slider";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Settings from "../Settings/Settings";
import UpgradeFinderSimC from "./UpgradeFinderSimCImport";
import { runUpgradeFinder } from "./UpgradeFinderEngine";
import { runUpgradeFinderBC } from "./UpgradeFinderEngineBC";
// import { useHistory } from "react-router-dom";
import userSettings from "../Settings/SettingsObject";
import { useSelector } from "react-redux";
import DominationGems from "Retail/Modules/DominationGemSelection/DominationGems";

const useStyles = makeStyles((theme) => ({
  slider: {
    width: "90%",
    margin: "0px 20px 50px 20px",
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 50,
  },
  red: {},
  labels: { fontSize: 12 },
  selectedRed: {
    "&$red": {
      color: "#000",
      backgroundColor: "#F2BF59",
    },
    "&$red:hover": {
      color: "#000",
      backgroundColor: "rgb(169, 133, 62)",
    },
  },
  header: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "85%",
      marginTop: 120,
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "80%",
      marginTop: 140,
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "65%",
      marginTop: 0,
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "center",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "55%",
      marginTop: 0,
    },
  },
}));

/* ---------------------------------------------------------------------------------------------- */
/*                                        Retail Constants                                        */
/* ---------------------------------------------------------------------------------------------- */

/* ---------------------------------- Retail Raid Difficulties ---------------------------------- */
const raidDifficulty = ["Raid Finder", "Normal", "Heroic", "Mythic"];

/* -------------------------------------- Retail PVP Ranks -------------------------------------- */

const PvPRating = [
  { value: 0, label: "Unranked" },
  { value: 600, label: "Combatant 1400-1599" },
  { value: 800, label: "Challenger  1600-1799" },
  { value: 1000, label: "Rival 1800-2099" },
  { value: 1300, label: "Duelist 2100-2399" },
  { value: 1600, label: "Elite 2400+" },
];

/* ---------------------------------------------------------------------------------------------- */
/*                                    Burning Crusade Constants                                   */
/* ---------------------------------------------------------------------------------------------- */

/* ---------------------------- Burning Crusade Dungeon Difficulties ---------------------------- */
const burningCrusadeDungeonDifficulty = ["Normal", "Heroic"];

export default function UpgradeFinderFront(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const contentType = useSelector((state) => state.contentType);
  const gameType = useSelector((state) => state.gameType);
  const helpBlurb = t("UpgradeFinderFront.HelpText")
  const helpText = gameType === "Retail" ? ["Insert a SimC string to automatically import your gear.", "(Optional) Use the settings panel to make further customizations.", "Select a raid difficulty, Mythic+ level and PVP rating. If you don't play any particular content type, feel free to set it to 0.",
                                            "Hit Go at the bottom of the page."] : 
                                            ["Insert a QE Import string to automatically import your gear.",
                                            "(Optional) Use the settings panel to set specific gem types, enchants and how much value to put on extra mana.",
                                            "Select a dungeon difficulty, and (optionally) a PVP rating.",
                                            "Hit Go at the bottom of the page."];

  const marks = [
    {
      value: 0,
      label: (
        <div className={classes.labels}>
          <div>lvl 184</div>
          <div>M 0</div>
        </div>
      ),
    },
    {
      value: 1,
      label: (
        <div className={classes.labels}>
          <div>lvl 210</div>
          <div>M 2</div>
        </div>
      ),
    },
    {
      value: 2,
      label: (
        <div className={classes.labels}>
          <div>lvl 213</div>
          <div>M 3</div>
        </div>
      ),
    },
    {
      value: 3,
      label: (
        <div className={classes.labels}>
          <div>lvl 216</div>
          <div>M 4</div>
        </div>
      ),
    },
    {
      value: 4,
      label: (
        <div className={classes.labels}>
          <div>lvl 220</div>
          <div>M 5</div>
        </div>
      ),
    },
    {
      value: 5,
      label: (
        <div className={classes.labels}>
          <div>lvl 223</div>
          <div>M 6-7</div>
        </div>
      ),
    },
    {
      value: 6,
      label: (
        <div className={classes.labels}>
          <div>lvl 226</div>
          <div>M 8-9</div>
        </div>
      ),
    },
    {
      value: 7,
      label: (
        <div className={classes.labels}>
          <div>lvl 229</div>
          <div>M 10-11</div>
        </div>
      ),
    },
    {
      value: 8,
      label: (
        <div className={classes.labels}>
          <div>lvl 233</div>
          <div>M 12-13</div>
        </div>
      ),
    },
    {
      value: 9,
      label: (
        <div className={classes.labels}>
          <div>lvl 236</div>
          <div>M 14-15</div>
        </div>
      ),
    },
    {
      value: 10,
      label: (
        <div className={classes.labels}>
          <div>lvl 239</div>
        </div>
      ),
    },
    {
      value: 11,
      label: (
        <div className={classes.labels}>
          <div>lvl 242 </div>
        </div>
      ),
    },
    {
      value: 12,
      label: (
        <div className={classes.labels}>
          <div>lvl 246</div>
        </div>
      ),
    },
    {
      value: 13,
      label: (
        <div className={classes.labels}>
          <div>lvl 249</div>
        </div>
      ),
    },
    {
      value: 14,
      label: (
        <div className={classes.labels}>
          <div>lvl 252</div>
        </div>
      ),
    },
  ];

  const [selectedRaidFinder, setSelectedRaidFinder] = React.useState(false);
  const [selectedNormal, setSelectedNormal] = React.useState(false);
  const [selectedHeroic, setSelectedHeroic] = React.useState(false);
  const [selectedMythic, setSelectedMythic] = React.useState(false);

  const [dungeonBC, setDungeonBC] = React.useState("Heroic");

  const handleContent = (event, content) => {
    if (content === null) {
    } else {
      setDungeonBC(content);
      props.setBCDungeonDifficulty(event, content);
    }
  };

  // let history = useHistory();

  const selectsPvE = [selectedRaidFinder, selectedNormal, selectedHeroic, selectedMythic];
  const setsPvE = [setSelectedRaidFinder, setSelectedNormal, setSelectedHeroic, setSelectedMythic];

  const editSettings = (setting, newValue) => {
    //console.log("Updating Settings" + setting + ". " + newValue);
    userSettings[setting] = newValue;
    //console.log("Settings: " + JSON.stringify(userSettings));
  };

  const unleashUpgradeFinder = () => {
    if (gameType === "Retail") {
      const playerSettings = props.playerSettings;
      const result = runUpgradeFinder(props.player, contentType, currentLanguage, playerSettings, userSettings);
      props.setItemSelection(result);
      props.setShowReport(true);
    } else if (gameType === "BurningCrusade") {
      const playerSettings = props.playerSettings;
      const result = runUpgradeFinderBC(props.player, contentType, currentLanguage, playerSettings, userSettings);
      props.setItemSelection(result);
      props.setShowReport(true);
    }

    //history.push("/UpgradeFinderReport/");
  };

  const getSimCStatus = (player) => {
    if (player.activeItems.length === 0) return "Missing";
    else if (checkCharacterValid(player) === false) return "Invalid";
    else return "Good";
  };

  /*
  const checkCharacterValid = (player) => {
    const weaponSet = player.getActiveItems("AllMainhands", false, true);
    const weapon = weaponSet.length > 0 ? weaponSet[0] : "";

    return (weapon.slot === "2H Weapon" && player.getEquippedItems().length === 15) || (weapon.slot === "1H Weapon" && player.getEquippedItems().length === 16);
  }; */

  const checkCharacterValid = (player, gameType) => {
    const weaponSet = player.getActiveItems("AllMainhands", false, true);
    const weapon = weaponSet.length > 0 ? weaponSet[0] : "";
    if (gameType === "Retail") {
      return (weapon.slot === "2H Weapon" && player.getEquippedItems().length === 15) || (weapon.slot === "1H Weapon" && player.getEquippedItems().length === 16);
    } else if (gameType === "BurningCrusade") {
      return (weapon.slot === "2H Weapon" && player.getEquippedItems().length === 16) || (weapon.slot === "1H Weapon" && player.getEquippedItems().length === 17);
    }
  };

  const getUpgradeFinderReady = (player) => {
    return getSimCStatus(player) === "Good" && (props.playerSettings.raid.length > 0 || gameType == "BurningCrusade");
  };

  return (
    <div className={classes.header}>
      <Typography variant="h4" color="primary" align="center" style={{ padding: "10px 10px 5px 10px" }}>
        {t("UpgradeFinderFront.Header")}
      </Typography>

      <Grid container spacing={1}>
        {/* ---------------------------- Help Text Section --------------------------- */}
        <Grid item xs={12}>
          <HelpText blurb={helpBlurb} text={helpText} />
        </Grid>
        <Grid item xs={12}>
          <UpgradeFinderSimC player={props.player} simcSnack={props.simcSnack} allChars={props.allChars} />
        </Grid>
        <Grid item xs={12}>
          <Settings player={props.player} contentType={contentType} userSettings={userSettings} editSettings={editSettings} hymnalShow={true} groupBuffShow={true} autoSocket={true} singleUpdate={props.singleUpdate} />
        </Grid>
        {/* ------------------------------ Raid Section ------------------------------ */}

        {gameType === "Retail" ? (
          <Grid item xs={12}>
            <Paper elevation={0} style={{ padding: 10 }}>
              <Grid container justify="center" spacing={1}>
                <Grid item xs={12}>
                  <Typography color="primary" align="center" variant="h5">
                    {t("UpgradeFinderFront.RaidDifficultyHeader")}
                  </Typography>
                  <Grid item xs={12}>
                    <Typography align="center">{t("UpgradeFinderFront.RaidDifficultyBody")}</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container justify="center" spacing={1}>
                {raidDifficulty.map((key, i) => (
                  <Grid item xs="auto" key={i}>
                    <ToggleButton
                      classes={{
                        root: classes.red,
                        selected: classes.selectedRed,
                      }}
                      value="check"
                      selected={props.playerSettings.raid.includes(i)}
                      style={{ width: 180, height: 45 }}
                      onChange={() => {
                        setsPvE[i](!selectsPvE[i]);
                        props.setRaidDifficulty(i);
                      }}
                    >
                      {t("RaidDifficulty." + key)}
                    </ToggleButton>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ) : (
          ""
        )}

        {/* -------------------------------------- Dungeon Settings -------------------------------------- */}

        {gameType === "Retail" ? (
          /* ---------------------------------------------------------------------------------------------- */
          /*                                  Retail Mythic Dungeon Section                                 */
          /* ---------------------------------------------------------------------------------------------- */

          <Grid item xs={12}>
            <Paper elevation={0} style={{ padding: "10px 10px 10px 10px", textAlign: "center" }}>
              <Grid container justify="center" spacing={1}>
                <Grid item xs={12}>
                  <Typography color="primary" align="center" variant="h5">
                    {t("UpgradeFinderFront.MythicPlusHeader")}
                  </Typography>
                  <Grid item xs={12}>
                    <Typography align="center">{t("UpgradeFinderFront.MythicPlusBody")}</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <UpgradeFinderSlider
                className={classes.slider}
                style={{ color: "#52af77" }}
                defaultValue={6}
                step={null}
                valueLabelDisplay="off"
                marks={marks}
                max={14}
                change={props.setDungeonDifficulty}
              />
            </Paper>
          </Grid>
        ) : (
          /* ---------------------------------------------------------------------------------------------- */
          /*                                 Burning Crusade Dungeon Section                                */
          /* ---------------------------------------------------------------------------------------------- */

          <Grid item xs={12}>
            <Paper elevation={0} style={{ padding: "10px 10px 10px 10px", textAlign: "center" }}>
              <Grid container justify="center" spacing={1}>
                <Grid item xs={12}>
                  <Typography color="primary" align="center" variant="h5">
                    {t("Dungeon")}
                  </Typography>
                  <Grid item xs={12}>
                    <Typography align="center">{t("UpgradeFinderFront.DungeonBodyBC")}</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container justify="center" spacing={1}>
                <ToggleButtonGroup value={dungeonBC} exclusive onChange={handleContent} aria-label="contentToggle" size="large">
                  <ToggleButton style={{ padding: "15px 30px" }} value="Normal" aria-label="dungeonLabel">
                    {/* <Tooltip title={t("QeHeader.Tooltip.ChangeToDungeon")} arrow> */}
                    <div style={{ display: "inline-flex" }}>
                      <Typography variant="button">{t("RaidDifficulty.Normal")}</Typography>
                    </div>
                    {/* </Tooltip> */}
                  </ToggleButton>

                  <ToggleButton style={{ padding: "15px 30px" }} value="Heroic" aria-label="raidLabel">
                    {/* <Tooltip title={t("QeHeader.Tooltip.ChangeToRaid")} arrow> */}
                    <div style={{ display: "inline-flex" }}>
                      <Typography variant="button">{t("RaidDifficulty.Heroic")}</Typography>
                    </div>
                    {/* </Tooltip> */}
                  </ToggleButton>
                </ToggleButtonGroup>
                {/* {burningCrusadeDungeonDifficulty.map((key, i) => (
                  <Grid item xs="auto" key={i}>
                    <ToggleButton
                      classes={{
                        root: classes.red,
                        selected: classes.selectedRed,
                      }}
                      value="check"
                      selected={props.playerSettings.raid.includes(i)}
                      style={{ width: 180, height: 45 }}
                      // onChange={() => {
                      //   // setsPvE[i](!selectsPvE[i]);
                      //   props.setRaidDifficulty(i);
                      // }}
                    >
                      {t("RaidDifficulty." + key)}
                    </ToggleButton>
                  </Grid>
                ))} */}
              </Grid>
            </Paper>
          </Grid>
        )}
        {/* ------------------------------- PvP Section ------------------------------ */}
        <Grid item xs={12}>
          <Paper elevation={0} style={{ padding: 10 }}>
            <Grid container justify="center" spacing={1}>
              <Grid item xs={12}>
                <Typography color="primary" align="center" variant="h5">
                  {t("UpgradeFinderFront.PvPHeader")}
                </Typography>
                <Grid item xs={12}>
                  <Typography align="center">{t("UpgradeFinderFront.PvPBody")}</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justify="center" spacing={1} style={{ marginTop: "10px 10px 0px 10px" }}>
              <Grid item style={{ textAlign: "center" }} xs={12}>
                <UpgradeFinderSlider
                  className={classes.slider}
                  style={{ color: "#af5050" }}
                  defaultValue={0}
                  step={null}
                  valueLabelDisplay="off"
                  marks={PvPRating}
                  max={1600}
                  change={props.setPVPDifficulty}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {gameType === "Retail" ? <Grid item xs={12}> 
          {/* -------------------------------- Trinket / Buff / Etc Settings ------------------------------- */}
          {<DominationGems player={props.player} singleUpdate={props.singleUpdate} userSettings={userSettings} />}
        </Grid> : ""}
        <Grid item xs={12} style={{ marginBottom: 100 }} />
      </Grid>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50px",
          backgroundColor: "#424242",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="subtitle2" align="center" style={{ padding: "5px 10px 5px 10px" }} color="primary">
              {/* {errorMessage} */}
            </Typography>
            <Button variant="contained" color="secondary" align="center" style={{ height: "68%", width: "180px" }} disabled={!getUpgradeFinderReady(props.player)} onClick={unleashUpgradeFinder}>
              {t("TopGear.GoMsg")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
