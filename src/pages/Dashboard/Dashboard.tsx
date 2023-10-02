import React from 'react';
import { Backdrop, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Tag } from '@/components/Tag';
import useCategory from '@/hooks/useCategory';
import useIngredient from '@/hooks/useIngredient';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

interface SearchQuery {
  ingredients?: string[];
  categories?: string[];
}

const Dashboard = () => {
  const {
    data: categories,
    loading: loadingCategories,
    selectTag: selectCategory,
    unSelectTag: unSelectCategory,
  } = useCategory();

  const {
    data: ingredients,
    loading: loadingIngredients,
    selectTag: selectIngredient,
    unSelectTag: unSelectIngredient,
    limitReached: limitReachedIngedients,
  } = useIngredient();

  const [limitIngredients, setLimitIngredients] = React.useState(10);

  const navigate = useNavigate();

  const showMoreIngredients = () => {
    setLimitIngredients(limitIngredients + 10);
  };

  const isShowMore = limitIngredients >= ingredients.length;

  const goToFilterPage = (query: SearchQuery) => {
    // console.log("goto /results with query", query)
    navigate('/results', { state: { query } });
  };

  const onFilter = () => {
    const filterCategories = categories
      .filter((category) => category.selected)
      .map((category) => category.strCategory!) as string[];
    const filterIngredients = ingredients
      .filter((ingredient) => ingredient.selected)
      .map((ingredient) => ingredient.strIngredient1!) as string[];
    goToFilterPage({ categories: filterCategories, ingredients: filterIngredients });
  };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <Container
      maxWidth="xl"
      sx={{
        background:
          'linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C',
      }}
    >
      <Grid container minHeight={'100vh'}>
        <Grid item xs={12} my={3} >
          <Typography color={"#d16fb7"} align='center' fontFamily={'Sedgwick Ave Display'} fontSize={"5rem"} component="h1" fontWeight={"bold"} >
            Alcoholic Genius
          </Typography>
        </Grid>
        <Grid item xs={12} mb={3}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Elige tus categorias favoritas
          </Typography>
        </Grid>
        <Grid item xs={12} mb={3}>
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            justifyContent={'center'}
            paddingX={{ md: '120px' }}
          >
            {categories.map((category) => {
              return (
                <Tag
                  iconId={'category'}
                  key={category.id}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  selected={category.selected}
                  label={category.strCategory}
                  onSelect={() => selectCategory(category?.id)}
                  onDelete={() => unSelectCategory(category?.id)}
                />
              );
            })}
          </Stack>
        </Grid>
        <Grid item xs={12} mb={3}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Elige tus ingredientes favoritos
          </Typography>
        </Grid>
        <Grid item xs={12} mb={3}>
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            justifyContent={'center'}
            paddingX={{ md: '120px' }}
          >
            {ingredients.slice(0, limitIngredients).map((ingredient) => {
              const isDisabled = limitReachedIngedients && !ingredient.selected;

              return (
                <Tag
                  key={ingredient.id}
                  iconId={'ingredient'}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  selected={ingredient.selected}
                  label={ingredient.strIngredient1}
                  onSelect={() => selectIngredient(ingredient?.id)}
                  onDelete={() => unSelectIngredient(ingredient?.id)}
                  isDisabled={isDisabled}
                />
              );
            })}
            <Button
              variant="text"
              sx={{ textTransform: 'none', color: 'white' }}
              onClick={showMoreIngredients}
              disabled={isShowMore}
            >
              {'Ver más'}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} mb={3} paddingX={{ md: '200px' }}>
          <Stack direction="row" justifyContent={'center'} paddingY={'20px'} borderRadius={'10px'}>
            <Button
              sx={{
                background: 'linear-gradient(45deg, rgb(70, 66, 159) 30%, rgb(85, 80, 190) 90%)',
                borderRadius: '13px',
                border: 0,
                color: 'white',
                height: '48px',
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(70, 66, 159, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                '&:hover': {
                  boxShadow: '0 6px 10px 4px rgba(70, 66, 159, 0.3)',
                },
              }}
              variant="contained"
              onClick={onFilter}
            >
              <FilterAltIcon />
              Filtrar
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingCategories && loadingIngredients}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default Dashboard;
