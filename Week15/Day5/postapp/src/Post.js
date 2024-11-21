import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Post ( props ) {
	const { title, body } = props;
	
  return (
    <div style={{border:'1px solid'}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Title: {title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Body: {body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

