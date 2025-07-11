import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Proyectos
      </Typography>
      {projects.map((project, index) => (
        <Card key={index} variant="outlined" style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {project.description}
            </Typography>
            <Button variant="contained" color="primary" href={project.link} target="_blank" style={{ marginTop: '10px' }}>
              Ver Proyecto
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;