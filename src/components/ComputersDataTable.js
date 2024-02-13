import {IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, {useState} from 'react';
import {useTheme} from '@emotion/react';

const ComputersDataTable = ({name}) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const tableCellStyles = {
        color: theme.palette.text.primary
    };

    return (
        <div style={{display: 'flex', height: 'calc(100vh - 250px)'}}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'start'}}>
                <IconButton style={{padding: '0.4rem 0'}}><ArrowForwardIosIcon sx={{color: theme.palette.text.primary}} /></IconButton>
                <Typography style={{padding: '0.4rem 0', width: 180}}>{name}</Typography>
            </div>
            <div style={{height: '100%', border: `1px solid ${theme.palette.text.primary}`}}>
                <Table style={{backgroundColor: theme.palette.mode === 'dark' ? 'black' : theme.palette.background.default}}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={tableCellStyles}>Status</TableCell>
                            <TableCell style={tableCellStyles}>Exit Code</TableCell>
                            <TableCell style={tableCellStyles}>Computer Name</TableCell>
                            <TableCell style={tableCellStyles}>OS</TableCell>
                            <TableCell style={tableCellStyles}>CPU</TableCell>
                            {
                                open ?
                                    <>
                                        <TableCell style={tableCellStyles}>Last Report Time</TableCell>
                                        <TableCell style={tableCellStyles}>Locked</TableCell>
                                        <TableCell style={tableCellStyles}>BES Relay Selection Method</TableCell>
                                        <TableCell style={tableCellStyles}>Relay</TableCell>
                                        <TableCell style={tableCellStyles}>User Name</TableCell>
                                        <TableCell style={tableCellStyles}>RAM</TableCell>
                                        <TableCell style={tableCellStyles}>Free Space on System Drive</TableCell>
                                        <TableCell style={tableCellStyles}>Total Size of System Drive</TableCell>
                                        <TableCell style={tableCellStyles}>Subnet Address</TableCell>
                                        <ArrowBackIosIcon sx={{color: theme.palette.text.primary, position: 'relative', top: '8.7rem', cursor: 'pointer'}} onClick={() => setOpen(false)} />
                                    </>
                                    :
                                    <ArrowForwardIosIcon sx={{color: theme.palette.text.primary, position: 'relative', top: '2.7rem', cursor: 'pointer'}} onClick={() => {setOpen(true);}} />
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={tableCellStyles}>Fixed</TableCell>
                            <TableCell style={tableCellStyles}>None</TableCell>
                            <TableCell style={tableCellStyles}>BLMYCLDTW255871</TableCell>
                            <TableCell style={tableCellStyles}>win2019</TableCell>
                            <TableCell style={tableCellStyles}>2100 MHz</TableCell>
                            {
                                open &&
                                <>
                                    <TableCell style={tableCellStyles}>2/2/2024 11:46</TableCell>
                                    <TableCell style={tableCellStyles}>No</TableCell>
                                    <TableCell style={tableCellStyles}>Automatic</TableCell>
                                    <TableCell style={tableCellStyles}>BES Root Server</TableCell>
                                    <TableCell style={tableCellStyles}>buyyalachandan.kumar</TableCell>
                                    <TableCell style={tableCellStyles}>8192 MB</TableCell>
                                    <TableCell style={tableCellStyles}>118276 MB</TableCell>
                                    <TableCell style={tableCellStyles}>183767 MB</TableCell>
                                    <TableCell style={tableCellStyles}>10.115.170.0</TableCell>
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
