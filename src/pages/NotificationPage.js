import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/system';

const notifications = [
    { title: 'Software Deployment', message: 'Software deployment of [Software Name] has completed successfully on [Computer Name].', date: '5 minutes ago' },
    { title: 'Patch Management', message: 'Critical security patches applied on [Computer Name].', date: '1 hour ago' },
    { title: 'System Restart', message: 'A system restart is scheduled on [Computer Name] to complete updates.', date: '2 hours ago' },
    { title: 'Security Configuration', message: 'Security configuration changes applied on [Computer Name].', date: '3 hours ago' },
    { title: 'Task Completion', message: 'Task \'[Task Name]\' completed successfully on [Computer Name].', date: '4 hours ago' },
    { title: 'Inventory Update', message: 'Hardware and software inventory updated for [Computer Name].', date: '5 hours ago' },
    { title: 'License Compliance', message: 'License compliance check passed on [Computer Name].', date: '6 hours ago' },
    { title: 'Custom Fixlet Action', message: 'Custom fixlet action executed on [Computer Name].', date: '7 hours ago' },
  ];

const NotificationPage = () => {
  return (
    <>
      <h3>
        All Notifications
      </h3>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ color: 'white'}}>
          {notifications.map((notification, index) => (
            <TableRow key={index}>
              <TableCell>{notification.title}</TableCell>
              <TableCell>{notification.date}</TableCell>
              <TableCell>{notification.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default NotificationPage;
