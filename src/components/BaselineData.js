import {DataGrid} from '@mui/x-data-grid';
import React from 'react';
import {BASELINE_COLUMNS, BASELINE_ROWS} from '../MOCK_DATA';
import {useTheme} from '@emotion/react';

const BaselineData = () => {
    const theme = useTheme()
    
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
            color: theme.palette.text.primary
        },
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
