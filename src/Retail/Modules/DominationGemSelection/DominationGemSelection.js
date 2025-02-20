import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Grid, FormControl, Select, Typography, Divider, TextField, Tooltip, InputLabel } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { setBounds } from "General/Engine/CONSTRAINTS";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { dominationGemDB } from "Databases/DominationGemDB";
import { getGemIcon } from "General/Engine/ItemUtilities";

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

export default function DominationGemSelection(props) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const singleUpdate = props.singleUpdate;
  const player = props.player;

  /* ---------------------------------------------------------------------------------------------- */
  /*                                             States                                             */
  /* ---------------------------------------------------------------------------------------------- */

  /* ----------------------------------------- Blood Gems ----------------------------------------- */
  // Bek
  const [bekLevel, setBekLevel] = useState(player.getDominationSingleRank("Shard of Bek"));
  // Jas
  const [jasLevel, setJasLevel] = useState(player.getDominationSingleRank("Shard of Jas"));
  // Rev
  const [revLevel, setRevLevel] = useState(player.getDominationSingleRank("Shard of Rev"));

  /* ----------------------------------------- Frost Gems ----------------------------------------- */
  // Cor
  const [corLevel, setCorLevel] = useState(player.getDominationSingleRank("Shard of Cor"));
  // Tel
  const [telLevel, setTelLevel] = useState(player.getDominationSingleRank("Shard of Tel"));
  // Kyr
  const [kyrLevel, setKyrLevel] = useState(player.getDominationSingleRank("Shard of Kyr"));

  /* ----------------------------------------- Unholy Gems ---------------------------------------- */
  // Dyz
  const [dyzLevel, setDyzLevel] = useState(player.getDominationSingleRank("Shard of Dyz"));
  // Zed
  const [zedLevel, setZedLevel] = useState(player.getDominationSingleRank("Shard of Zed"));
  // Oth
  const [othLevel, setOthLevel] = useState(player.getDominationSingleRank("Shard of Oth"));

  /* --------------------- On change of the domination ranks update the object -------------------- */
  useEffect(() => {
    player.setDominationRanks({
      "Shard of Bek": bekLevel,
      "Shard of Jas": jasLevel,
      "Shard of Rev": revLevel,
      "Shard of Cor": corLevel,
      "Shard of Tel": telLevel,
      "Shard of Kyr": kyrLevel,
      "Shard of Dyz": dyzLevel,
      "Shard of Zed": zedLevel,
      "Shard of Oth": othLevel,
    });
    singleUpdate(player);
    //console.log(player.getDominationRanks())
  }, [bekLevel, jasLevel, revLevel, corLevel, telLevel, kyrLevel, dyzLevel, zedLevel, othLevel]);

  /* ----------------------- List of Domination Gems in the game (Base Gem) ----------------------- */
  const dominationGems = [
    /* ------------------------------------------- Unholy ------------------------------------------- */
    "Shard of Zed",
    "Shard of Dyz",
    "Shard of Oth",
    /* -------------------------------------------- Blood ------------------------------------------- */
    "Shard of Bek",
    "Shard of Jas",
    "Shard of Rev",
    /* -------------------------------------------- Frost ------------------------------------------- */
    "Shard of Cor",
    "Shard of Tel",
    "Shard of Kyr",
  ];

  /* ---------------------- For the Gem and Rank provided set the state value --------------------- */
  const setDomGemState = (gem, rank) => {
    switch (gem) {
      /* ------------------------------------------- Unholy ------------------------------------------- */
      case "Shard of Zed":
        setZedLevel(rank);
        break;
      case "Shard of Dyz":
        setDyzLevel(rank);
        break;
      case "Shard of Oth":
        setOthLevel(rank);
        break;
      /* -------------------------------------------- Blood ------------------------------------------- */
      case "Shard of Bek":
        setBekLevel(rank);
        break;
      case "Shard of Jas":
        setJasLevel(rank);
        break;
      case "Shard of Rev":
        setRevLevel(rank);
        break;
      /* -------------------------------------------- Frost ------------------------------------------- */
      case "Shard of Cor":
        setCorLevel(rank);
        break;
      case "Shard of Tel":
        setTelLevel(rank);
        break;
      case "Shard of Kyr":
        setKyrLevel(rank);
        break;
      default:
        break;
    }
  };

  /* ------------------------- For the Gem Provided return the state value ------------------------ */
  const getDomGemvalue = (gem) => {
    switch (gem) {
      /* ------------------------------------------- Unholy ------------------------------------------- */
      case "Shard of Zed":
        return zedLevel;
      case "Shard of Dyz":
        return dyzLevel;
      case "Shard of Oth":
        return othLevel;
      /* -------------------------------------------- Blood ------------------------------------------- */
      case "Shard of Bek":
        return bekLevel;
      case "Shard of Jas":
        return jasLevel;
      case "Shard of Rev":
        return revLevel;
      /* -------------------------------------------- Frost ------------------------------------------- */
      case "Shard of Cor":
        return corLevel;
      case "Shard of Tel":
        return telLevel;
      case "Shard of Kyr":
        return kyrLevel;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={1} direction="row" style={{ width: "100%" }}>
      {dominationGems.map((key) => (
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Grid container spacing={0} style={{ padding: "0px 6px" }}>
            {/* --------------------------- Title for each selector if ever needed ---------------------------  */}

            {/* <Grid item xs={12}>
              <div style={{ display: "inline-flex" }}>
                <Typography color="primary" style={{ marginRight: 4 }} noWrap>
                  {dominationGemDB.filter((filter) => filter.effect.name === key && filter.effect.rank === 0).map((key) => key.name[currentLanguage])}
                </Typography>
                <Tooltip
                  title={
                    <Typography align="center" variant="body2">
                      Icon Tooltip
                    </Typography>
                  }
                  placement="top-start"
                >
                  <InfoOutlinedIcon style={{ height: 15, width: 15 }} fontSize="medium" />
                </Tooltip>
              </div>
            </Grid> */}

            <Grid item xs={12}>
              {/* ------------------------------------ Domination Delection ------------------------------------  */}
              <FormControl variant="outlined" size="small" fullWidth style={{ textAlign: "center" }}>
                <Select labelId="groupValue" value={getDomGemvalue(key)} onChange={(e) => setDomGemState(key, e.target.value)} MenuProps={menuStyle} style={{ fontSize: 14 }}>
                  {/* 
                  // Map the Domination DB filtered by the gem provided from the original mapping
                  //  in to a menu item for each rank for the select 
                  */}
                  <MenuItem value={-1} style={{ justifyContent: "left", fontSize: 14 }}>
                    {dominationGemDB.filter((filter) => filter.effect.name === key && filter.effect.rank === 0).map((key) => key.name[currentLanguage]) + " " + t("DominationSelection.ShardNotOwned")}
                  </MenuItem>
                  <Divider />
                  {dominationGemDB
                    .filter((filter) => filter.effect.name === key)
                    .map((key) => (
                      <MenuItem value={key.effect.rank} style={{ justifyContent: "left", fontSize: 14 }}>
                        <a data-wowhead={"item=" + key.gemID}>
                          <img
                            style={{
                              height: 20,
                              width: 20,
                              margin: "0px 5px 0px 0px",
                              verticalAlign: "middle",
                              borderRadius: 4,
                              border: "1px solid rgba(255, 255, 255, 0.12)",
                            }}
                            src={getGemIcon(key.gemID)}
                            alt={key.name[currentLanguage]}
                          />
                        </a>
                        {key.name[currentLanguage] + " " + "(" + (key.effect.rank + 1) + ")"}
                      </MenuItem>
                    ))
                    /* ------------------------------ Map the Menu Item with a Divider ------------------------------ */
                    .map((menuItem) => [menuItem, <Divider />])}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
