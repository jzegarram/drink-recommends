import React, { useEffect } from 'react';
import { Box, Container, Grid, Stack, Typography, CircularProgress, Backdrop } from '@mui/material';
// import { Tag } from '@/components/Tag';
// import useCategory from '@/hooks/useCategory';
// import useIngredient from '@/hooks/useIngredient';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { DrinkResutls } from '@/components/drinks';
import { useLocation } from 'react-router-dom';
import GoBackButton from "@/components/goBackButton";
import { useComplexIntersection } from '@/hooks/useComplexIntersection';




const Results = () => {

    const location = useLocation();
    const query = location.state.query || {categories: [], ingredients: []};

    const { loading, intersectionData } = useComplexIntersection({ query });

  return (
    <Container maxWidth="xl" sx={{background: "linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C"}} >
      <Grid container minHeight={"100vh"} >
      <Grid item xs={12}>
        <Stack direction={"row"} display={"flex"} alignItems={"center"} justifyContent={"flex-start"} my={5}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <GoBackButton />
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Typography align='center' variant="h1" component="h1" >
                Resultados
                </Typography>
            </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        { loading ? (        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
        >
        <CircularProgress color="inherit" />
        </Backdrop>) : intersectionData ? <DrinkResutls data={intersectionData}  /> : <div>HOLA</div>}
      </Grid>
    </Grid>
  </Container>
  );
};

export default Results;
