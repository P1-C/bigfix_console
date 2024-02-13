import React from 'react';
import CardComponent from './CardComponent';
import {CONSOLE_DATA, DEPLOYMENT_OVERVIEW_OPTIONS, DEPLOYMENT_OVERVIEW_OPTIONS_2} from '../MOCK_DATA';
import Piechart from './Piechart';
import {useTheme} from '@emotion/react';

const Dashboard = () => {
  const theme = useTheme()
  return (
    <>
      <h3>Dashboard</h3>
      <CardComponent consoleData={CONSOLE_DATA} />
      <Piechart options1={theme.palette.mode === 'dark' ? DEPLOYMENT_OVERVIEW_OPTIONS : DEPLOYMENT_OVERVIEW_OPTIONS_2}/>
    </>
  );
};

export default Dashboard;
