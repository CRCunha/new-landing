import React from 'react';
import { Grid } from '@material-ui/core';
import HeaderBar from '../headerBar';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <Grid continer>
        <Grid item xs={12}>
          <Grid className={classes.headerContainer} container justify="center">
            <HeaderBar />
            <Grid item xs={12}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Grid container justify="flex-end" style={{ marginTop: 50 }}>
                    <Grid item xs={10} style={{ color: '#403c54' }}>
                      <h1 style={{ fontSize: '3em' }}>TITLE HERE</h1>
                      <h3 style={{ fontWeight: 400 }}>
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </h3>
                      <div
                        style={{
                          width: 100,
                          backgroundColor: '#bdb8f7',
                          padding: '15px 50px',
                          textAlign: 'center',
                          borderRadius: 30,
                          color: '#fff',
                          fontWeight: 'bold',
                          marginTop: 80,
                          cursor: 'pointer',
                          borderBottom: '4px solid #8c84eb',
                        }}
                        className={classes.buttonHeader}
                      >
                        Try Now
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={8} className={classes.imageContainer}>
                  <img
                    src="https://cdn-cjcko.nitrocdn.com/XdoOkxIDItJjdWPpqABCxBpnHWHcbqQU/assets/static/optimized/rev-8430fab/wp-content/uploads/2020/07/undraw_experience_design_eq3j-1024x694.png"
                    alt="headerImage"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.svgContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="M0,64L120,80C240,96,480,128,720,133.3C960,139,1200,117,1320,106.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
