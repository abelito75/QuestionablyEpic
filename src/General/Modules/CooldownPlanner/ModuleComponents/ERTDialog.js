import React from "react";
import { useTranslation } from "react-i18next";
import { Button, TextField, Dialog, Grid, Divider, DialogActions, DialogContent, DialogTitle, Tooltip, Typography, FormControl, InputLabel, Select, MenuItem, Paper } from "@material-ui/core";
import { bossList } from "../Data/CooldownPlannerBossList";

export default function ExportERTDialog(props) {
  // const { t } = useTranslation();
  const { variant, disableElevation, buttonLabel, color, ertListTimeNoIcons, ertListTimeIcons, ertListBossAbility, ertListAbilityNoTimeIconsAll, boss, planName, disabled } = props;
  const [open, setOpen] = React.useState(false);
  const [ertType, setErtType] = React.useState("Time - Icons");
  const { t, i18n } = useTranslation();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(props.ertListTimeNoIcons);

  const menuStyle = {
    style: { marginTop: 5 },
    MenuListProps: {
      style: { paddingTop: 0, paddingBottom: 0 },
    },
    PaperProps: {
      style: {
        border: "1px solid rgba(255, 255, 255, 0.23)",
      },
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const ertFormat = (ertType) => {
    let data = "";
    const bossID = bossList
      .filter((obj) => {
        return obj.DungeonEncounterID === boss;
      })
      .map((key, i) => key.ID);
    let currentBoss = t("BossNames." + bossID);
    console.log(currentBoss);
    let newString = "|cffffff00" + currentBoss + " - " + planName + "|r";
    switch (ertType) {
      case "Time - No Icons":
        data = ertListTimeNoIcons;
        data.map((key) => (newString = newString.concat("\n", key.ert)));
        console.log(newString);
        return newString;
      case "Time - Icons":
        data = ertListTimeIcons;
        data.map((key) => (newString = newString.concat("\n", key.ert)));
        return newString;
      case "Boss Ability - No Icons":
        data = ertListBossAbility;
        data.map((key) => (newString = newString.concat("\n", key.ert)));
        return newString;
      case "Boss Ability - Icons":
        data = ertListAbilityNoTimeIconsAll;
        data.map((key) => (newString = newString.concat("\n", key.ert)));
        return newString;
      default:
        data = ertListTimeNoIcons;
        data.map((key) => (newString = newString.concat("\n", key.ert)));
        return newString;
    }
  };

  return (
    <div>
      <Tooltip title={""} arrow>
        <Button disableElevation={disableElevation} color={color} style={{ fontSize: "14px" }} onClick={handleClickOpen} variant={variant} disabled={disabled}>
          {buttonLabel}
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="simc-dialog-title" maxWidth="md" fullWidth={true}>
        <DialogTitle id="ert-dialog-title">
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography variant="h6" color="primary">
                Note Export
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs="auto">
                  <FormControl style={{ minWidth: 200 }} variant="outlined" size="small">
                    <InputLabel id="ertFormat">{t("CooldownPlanner.TableLabels.TypeSelector")}</InputLabel>
                    <Select labelId="ertFormatSelector" value={ertType} onChange={(e) => setErtType(e.target.value)} label={t("CooldownPlanner.TableLabels.TypeSelector")} MenuProps={menuStyle}>
                      <MenuItem key={"ert1"} value={"Time - No Icons"}>
                        Time - No Icons
                      </MenuItem>
                      <Divider />
                      <MenuItem key={"ert2"} value={"Time - Icons"}>
                        Time - Icons
                      </MenuItem>
                      <Divider />
                      <MenuItem key={"ert3"} value={"Boss Ability - No Icons"}>
                        Boss Ability - No Icons
                      </MenuItem>
                      <Divider />
                      <MenuItem key={"ert4"} value={"Boss Ability - Icons"}>
                        Boss Ability - Icons
                      </MenuItem>
                      {/* <Divider />
                        <MenuItem key={"ert5"} value={"Notes - Icons"}>
                          Notes - Icons
                        </MenuItem>
                        <Divider />
                        <MenuItem key={"ert6"} value={"Notes - No Icons"}>
                          Notes - No Icons
                        </MenuItem>
                        <Divider /> */}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            multiline={true}
            margin="dense"
            id="exportPlanID"
            // label={"Paste your plan string here"}
            fullWidth
            style={{ height: "100%" }}
            variant="outlined"
            value={ertFormat(ertType)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
