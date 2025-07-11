import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { personalData } from '../data/personalData';

const AboutMe: React.FC = () => {
  return (
    <Card variant="outlined" style={{ margin: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {personalData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {personalData.bio}
        </Typography>
        <img src={personalData.photo} alt="Profile" style={{ width: '150px', borderRadius: '50%', marginTop: '10px' }} />
      </CardContent>
    </Card>
  );
};

export default AboutMe;