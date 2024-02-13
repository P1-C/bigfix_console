import {Autocomplete, TextField, ThemeProvider, ToggleButton, ToggleButtonGroup, createTheme} from '@mui/material';
import React, {useState} from 'react';
import {DOMAINS, EXISTING_SITES} from '../MOCK_DATA';
import {Box} from '@mui/system';
import ClearIcon from '@mui/icons-material/Clear';
import DraggableTable from './DraggableTable';
import {useTheme} from '@emotion/react';
import {blue} from '@mui/material/colors';

const Baseline = () => {
    const [value, setValue] = useState('description');
    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const theme = useTheme();

    const buttonStyles = {
        display: 'flex',
        justifyContent: 'start',
        gap: '1rem',
        flex: 1,
        // color: theme.palette.text.primary
    };

    const textFieldStyles = {
        width: 400,
        background: 'transparent',
        color: theme.palette.text.primary,
        input: {color: theme.palette.text.primary},
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.primary,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.primary
        },
    };


    return (
        <Box>
            <div style={{padding: '1rem'}}>Create a Baseline</div>
            <div style={buttonStyles}>
                <TextField
                    label="Name"
                    InputLabelProps={{
                        style: {color: theme.palette.text.primary},
                    }}
                    sx={textFieldStyles}

                />
                <Autocomplete
                    options={EXISTING_SITES}
                    renderInput={(params) => <TextField {...params} label="Site" InputLabelProps={{
                        style: {color: theme.palette.text.primary},
                    }}
                        sx={textFieldStyles} />}
                    InputProps={{
                        style: {borderColor: theme.palette.text.primary},
                    }}
                    clearIcon={<ClearIcon sx={{color: theme.palette.text.primary}} />}
                    sx={{textFieldStyles}}
                />
                <Autocomplete
                    options={DOMAINS}
                    renderInput={(params) => <TextField {...params} InputLabelProps={{
                        style: {color: theme.palette.text.primary},
                    }}
                        label="Create in domain"
                        sx={textFieldStyles} />}
                    InputProps={{
                        style: {borderColor: theme.palette.text.primary},
                    }}
                    clearIcon={<ClearIcon sx={{color: theme.palette.text.primary}} />}
                    sx={{textFieldStyles}}
                />

            </div>
            <ToggleButtonGroup
                value={value}
                onChange={handleChange}
                exclusive
                color={theme.palette.mode === 'dark' ? 'success' : 'info'}
                sx={{margin: '0.8rem 0'}}
                fullWidth

            >
                <ToggleButton variant='outlined' sx={{color: theme.palette.text.primary}} value='description'>Description</ToggleButton>
                <ToggleButton variant='outlined' sx={{color: theme.palette.text.primary}} value='components'>Components</ToggleButton>
                <ToggleButton variant='outlined' sx={{color: theme.palette.text.primary}} value='relevance'>Relevance</ToggleButton>
                <ToggleButton variant='outlined' sx={{color: theme.palette.text.primary}} value='properties'>Properties</ToggleButton>
            </ToggleButtonGroup>

            <DraggableTable />
        </Box>
    );
};

export default Baseline;
