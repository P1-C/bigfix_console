import {Autocomplete, TextField, ThemeProvider, ToggleButton, ToggleButtonGroup, createTheme} from '@mui/material';
import React, {useState} from 'react';
import {DOMAINS, EXISTING_SITES} from '../MOCK_DATA';
import {Box} from '@mui/system';
import ClearIcon from '@mui/icons-material/Clear';
import DraggableTable from './DraggableTable';

const Baseline = () => {
    const [value, setValue] = useState('description');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const buttonStyles = {
        display: 'flex',
        justifyContent: 'start',
        gap: '1rem',
        flex: 1,
        color: 'white'
    };

    const textFieldStyles = {
        width: 400,
        background: 'transparent',
        color: 'white',
        input: {color: 'white'},
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
        },
    };

    const theme = createTheme({
        palette: {
            blue: {
                main: '#4EEAF6',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <div style={{padding: '1rem'}}>Create a Baseline</div>
                <div style={buttonStyles}>
                    <TextField
                        label="Name"
                        InputLabelProps={{
                            style: {color: 'white'},
                        }}
                        sx={textFieldStyles}

                    />
                    <Autocomplete
                        options={EXISTING_SITES}
                        renderInput={(params) => <TextField {...params} label="Site" InputLabelProps={{
                            style: {color: 'white'},
                        }}
                            sx={textFieldStyles} />}
                        InputProps={{
                            style: {borderColor: 'white'},
                        }}
                        clearIcon={<ClearIcon sx={{color: 'white'}} />}
                        sx={{textFieldStyles}}
                    />
                    <Autocomplete
                        options={DOMAINS}
                        renderInput={(params) => <TextField {...params} InputLabelProps={{
                            style: {color: 'white'},
                        }}
                            label="Create in domain"
                            sx={textFieldStyles} />}
                        InputProps={{
                            style: {borderColor: 'white'},
                        }}
                        clearIcon={<ClearIcon sx={{color: 'white'}} />}
                        sx={{textFieldStyles}}
                    />

                </div>
                <ToggleButtonGroup
                    value={value}
                    onChange={handleChange}
                    exclusive
                    color='blue'
                    sx={{color: 'white', margin: '0.8rem 0'}}
                    fullWidth

                >
                    <ToggleButton variant='outlined' sx={{color: 'white'}} value='description'>Description</ToggleButton>
                    <ToggleButton variant='outlined' sx={{color: 'white'}} value='components'>Components</ToggleButton>
                    <ToggleButton variant='outlined' sx={{color: 'white'}} value='relevance'>Relevance</ToggleButton>
                    <ToggleButton variant='outlined' sx={{color: 'white'}} value='properties'>Properties</ToggleButton>
                </ToggleButtonGroup>

                <DraggableTable />
            </Box>
        </ThemeProvider>
    );
};

export default Baseline;
