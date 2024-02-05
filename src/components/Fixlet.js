import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import useNotificationStore from "../stores/notificationStore";

const rows = [
  {
    id: 1,
    name: "BES Client setting: CPU Usage",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "BES Client",
    downloadSize: "NA",
    openAction: 0,
  },
  {
    id: 2,
    name: "BES Client setting: Enable Debug Logging",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "BES Client",
    downloadSize: "NA",
    openAction: 0,
  },
  {
    id: 3,
    name: "BES Client setting: Lock Computer",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "BES Client",
    downloadSize: "NA",
    openAction: 0,
  },
  {
    id: 4,
    name: "BES Client setting: Enable Auto Relay Selection",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "BES Client",
    downloadSize: "NA",
    openAction: 0,
  },
  {
    id: 5,
    name: "BES Quick Reference- Production",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "Support",
    downloadSize: "NA",
    openAction: 0,
  },
  {
    id: 6,
    name: "Change console log level",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "Internal",
    downloadSize: "NA",
    openAction: 0,
  },
  {
    id: 7,
    name: "Install BigFix Helper Service",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "Support",
    downloadSize: "NA",
    openAction: 0,
  },
  {
    id: 8,
    name: "Restart Needed",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "Computer Support",
    downloadSize: "NA",
    openAction: 0,
  },
  {
    id: 9,
    name: "Stop Service",
    site: "BES Support",
    source: "BigFix",
    applicableComputers: "1/1",
    category: "Common Tasks",
    downloadSize: "NA",
    openAction: 0,
  },
];

export default function Fixlet() {
  const { showNotification } = useNotificationStore();
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              showNotification(`${params.row.name} is running currently.....`);
              setTimeout(() => { showNotification(`${params.row.name} has been Applied successfully`) }, 10000)
            }}
          >
            Submit
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <h3>Fixlets</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 8, 10]}
        checkboxSelection
        sx={{
          color: "white",
          height: "80%",
          backdropFilter: "blur('4px')",
          background: "rgba(255, 255, 255, 0.1)",
          '& .MuiCheckbox-root svg path': {
            color: 'white'
          },
          '& .MuiToolbar-root': {
            color: 'white'
          },
          '& .MuiSvgIcon-root': {
            color: 'white'
          }
        }}
      />
    </>
  );
}
