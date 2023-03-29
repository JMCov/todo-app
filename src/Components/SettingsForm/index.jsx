import React, { useContext, useEffect, useState } from 'react';
import { createStyles, Grid, Switch, NumberInput  } from '@mantine/core';
import { SettingsContext } from '../../Context/Settings';
import './settings.css'

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  }
}));

const Settings = () => {
  const { classes } = useStyles();
  const { displayCount, showComplete, sort, setDisplayCount, setShowComplete, setSort } = useContext(SettingsContext);

  return (
    <>
      <h1 className={classes.h1}>Manage Settings</h1>
      <Grid style={{width: '80%', margin: 'auto'}}>
        <Grid.Col xs={12} sm={4}>
          <form className="form-container">

            <h2 className="form-h2">Update Settings</h2>

            <Switch className="switch" label="Show Completed ToDos"/>

            <NumberInput className="number" defaultValue={3} label="Items Per Page"/>

            <label className="sort">
              <span>Sort Keyword</span>
              <input name="sort" type="text" placeholder="difficulty" />
            </label>

            <label className="submit-button">
              <button type="submit">Show New Settings</button>
            </label>
          </form>
        </Grid.Col>

        <Grid.Col xs={12} sm={8}>
          <div className="updated-settings">
            <h2 className="form-h2">Updated Settings</h2>
            <p>Place Holder for Showing todos</p>
            <p>Items PerPage</p>
            <p>Sort Keyword</p>
          </div>
        </Grid.Col>

      </Grid>
    </>
  );
};

export default Settings;
