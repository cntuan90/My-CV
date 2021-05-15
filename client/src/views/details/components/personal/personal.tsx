import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';
import TodayIcon from '@material-ui/icons/Today';
import moment from 'moment';
import React from 'react';
import { ProfileType } from '../../../../data/profile';
import PersonalItem from './personal.item';

const useStyles = makeStyles(() => ({
  root: {
    color: '#eeeeee',
    padding: 30,
  },
}));

interface Props {
  profile: ProfileType;
}

const Personal: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>PERSONAL INFORMATIONS</strong>
      </Typography>

      <List>
        {props.profile.personals.map((personal, index) => (
          <PersonalItem key={index} personal={personal} />
        ))}
      </List>
    </Box>
  );
};

export default Personal;
