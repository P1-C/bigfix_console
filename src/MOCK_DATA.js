export const CONSOLE_DATA = [
    {
        title: 'Fixlets and Tasks',
        route: 'fixlets',
        count: 114
    },
    {
        title: 'Webui apps',
        route: 'dashboard',
        count: 11
    },
    {
        title: 'Baselines',
        route: 'baselines',
        count: 8
    },
    {
        title: 'Analyses',
        route: 'dashboard',
        count: 30
    },
    {
        title: 'Actions',
        route: 'actions',
        count: 12
    }
];

export const DEPLOYMENT_OVERVIEW_OPTIONS_2 = [{
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
        text: "Deployment Information",
        fontColor: "black",
        fontFamily: "Arial, sans-serif",
    },
    data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 12,
        indexLabelFontColor: "black",
        indexLabel: "{label} - {y}",
        dataPoints: [
            {y: 23, label: "Devices Managed", color: '#FF5733'},
            {y: 23, label: "Agents Deployed", color: '#5733FF'},
            {y: 22, label: "Agents Reported "},

        ]
    }],
    legend: {
        fontColor: "black",
    },
    width: 390,
    height: 300
},
{
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
        text: "Usage Statistics",
        fontColor: "black",
        fontFamily: "Arial, sans-serif",
    },
    data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 12,
        indexLabelFontColor: "black",
        indexLabel: "{label} - {y}",
        dataPoints: [
            {y: 48, label: "Days Using Bigfix"},
            {y: 187, label: "Actions Deployed"},
            {y: 60, label: "Open Actions"},
        ]
    }],
    legend: {
        fontColor: "black",
    },
    width: 390,
    height: 300
},
];
export const DEPLOYMENT_OVERVIEW_OPTIONS = [{
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

export const ACTION_COLUMNS = [
    {field: 'timeIssued', headerName: 'Time Issued', flex: 1},
    {field: 'state', headerName: 'State', flex: 1},
    {field: 'complete', headerName: '% Completed', flex: 1},
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'site', headerName: 'Site', flex: 1},
    {field: 'issuedBy', headerName: 'Issued By', flex: 1},
    {field: 'type', headerName: 'Type', flex: 1},
];

export const ACTION_ROWS = [
    {id: 1, timeIssued: '1/24/2024 3: 58: 16 PM', state: 'Expired', complete: '100.00% (1 / 1)', name: 'Accept License for Patch', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
    {id: 2, timeIssued: '1/24/2024 3: 58: 17 PM', state: 'Expired', complete: '100.00% (1 / 1)', name: 'Accept License for Patch', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
    {id: 3, timeIssued: '12/19/2023 12:37:47 PM', state: 'Expired', complete: '100.00 % (1 / 1)', name: 'Accept License for Lifecycle', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
    {id: 4, timeIssued: '12/19/2023 12:37:45 PM', state: 'Expired', complete: '100.00 % (1 / 1)', name: 'Accept License for Lifecycle', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
    {id: 5, timeIssued: '1/24/2024 3:58:15 PM', state: 'Expired', complete: '100.00% (1 / 1)', name: 'Accept License for Patch', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
    {id: 6, timeIssued: '1/24/2024 3:58:14 PM', state: 'Expired', complete: '100.00% (1 / 1)', name: 'Accept License for Patch', site: 'Master Operator Site', issuedBy: 'BigfixServer', type: 'Single Action'},
];

export const EXISTING_SITES = [
    {label: 'Master Action Site'},
    {label: 'Custom Site1'},
    {label: 'Custom Site2'},
];

export const DOMAINS = [
    {label: 'All Content'},
    {label: 'Bigfix Management'},
    {label: 'Patch Management'},
    {label: 'System Lifecycle'},
];

export const BASELINE_COMPONENTS = [
    {id: 1, column1: '3125861: Vulnerability in Internet Explorer could lead to ASLR bypass - Enable the User32 Exception Handler Hardening', column2: 'No Action Selected'},
    {id: 2, column1: 'Disable hardening changes for Windows DCOM Server Security Feature Bypass (CVE-2021-26414) - KB5004442', column2: 'No Action Selected'},
    {id: 3, column1: 'MS24-JAN: Cumulative Update for .NET Framework 3.5 and 4.8.1 for Windows 10 Version 22H2', column2: 'No Action Selected'},
    {id: 4, column1: '2868725: Security advisory: Update for disabling RC4 - Enable Workaround (Completely disable RC4)', column2: 'No Action Selected'},
];

export const BASELINE_COMPONENT_ACTIONS = [
    {label: 'No Action Selected'},
    {label: 'Action 1'},
    {label: 'Action 2'},
];

export const BASELINE_COLUMNS = [
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'site', headerName: 'Site', flex: 1},
    {field: 'applicableComputerCount', headerName: 'Applicable Computer Count', flex: 1},
    {field: 'openActionCount', headerName: 'Open Action Count', flex: 1},
]

export const BASELINE_ROWS = [
    {id: 1,name: 'CustomBaseline1', site: 'Test-site1', applicableComputerCount: '1/1', openActionCount: '0'},
    {id: 2,name: 'CustomBaseline2', site: 'Test-site2', applicableComputerCount: '1/1', openActionCount: '1'},
    {id: 3,name: 'CustomBaseline3', site: 'Test-site3', applicableComputerCount: '1/1', openActionCount: '0'},
    {id: 4,name: 'CustomBaseline4', site: 'Test-site4', applicableComputerCount: '1/1', openActionCount: '1'},
]