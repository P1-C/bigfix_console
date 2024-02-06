import { Button, Stack, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import useUserStore from "../stores/userStore";
import InfoIcon from '@mui/icons-material/Info';

const Timeout = () => {
  const { disableTimeout } = useUserStore();

  const handleSignIn = () => {
    disableTimeout();
    console.log("Button Clicked, Please Sign In");
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      paddingX={50}
      paddingY={20}
    >
      <Card style={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '80%'}} variant="outlined">
        <CardContent><InfoIcon/></CardContent>
        <CardContent>Your session has expired. Please login Again.</CardContent>
      </Card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="80"
        width="240"
        viewBox="-27.06165 -12.9375 234.5343 77.625"
      >
        <circle r="25.875" cy="25.875" cx="25.875" fill="#FFF" />
        <path d="M65.654 16.639h7.439c1.473 0 2.571.062 3.294.184.723.122 1.371.379 1.942.768s1.047.908 1.428 1.555c.381.647.571 1.373.571 2.177 0 .872-.235 1.671-.705 2.399s-1.106 1.274-1.911 1.638c1.134.33 2.006.893 2.615 1.688.609.795.914 1.73.914 2.806 0 .847-.197 1.669-.59 2.47-.394.799-.931 1.438-1.612 1.916-.681.479-1.521.773-2.52.883-.626.068-2.137.109-4.532.127h-6.335V16.639zm3.758 3.097v4.304h2.463c1.464 0 2.374-.021 2.729-.063.643-.076 1.149-.298 1.517-.667.368-.369.552-.853.552-1.454 0-.576-.159-1.043-.476-1.403-.317-.36-.789-.578-1.416-.654-.373-.042-1.443-.063-3.212-.063zm0 7.402v4.977h3.479c1.354 0 2.213-.038 2.577-.114.559-.102 1.014-.35 1.365-.742.351-.395.527-.921.527-1.581 0-.559-.135-1.032-.406-1.422-.271-.39-.662-.673-1.174-.851-.512-.178-1.623-.267-3.333-.267zM90.31 35.25V16.639h3.758V35.25zm22.002-6.843v-3.136h8.1v7.414c-.787.762-1.928 1.433-3.421 2.012-1.494.58-3.007.87-4.539.87-1.946 0-3.644-.408-5.091-1.226-1.447-.816-2.535-1.984-3.263-3.504-.728-1.519-1.092-3.171-1.092-4.957 0-1.938.406-3.661 1.219-5.167.813-1.506 2.002-2.662 3.567-3.466 1.193-.618 2.679-.927 4.456-.927 2.311 0 4.115.484 5.414 1.454 1.3.969 2.136 2.309 2.508 4.018l-3.732.698c-.263-.914-.756-1.636-1.479-2.165-.725-.529-1.628-.793-2.711-.793-1.642 0-2.947.521-3.916 1.562-.97 1.041-1.454 2.585-1.454 4.634 0 2.209.491 3.865 1.473 4.971.981 1.104 2.269 1.656 3.859 1.656.787 0 1.576-.154 2.368-.463.791-.31 1.47-.684 2.037-1.124v-2.361zm17.596 6.843V16.639h12.759v3.148h-9.001v4.405h7.77v3.148h-7.77v7.91zm21.749 0V16.639h3.758V35.25zm11.452 0l6.36-9.712-5.764-8.899h4.393l3.732 5.979 3.656-5.979h4.354l-5.789 9.039 6.36 9.572h-4.532l-4.126-6.437-4.139 6.437z" />
        <path
          d="M25.875 0c-1.933 0-3.813.219-5.625.62v12.754c1.732-.723 3.631-1.125 5.625-1.125 8.077 0 14.625 6.548 14.625 14.625S33.952 41.5 25.875 41.5 11.25 34.952 11.25 26.875V4.531C4.458 9.195 0 17.013 0 25.875 0 40.165 11.584 51.75 25.875 51.75S51.75 40.165 51.75 25.875C51.75 11.584 40.166 0 25.875 0z"
          fill="#6F99BD"
        />
        <circle r="6" cy="27.25" cx="25.875" fill="#ABC450" />
      </svg>
      <Typography variant="h3">It's Built for you</Typography>
      <Typography variant="h6">
        It's your one stop shop for Endpoint Management Software. We are
        commited to making it easy for you and your team to do great work
        everyday.
      </Typography>
      <Button
        variant="contained"
        color="warning"
        style={{ height: "60px", width: "200px" }}
        onClick={handleSignIn}
      >
        <Typography fontSize={20}>Sign In</Typography>
      </Button>
    </Stack>
  );
};

export default Timeout;
