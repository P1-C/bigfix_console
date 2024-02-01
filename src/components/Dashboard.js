import React from 'react';
import CardComponent from './CardComponent';
import {consoleData, DeploymentOverviewOptions} from '../MOCK_DATA';
import Piechart from './Piechart';

const Dashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <CardComponent consoleData={consoleData} />
      <Piechart options1={DeploymentOverviewOptions}/>
    </>
  );
};

export default Dashboard;
