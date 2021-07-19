import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <Grid item xs={10} className={classes.headerBarContainer}>
      <Grid container>
        <Grid item xs={3} className={classes.LogoContainer}>
          <img
            src="https://png2.cleanpng.com/sh/34035a0b99ec44de02a1e297a2c9521b/L0KzQYm3VsI0N6F2ipH0aYP2gLBuTfNqepRxfZ95b3nxhH70gfdmdqVmRdV1aYCwccP7TgRie6VqRdHvLXT4fcHzif5oe146eqRuZEW6QLTohcdlOV89SKkBNkC0Q4K8Usk4QWYATaQDM0G1PsH1h5==/kisspng-circle-point-magenta-clip-art-taste-of-dumplings-5b2ed570cae7d1.8076601315297959528312.png"
            alt="brand"
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container className={classes.menu}>
            <div className={classes.menuIten}>Menu</div>
            <div className={classes.menuIten}>Menu</div>
            <div className={classes.menuIten}>Menu</div>
            <div className={classes.menuIten}>Menu</div>
            <div className={classes.menuIten}>Menu</div>
            <div className={classes.menuIten}>Menu</div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
