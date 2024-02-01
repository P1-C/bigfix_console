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
            {y: 60, label: "Open Actions" },
        ]
    }],
    legend: {
        fontColor: "white",
    },
    width: 390,
    height: 300
},
];

