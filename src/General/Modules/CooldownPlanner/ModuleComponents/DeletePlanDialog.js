import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField, DialogContent, DialogTitle, Dialog, DialogActions, Grid, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

AddPlanDialog.propTypes = {
  handleAddPlanDialogClose: PropTypes.func.isRequired,
  openAddPlanDialog: PropTypes.bool.isRequired,
  enteredPlanName: PropTypes.string.isRequired,
};

const deleteTheme = createMuiTheme({
  palette: {
    primary: red,
  },
});

export default function AddPlanDialog(props) {
  const { handleDeletePlanDialogClose, currentPlan, openDeletePlanDialog, cooldownObject, currentBoss, setCurrentPlan, setData } = props;
  const [deleteChecker, setdeleteChecker] = useState("");

  const handleClose = () => {
    handleDeletePlanDialogClose(true);
  };

  const deleteCheck = (event) => {
    setdeleteChecker(event.target.value);
  };

  const deletePlan = (planName, boss) => {
    cooldownObject.deletePlan(planName, boss);
    setCurrentPlan("");
    handleDeletePlanDialogClose(true);
    setdeleteChecker("");
    setData([])
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={openDeletePlanDialog}>
      <DialogTitle id="simple-dialog-title">Are you sure you want to delete the current plan?</DialogTitle>
      <DialogContent>
        <TextField variant="outlined" fullWidth id="standard-required" label="Type 'Delete' to confirm" defaultValue="" value={deleteChecker} onChange={deleteCheck} />
      </DialogContent>
      <DialogActions>
        <ThemeProvider theme={deleteTheme}>
          <Button
            key={"deletePlanButton"}
            variant="contained"
            color="primary"
            onClick={(e) => deletePlan(currentPlan, currentBoss)}
            size="small"
            disabled={deleteChecker === "Delete" || deleteChecker === "delete" ? false : true}
          >
            Delete Plan
          </Button>
        </ThemeProvider>
      </DialogActions>
    </Dialog>
  );
}
