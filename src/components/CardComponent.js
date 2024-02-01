import {Box, Card, CardContent, Paper} from '@mui/material';
import React from 'react';

const CardComponent = (props) => {
    const boxStyles = {
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 220px))',
        justifyContent: 'start',
        padding: '1rem 0rem'
    };
    const cardStyles = {
        cursor: 'pointer',
    };
    return (
        <Box style={boxStyles}>
            {
                props.consoleData.map((card, index) => {
                    return <Paper elevation={7} key={`card-${index}`}>
                        <Card style={cardStyles} variant='outlined'>
                            <CardContent>{card.title}</CardContent>
                            <CardContent>{card.count}</CardContent>
                        </Card>
                    </Paper>;
                })
            }
        </Box>
    );
};

export default CardComponent;
