import {IconButton, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {ACTION_COLUMNS, ACTION_ROWS} from '../MOCK_DATA';
import DrawerComponent from './DrawerComponent';

const Actions = () => {

    const [open, setOpen] = useState(false);

    const closeDrawer = () => {
        setOpen(false);
    };


    const actionHeaderStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const searchbarStyles = {
        border: '0.01em solid white',
        borderRadius: '0.3rem'
    };

    const dataGridStyles = {
        '& .MuiDataGrid-columnHeader': {
            color: "white",
            fontWeight: 700,
        },
        '& .MuiDataGrid-columnSeparator': {
            display: 'none',
        },
        '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: '#7752FE'
        },
        '& .MuiDataGrid-row:hover, & .MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: '#7752FE'
        },
        "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
        },
        '& .MuiDataGrid-columnHeader--selected': {
            outline: 'none',
        },
        color: 'white',
        '& .MuiDataGrid-sortIcon, & .MuiDataGrid-menuIconButton': {
            color: 'white',
        },
        '& .MuiCheckbox-root svg path': {
            color: 'white'
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
                        sx={{padding: '0.2rem', color: 'white'}}
                    />
                    <IconButton type="button" aria-label="search">
                        <SearchIcon sx={{color: 'white'}}/>
                    </IconButton>
                </div>
            </div>
            <div style={{height: '79vh', width: 'calc(100vw - 170)'}}>
                <DataGrid
                    sx={dataGridStyles}
                    rows={ACTION_ROWS}
                    columns={ACTION_COLUMNS}
                    checkboxSelection
                    hideFooter
                    onCellClick={() => {setOpen(true);}}
                />
            </div>
            <DrawerComponent open={open} onClose={closeDrawer} />

        </div>
    );
};

export default Actions;
