import { useTheme } from '@emotion/react'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const TitleDescriptionCard = ({ title, description }) => {
    const theme  = useTheme()
    return (
        <Box component={Paper} my={2} borderRadius={5} px={2} py={2} minHeight={200} sx={{
            backdropFilter: 'blur(1px)',
            // background: 'rgba(255, 255, 255, 0.1)',
            background: theme.palette.divider,
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            <Typography gutterBottom><strong>{title}</strong></Typography>
            <Box paddingTop={1}>
                <Typography>
                    {description}
                </Typography>
            </Box>
        </Box>
    )
}

export default TitleDescriptionCard