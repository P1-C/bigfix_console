import {DataGrid} from '@mui/x-data-grid';
import React from 'react';
import {BASELINE_COLUMNS, BASELINE_ROWS} from '../MOCK_DATA';

const BaselineData = () => {
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
        margin: '1rem 0',
        height: '80vh',
        '& .MuiToolbar-root': {
            color: 'white'
        },
        '& .MuiSvgIcon-root': {
            color: 'white'
        }
    };
    return (
        <DataGrid
            rows={BASELINE_ROWS}
            columns={BASELINE_COLUMNS}
            sx={dataGridStyles}
        />
    );
};

export default BaselineData;
