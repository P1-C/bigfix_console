export const consoleData = [
    {
        title: 'Fixlets and Tasks',
        count: 114
    },
    {
        title: 'Webui apps',
        count: 11
    },
    {
        title: 'Baselines',
        count: 8
    },
    {
        title: 'Analyses',
        count: 30
    },
    {
        title: 'Actions',
        count: 12
    }
];

export const DeploymentOverviewOptions = [{
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
        text: "Deployment Information",
        fontColor: "white",
        fontFamily: "Arial, sans-serif",
    },
    data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 12,
        indexLabelFontColor: "white",
        indexLabel: "{label} - {y}",
        dataPoints: [
            {y: 23, label: "Devices Managed", color: '#FF5733'},
            {y: 23, label: "Agents Deployed", color: '#5733FF'},
            {y: 22, label: "Agents Reported "},

        ]
    }],
    legend: {
        fontColor: "white",
    },
    width: 390,
    height: 300
},
{
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
        text: "Usage Statistics",
        fontColor: "white",
        fontFamily: "Arial, sans-serif",
    },
    data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 12,
        indexLabelFontColor: "white",
        indexLabel: "{label} - {y}",
        dataPoints: [
            {y: 48, label: "Days Using Bigfix"},
            {y: 187, label: "Actions Deployed"},
            {y: 60, label: "Open Actions"},
        ]
    }],
    legend: {
        fontColor: "white",
    },
    width: 390,
    height: 300
},
];

export const actionColumns = [
    {field: 'timeIssued', headerName: 'Time Issued', flex: 1},
    {field: 'state', headerName: 'State', flex: 1},
    {field: 'complete', headerName: '% Completed', flex: 1},
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'site', headerName: 'Site', flex: 1},
    {field: 'issuedBy', headerName: 'Issued By', flex: 1},
    {field: 'type', headerName: 'Type', flex: 1},
];

export const actionRows = [
    {id: 1, timeIssued: '1/24/2024 3: 58: 16 PM', state: 'Expired', complete: '100.00% (1 / 1)', name: 'Accept License for Patch', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
    {id: 2, timeIssued: '1/24/2024 3: 58: 17 PM', state: 'Expired', complete: '100.00% (1 / 1)', name: 'Accept License for Patch', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
    {id: 3, timeIssued: '12/19/2023 12:37:47 PM', state: 'Expired', complete: '100.00 % (1 / 1)', name: 'Accept License for Lifecycle', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'	},
    {id: 4, timeIssued: '12/19/2023 12:37:45 PM', state: 'Expired', complete: '100.00 % (1 / 1)', name: 'Accept License for Lifecycle', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'	},
    {id: 5, timeIssued: '1/24/2024 3:58:15 PM', state: 'Expired', complete: '100.00% (1 / 1)', name: 'Accept License for Patch', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
    {id: 6, timeIssued: '1/24/2024 3:58:14 PM', state: 'Expired', complete: '100.00% (1 / 1)', name: 'Accept License for Patch', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
];