import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useTheme } from '@emotion/react';


const notifications = [
    { title: 'Custom Fixlet Action', message: 'Custom fixlet action executed on Computer-BLMYCLDTW83928.', date: '7 hours ago' },
    { title: 'Software Deployment', message: 'Software deployment of Adobe Acrobat Reader has completed successfully on Computer-BLMYCLDTW25566.', date: '5 minutes ago' },
    { title: 'Patch Management', message: 'Critical security patches applied on Computer-BLMYCLDTW25584.', date: '1 hour ago' },
    { title: 'System Restart', message: 'A system restart is scheduled on Computer-GHFYCLDTW25584 to complete updates.', date: '2 hours ago' },
    { title: 'Security Configuration', message: 'Security configuration changes applied on Computer-BLMYCLDTW14587.', date: '3 hours ago' },
    { title: 'License Compliance', message: 'License compliance check passed on Computer-BLMYCLDTW93845.', date: '6 hours ago' },
    { title: 'Task Completion', message: 'Task \'Update Antivirus Definitions\' completed successfully on Computer-BLMYCLDTW28374.', date: 'Yesterday' },
    { title: 'Inventory Update', message: 'Hardware and software inventory updated for Computer-BLMYCLDTW87244.', date: 'Yesterday' },
];


const NotificationPage = () => {
    const theme = useTheme()
    const cellStyle = { borderBottom: `2px solid ${theme.palette.text.disabled}`, color: theme.palette.text.primary }
    return (
        <>
            <h3>
                All Notifications
            </h3>
            <TableContainer component={Paper} elevation={3} sx={{
                backdropFilter: 'blur(4px)',
                background: 'rgba(255, 255, 255, 0.1)',
                borderLeft: `2px solid ${theme.palette.text.disabled}`,
                borderRight: `2px solid ${theme.palette.text.disabled}`,
                borderTop: `2px solid ${theme.palette.text.disabled}`,
                borderRadius: '15px',
            }} >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ ...cellStyle, fontSize: 18 }}>Category</TableCell>
                            <TableCell sx={{ ...cellStyle, fontSize: 18 }}>Date</TableCell>
                            <TableCell sx={{ ...cellStyle, fontSize: 18 }}>Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ color: 'white' }}>
                        {notifications.map((notification, index) => (
                            <TableRow key={index} >
                                <TableCell sx={cellStyle}>{notification.title}</TableCell>
                                <TableCell sx={cellStyle}>{notification.date}</TableCell>
                                <TableCell sx={cellStyle}>{notification.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default NotificationPage;
