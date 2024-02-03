import {IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, {useState} from 'react';

const ComputersDataTable = ({name}) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={{display: 'flex', height: 'calc(100vh - 250px)'}}>
            <div style={{borderRight: '1px solid black', height: '100%', display: 'flex', alignItems: 'start'}}>
                <IconButton style={{padding: '0.4rem 0'}}><ArrowForwardIosIcon sx={{color: 'white'}} /></IconButton>
                <Typography style={{padding: '0.4rem 0', width: 180}}>{name}</Typography>
            </div>
            <div style={{height: '100%', border: '1px solid white'}}>
                <Table style={{backgroundColor: 'black'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color: 'white'}}>Status</TableCell>
                            <TableCell style={{color: 'white'}}>Exit Code</TableCell>
                            <TableCell style={{color: 'white'}}>Computer Name</TableCell>
                            <TableCell style={{color: 'white'}}>OS</TableCell>
                            <TableCell style={{color: 'white'}}>CPU</TableCell>
                            {
                                open ?
                                    <>
                                        <TableCell style={{color: 'white'}}>Last Report Time</TableCell>
                                        <TableCell style={{color: 'white'}}>Locked</TableCell>
                                        <TableCell style={{color: 'white'}}>BES Relay Selection Method</TableCell>
                                        <TableCell style={{color: 'white'}}>Relay</TableCell>
                                        <TableCell style={{color: 'white'}}>User Name</TableCell>
                                        <TableCell style={{color: 'white'}}>RAM</TableCell>
                                        <TableCell style={{color: 'white'}}>Free Space on System Drive</TableCell>
                                        <TableCell style={{color: 'white'}}>Total Size of System Drive</TableCell>
                                        <TableCell style={{color: 'white'}}>Subnet Address</TableCell>
                                        <ArrowBackIosIcon sx={{color: 'white', position: 'relative', top: '8.7rem', cursor: 'pointer'}} onClick={() => setOpen(false)} />
                                    </>
                                    :
                                    <ArrowForwardIosIcon sx={{color: 'white', position: 'relative', top: '2.7rem', cursor: 'pointer'}} onClick={() => {setOpen(true);}} />
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{color: 'white'}}>Fixed</TableCell>
                            <TableCell style={{color: 'white'}}>None</TableCell>
                            <TableCell style={{color: 'white'}}>BLMYCLDTW255871</TableCell>
                            <TableCell style={{color: 'white'}}>win2019</TableCell>
                            <TableCell style={{color: 'white'}}>2100 MHz</TableCell>
                            {
                                open &&
                                    <>
                                        <TableCell style={{color: 'white'}}>2/2/2024 11:46</TableCell>
                                        <TableCell style={{color: 'white'}}>No</TableCell>
                                        <TableCell style={{color: 'white'}}>Automatic</TableCell>
                                        <TableCell style={{color: 'white'}}>BES Root Server</TableCell>
                                        <TableCell style={{color: 'white'}}>buyyalachandan.kumar</TableCell>
                                        <TableCell style={{color: 'white'}}>8192 MB</TableCell>
                                        <TableCell style={{color: 'white'}}>118276 MB</TableCell>
                                        <TableCell style={{color: 'white'}}>183767 MB</TableCell>
                                        <TableCell style={{color: 'white'}}>10.115.170.0</TableCell>
                                    </>
                                    
                            }

                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ComputersDataTable;
