import { Drink } from '@/models/drink.model';
import { List } from './list';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import DrinkService from '@/web/services/drinks.service';
import { useEffect, useState } from 'react';
import ActionAreaCard from './card';

interface Props {
  data: Drink[];
}

export const DrinkResutls = ({ data }: Props) => {

    const [randomDrink, setRandomDrink ] = useState< Drink | null>(null)

    const getRandomDrink = async () => {
       const ramdomDrink = await DrinkService.getRandom();
       console.log(ramdomDrink)
       setRandomDrink(ramdomDrink);
    }

    useEffect(() => {console.log(randomDrink)}, [randomDrink])
  
    if (!data || data.length === 0) {
      
        return (
          <Grid container item xs={12} spacing={2} justifyContent={'center'} alignItems={"center"} flexDirection={"column"}>
            <SearchOffIcon  />
            <Box>
                <Typography variant="h2" sx={{ color: 'white' }}>
                Lo sentimos
                </Typography>
            </Box>
            <Box>
                <Typography variant="h2" sx={{ color: 'white' }}>
                No encontramos resultados
                </Typography>
            </Box>
            <Stack direction="row" justifyContent={'center'} paddingY={'20px'} borderRadius={'10px'}>
            <Button
              sx={{
                background: 'linear-gradient(45deg, rgb(70, 66, 159) 30%, rgb(85, 80, 190) 90%)',
                borderRadius: '13px',
                border: 0,
                fontWeight: "bold",
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
              onClick={() => getRandomDrink()}
            >
              Obtener Recomendación al azar
            </Button>
          </Stack>
          <Box>
                {randomDrink && <ActionAreaCard title={randomDrink.strDrink} imgUrl={randomDrink.strDrinkThumb} desc={randomDrink.strInstructionsES}/>}
            </Box>
          </Grid>
        );
      }

  return (
    <Grid container item xs={12} mb={12}>
      {data && data.length > 0 && <List data={data} />}
    </Grid>
  );
};
