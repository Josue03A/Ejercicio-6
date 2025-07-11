import React from 'react';
import { experience } from '../data/experience';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const Experience: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Experiencia Profesional
      </Typography>
      {experience.map((job, index) => (
        <Card key={index} variant="outlined" style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6">{job.jobTitle}</Typography>
            <Typography color="textSecondary">{job.company}</Typography>
            <Typography variant="body2" color="textSecondary">{job.duration}</Typography>
            <List>
              {job.responsibilities.map((responsibility, idx) => (
                <ListItem key={idx}>
                  <Typography variant="body2">{responsibility}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Experience;