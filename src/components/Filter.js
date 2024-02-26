import {Button, FormControl, IconButton, InputLabel, MenuItem, Select} from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import React, {useState} from 'react';

const Filter = () => {
    const [column, setColumn] = useState({});

    const handleChange = (e, column) => {
        setColumn({...column, [column]: e.target.value});
    };
    return (
        <div style={{margin: '1rem 0', width: '100%',
        //  border: '1px solid black',padding: '0.1rem',
         display: 'flex',gap: '0.5rem'
         }}>
            <FormControl size='small'>
                <InputLabel>Site</InputLabel>
                <Select
                    size='small'
                    // variant='standard'
                    sx={{width: '10rem'}}
                    value={column.site}
                    label="Site"
                    onChange={(e) => handleChange(e, 'site')}
                >
                    <MenuItem value={'BES Support'}>BES Support</MenuItem>
                    <MenuItem value={'Patches for Windows'}>Pathces for Windows</MenuItem>
                    <MenuItem value={'Updates for windows applications'}>Updates for windows applications</MenuItem>
                </Select>
            </FormControl>
            <FormControl size='small'>
                <InputLabel>Source</InputLabel>
                <Select
                    // variant='standard'
                    sx={{width: '10rem'}}
                    value={column.source}
                    label="Source"
                    onChange={(e) => handleChange(e, 'source')}
                >
                    <MenuItem value={'Microsoft'}>Microsoft</MenuItem>
                    <MenuItem value={'HCL'}>HCL</MenuItem>
                    <MenuItem value={'Bigfix'}>Bigfix</MenuItem>
                </Select>
            </FormControl>
            <IconButton variant='outlined' sx={{padding: '0.4rem', border: '1px solid lightgray', borderRadius: 2}}>
                <RotateLeftIcon />
            </IconButton>
            <Button variant='outlined' sx={{padding: '0.4rem'}}>
                Clear
            </Button>

        </div>
    );
};

export default Filter;
