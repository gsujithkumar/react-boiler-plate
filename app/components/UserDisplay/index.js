/**
 *
 * UserDisplay
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 750,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function UserDisplay({ users }) {
  const classes = useStyles();
  return (<div>
    {/* {
      users && users.map((user, index) => {
        return (
          <div key={user.id}>
            <span> User First Name : </span> {user.first_name} <br />
            <span> User Last Name : </span> {user.last_name} <br />
            <span> User Email : </span> {user.email} <br />
            <img src={user.avatar}></img>
          </div>
        )
      })
    } */}

    {/* <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={3}>
        {users.map((user) => (
          <GridListTile key={user.id} cols={1}>
            <img src={user.avatar} alt={user.first_name}  />
        <label>Name : {user.first_name} ,  {user.first_name}</label>
          </GridListTile>
        ))}
      </GridList>
    </div> */}

<div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Users</ListSubheader>
        </GridListTile>
        {users.map((user) => (
          <GridListTile key={user.avatar}>
            <img src={user.avatar} alt={user.first_name} />
            <GridListTileBar
              title={user.last_name + ", " + user.first_name}
              subtitle={<span>Email: {user.email}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${user.first_name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  </div>  
  );
}

UserDisplay.propTypes = {};

export default memo(UserDisplay);
