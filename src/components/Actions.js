import {IconButton, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {ACTION_COLUMNS, ACTION_ROWS} from '../MOCK_DATA';
import DrawerComponent from './DrawerComponent';
import { useTheme } from '@emotion/react';

const Actions = () => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const closeDrawer = () => {
        setOpen(false);
    };


    const actionHeaderStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const searchbarStyles = {
        border: `0.01em solid ${theme.palette.text.primary}`,
        borderRadius: '0.3rem'
    };

    const dataGridStyles = {
        
        '& .MuiDataGrid-columnHeader': {
            color: theme.palette.text.primary,
            fontWeight: 700,
        },
        '& .MuiDataGrid-columnSeparator': {
            display: 'none',
        },
        '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: '#7752FE',
            color: 'white'
        },
        '& .MuiDataGrid-row:hover, & .MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: '#7752FE',
            color: 'white'
        },
        "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
        },
        '& .MuiDataGrid-columnHeader--selected': {
            outline: 'none',
        },
        color: theme.palette.text.primary,
        '& .MuiDataGrid-sortIcon, & .MuiDataGrid-menuIconButton': {
            color: theme.palette.text.primary,
        },
        '& .MuiCheckbox-root svg path': {
            color: theme.palette.text.secondary
        },
    };



    return (
        <div>
            <div style={actionHeaderStyles}>
                <h3>Actions</h3>
                <div style={searchbarStyles}>
                    <InputBase
                        placeholder="  Search"
                        color='success'
                        sx={{padding: '0.2rem'}}
                    />
                    <IconButton type="button" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>
            <div >
                <DataGrid
                    sx={dataGridStyles}
                    rows={ACTION_ROWS}
                    columns={ACTION_COLUMNS}
                    checkboxSelection
                    onCellClick={() => {setOpen(true);}}
                />
            </div>
            <DrawerComponent open={open} onClose={closeDrawer} />

        </div>
    );
};

export default Actions;
