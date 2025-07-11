import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { languages } from '../data/languages';

const Languages: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Lenguajes de Programación
      </Typography>
      <List>
        {languages.map((language, index) => (
          <ListItem key={index}>
            <Typography variant="body1">{language.name} - {language.proficiency}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Languages;