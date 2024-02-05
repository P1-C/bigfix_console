import {Box, Button, ButtonGroup, IconButton, Tabs, Typography} from '@mui/material';
import {Drawer} from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import Tab from '@mui/material/Tab';
import ActionArea from './ActionArea';


const DrawerComponent = ({open, onClose}) => {
    const [value, setValue] = React.useState('summary');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const buttonStyles = {
        display: 'flex',
        justifyContent: 'start',
        gap: '0.5rem',
        flex: 1,

    };
    const drawerStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: '0.8rem'
    };
    return (
        <div>
            <Drawer
                PaperProps={{
                    sx: {
                        width: '50%',
                        backgroundColor: '#0F0F0F',
                        color: 'white',
                        padding: '0.5rem'
                    }
                }}
                open={open}
                anchor='right'
                variant="persistent"
                transitionDuration={900}
            >

                <div style={drawerStyles}>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.2rem'}}>
                        <Typography variant='h6' style={{padding: '0.2rem'}}>Action: Accept Licence for Patch</Typography>
                        <IconButton onClick={onClose} sx={{color: 'whitesmoke'}}><CloseIcon /></IconButton>
                    </div>
                    <ButtonGroup style={buttonStyles} fullWidth >
                        <Button variant='contained' sx={{borderRadius: '0.6rem'}} color='error' startIcon={<StopIcon />}>Stop</Button>
                        <Button variant='contained' sx={{borderRadius: '0.6rem'}} color='success' startIcon={<ContentCopyIcon />}>Copy</Button>
                        <Button variant='contained' sx={{borderRadius: '0.6rem', color: 'white', backgroundColor: '#ff5722', '&:hover': {backgroundColor: '#e65100'}}} startIcon={<FileUploadIcon />}>Export</Button>
                        <Button variant='contained' sx={{borderRadius: '0.6rem'}} color='error' startIcon={<CloseIcon />}>Remove</Button>
                    </ButtonGroup>
                    <Box sx={{width: '100%'}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            variant='fullWidth'
                        >
                            <Tab style={{color: 'white'}} value="summary" label="Summary" />
                            <Tab style={{color: 'white'}} value="reportedComputers" label="Reported Computers" />
                            <Tab style={{color: 'white'}} value="target" label="Target" />
                        </Tabs>
                    </Box>

                    <ActionArea value={value} />
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;


