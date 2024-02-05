import { Button, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TitleDescriptionCard from './TitleDescriptionCard'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { Link } from 'react-router-dom';

const Welcome = () => {

  const linkBtnStyle = { color: 'white', border: '1px solid rgba(255, 255, 255, 0.3)' }
  return (
    <Box padding={4} >
      <Typography variant='h4'>Hey User,</Typography>
      <Typography variant='h4'>Welcome to BigFix Console</Typography>
      <Typography gutterBottom variant="subtitle1">
        Manage and secure your endpoints efficiently with BigFix.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <TitleDescriptionCard
            title='Efficient Endpoint Management'
            description={`BigFix Console empowers IT administrators to efficiently manage
           and secure endpoints across your organization. Whether it's
           deploying software, enforcing security policies, or responding to
           vulnerabilities, BigFix simplifies the complexities of endpoint
           management.`}
          />
        </Grid>
        <Grid item xs={3}>
          <TitleDescriptionCard
            title='Automation and Reporting'
            description={` Discover the power of
           automation, robust reporting, and task-driven actions. BigFix
           Console is your go-to platform for maintaining a secure and
           well-managed endpoint infrastructure.`}
          />
        </Grid>
        <Grid item xs={4}>
          <TitleDescriptionCard
            title='Real-time Visibility'
            description={`With real-time visibility
           into your endpoint environment, you can take proactive measures
           to ensure compliance, address security risks, and optimize
           operational efficiency. The console provides a centralized hub
           for monitoring and controlling endpoints, offering a
           comprehensive solution for modern IT challenges.`}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5' gutterBottom>Quick Links</Typography>
          <Stack direction={'row'} spacing={3}>
            <Button
              component={Link} to="/dashboard"
              sx={linkBtnStyle}
              variant='outlined'
              color='secondary'
              startIcon={<ArrowOutwardRoundedIcon />}>
              Goto Dashboard
            </Button>
            <Button
              target='_blank'
              href="https://help.hcltechsw.com/bigfix/11.0/platform/Platform/Installation/c_introduction.html"
              sx={linkBtnStyle}
              variant='outlined'
              color='secondary'
              startIcon={<MenuBookRoundedIcon />}>
              Learn about BigFix
            </Button>
          </Stack>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Welcome