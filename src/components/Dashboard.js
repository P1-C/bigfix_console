import React from 'react';
import CardComponent from './CardComponent';
import {CONSOLE_DATA, DEPLOYMENT_OVERVIEW_OPTIONS, DEPLOYMENT_OVERVIEW_OPTIONS_2} from '../MOCK_DATA';
import Piechart from './Piechart';
import useUserStore from '../stores/userStore';

const Dashboard = () => {
  const { isDarkTheme } = useUserStore()

  return (
    <>
      <h3>Dashboard</h3>
      <CardComponent consoleData={CONSOLE_DATA} />
      {isDarkTheme && <Piechart options1={DEPLOYMENT_OVERVIEW_OPTIONS} /> }
      {!isDarkTheme && <Piechart options1={DEPLOYMENT_OVERVIEW_OPTIONS_2} /> }
    </>
  );
};

export default Dashboard;
