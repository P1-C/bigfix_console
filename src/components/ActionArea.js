import {ExpandMore} from '@mui/icons-material';
import {Accordion, AccordionDetails, AccordionSummary, Divider, FormControlLabel, FormLabel, List, ListItemIcon, ListItemText, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {FormControl} from '@mui/base';
import ComputersDataTable from './ComputersDataTable';
import {useTheme} from '@emotion/react';



const ActionArea = ({value}) => {

    const theme = useTheme();

    if (value === 'summary') {
        return (
            <div style={{overflow: 'hidden'}}>
                <Accordion defaultExpanded style={{backgroundColor: theme.palette.mode === 'dark' ? 'black' : theme.palette.background.default, color: theme.palette.text.primary}}>
                    <AccordionSummary
                        expandIcon={<ExpandMore sx={{color: theme.palette.text.primary}} />}>
                        <strong>Status</strong>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>100.00% Completed (1 of 1 applicable computers)</Typography>
                        <TableContainer component={Paper}>
                            <Table style={{backgroundColor: theme.palette.mode === 'dark' ? 'black' : theme.palette.background.default, border: `0.08rem solid ${theme.palette.text.primary}`}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{color: theme.palette.text.primary}}>Status</TableCell>
                                        <TableCell style={{color: theme.palette.text.primary}}>Count</TableCell>
                                        <TableCell style={{color: theme.palette.text.primary}}>Percentage</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{color: theme.palette.text.primary}}>Completed</TableCell>
                                        <TableCell style={{color: theme.palette.text.primary}}>1</TableCell>
                                        <TableCell style={{color: theme.palette.text.primary}}>100.00%</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: theme.palette.mode === 'dark' ? 'black' : theme.palette.background.default, color: theme.palette.text.primary}}>
                    <AccordionSummary
                        expandIcon={<ExpandMore sx={{color: theme.palette.text.primary}} />}>
                        <strong>Behaviour</strong>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography><strong>Messages</strong></Typography>
                            <Typography component='p'>No user interface will be shown before running this action. </Typography>
                            <Typography component='p'>No message will be shown while running this action.</Typography><br />
                            <Typography><strong>Users</strong></Typography>
                            <Typography component='p'>This action will run independently of user presence.</Typography>
                            <Typography component='p'>User interface will be shown to all users.</Typography><br />
                            <Typography><strong>Execution</strong></Typography>
                            <Typography component='p'>This action ends 1/26/2024 3:58:16 PM client local time.</Typography>
                            <Typography component='p'>It will run at any time of day, on any day of the week.</Typography>
                            <Typography component='p'>If the action becomes relevant after it has successfully executed, the action will not be reapplied.</Typography>
                            <Typography component='p'>If the action fails, it will be retried up to 3 times, waiting 10 minutes between attempts.</Typography><br />
                            <Typography><strong>Post-Action</strong></Typography>
                            <Typography component='p'>No operations will occur after the action completes.</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: theme.palette.mode === 'dark' ? 'black' : theme.palette.background.default, color: theme.palette.text.primary}}>
                    <AccordionSummary expandIcon={<ExpandMore sx={{color: theme.palette.text.primary}} />}>
                        <strong>Details</strong>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component='p'><strong>Relevance</strong></Typography>
                        <List style={{display: 'flex', flexDirection: 'column', gap: '0.4rem'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <ListItemText primary='exists main gather service' />
                                <ListItemIcon>
                                    <ContentCopyIcon style={{cursor: 'pointer', color: theme.palette.text.primary}} />
                                </ListItemIcon>
                            </div>
                            <Divider style={{color: theme.palette.text.primary}} />
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <ListItemText primary='name of operating system as lowercase starts with "win"' />
                                <ListItemIcon>
                                    <ContentCopyIcon style={{cursor: 'pointer', color: theme.palette.text.primary}} />
                                </ListItemIcon>
                            </div>
                            <Divider />
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <ListItemText primary='not exists values "PROCESSOR_ARCHITECTURE" whose ..."' />
                                <ListItemIcon>
                                    <ContentCopyIcon style={{cursor: 'pointer', color: theme.palette.text.primary}} />
                                </ListItemIcon>
                            </div>
                            <Divider />
                        </List>
                        <Typography component='p'><strong>Action Script</strong></Typography>
                        <p style={{color: '#40A2E3', textDecoration: 'underline', cursor: 'pointer'}}>Action Script</p>
                    </AccordionDetails>
                </Accordion>


            </div>
        );
    }
    else if (value === 'reportedComputers') {
        return (
            <ComputersDataTable name={'Computers(1)'} />
        );
    }
    else if (value === 'target') {
        return (
            <div>
                <FormControl>
                    <FormLabel style={{color: theme.palette.text.primary}}>Target</FormLabel>
                    <RadioGroup
                        row
                        defaultValue="selectedDevices"
                    >
                        <FormControlLabel value="selectDevices" control={<Radio sx={{color: theme.palette.text.primary}} />} label="Select devices" />
                        <FormControlLabel value="dynamicTarget" control={<Radio sx={{color: theme.palette.text.primary}} />} label="Dynamically target by property" />
                        <FormControlLabel value="enterDeviceNames" control={<Radio sx={{color: theme.palette.text.primary}} />} label="Enter Device Names" />
                    </RadioGroup>
                </FormControl>
                <ComputersDataTable name={'Selected Computers'} />
            </div>
        );
    }

};

export default ActionArea;
