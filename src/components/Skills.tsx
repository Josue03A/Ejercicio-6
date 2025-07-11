import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Habilidades
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skillCategory) => (
          <Grid item xs={12} sm={6} md={4} key={skillCategory.category}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {skillCategory.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skillCategory.skills.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;