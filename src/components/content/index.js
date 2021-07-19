import React from 'react';
import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import CategoryIcon from '@material-ui/icons/Category';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.conentContainer}>
      <Grid item xs={10}>
        <h1 style={{ fontSize: '2em' }}>TITLE HERE</h1>
        <Grid container>
          <motion.div
            animate={{ scale: [0.9, 1] }}
            transition={{ duration: 0.5 }}
            className={classes.cardContainer}
          >
            <div className={classes.cardCornerLeft}>
              <div className={classes.container}>
                <div className={classes.iconContainer}>
                  <div className={classes.iconCircle}>
                    <CategoryIcon className={classes.icon} />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.container}>
                <div className={classes.iconContainer}>
                  <div className={classes.iconCircle}>
                    <CategoryIcon className={classes.icon} />
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.cardCornerRight}>
              <div className={classes.container}>
                <div className={classes.iconContainer}>
                  <div className={classes.iconCircle}>
                    <CategoryIcon className={classes.icon} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
}
