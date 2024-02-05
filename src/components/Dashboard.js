import React from 'react';
import CardComponent from './CardComponent';
import {CONSOLE_DATA, DEPLOYMENT_OVERVIEW_OPTIONS} from '../MOCK_DATA';
import Piechart from './Piechart';

const Dashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <CardComponent consoleData={CONSOLE_DATA} />
      <Piechart options1={DEPLOYMENT_OVERVIEW_OPTIONS}/>
    </>
  );
};

export default Dashboard;
