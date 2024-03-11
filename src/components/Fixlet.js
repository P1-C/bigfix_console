import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import useNotificationStore from "../stores/notificationStore";
import {useTheme} from "@emotion/react";
import Filter from "./Filter";
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import { FIXLETS_ROWS } from "../MOCK_DATA";
import NonRelevantSwitch from "./NonRelevantSwitch";

const rows = FIXLETS_ROWS


export default function Fixlet() {
  const { showNotification } = useNotificationStore();
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "site", headerName: "Site", width: 130 },
    { field: "source", headerName: "Source", width: 130 },
    {
      field: "applicableComputers",
      headerName: "Applicable computers",
      width: 90,
    },
    {
      field: "category",
      headerName: "Full name",
      width: 130,
    },
    {
      field: "downloadSize",
      headerName: "Download size",
      width: 130,
    },
    {
      field: "openAction",
      headerName: "Open Action",
      type: "number",
      width: 70,
    },
    {
      field: "button",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <IconButton
            variant="contained"
            color="primary"
            onClick={() => {
              showNotification(`${params.row.name} is running currently.....`);
              setTimeout(() => { showNotification(`${params.row.name} has been Applied successfully`) }, 10000)
            }}
          >
            <Tooltip title='deploy'>
              <PlayCircleRoundedIcon />
            </Tooltip>
          </IconButton>
        );
      },
    },
  ];
  return (
    <>
      <h3>Fixlets</h3>
      {/* <NonRelevantSwitch /> */}
      <Filter />
      <DataGrid
        density="compact"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        // disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        
        pageSizeOptions={[7, 10]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            csvOptions: { disableToolbarButton: true },
            printOptions: { disableToolbarButton: true },
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 400 },
          },
        }}
        sx={{
          // marginTop: 8,
          color: theme.palette.text.primary,
          height: "61%",
          backdropFilter: "blur('3px')",
          background: "rgba(255, 255, 255, 0.1)",
          '& .MuiCheckbox-root svg path': {
            color: theme.palette.text.primary
          },
          '& .MuiToolbar-root': {
            color: theme.palette.text.primary
          },
          '& .MuiSvgIcon-root': {
            color: theme.palette.text.primary
          }
        }}
      />
    </>
  );
}
