import { Grid, Typography } from "@mui/material"
import ActionAreaCard from "./card"

interface Drink {
    idDrink: string;
    strDrinkThumb: string;
    strDrink: string;
    strInstructions: string;
}

interface ListProps {
    data: Drink[];
}

export const List = ({data}: ListProps) => {
    


        if(!data || data.length === 0) { 
            // console.log("hollala")
            return (
            <Grid container item xs={12} spacing={2} justifyContent={"center"}>
                <Typography variant="h2" sx={{color: "white"}}>Sin resultados</Typography>
            </Grid>);}

        return (
                <Grid container item xs={12} spacing={2} justifyContent={"center"}>
        {data?.length && data.map((drink) => (
                <ActionAreaCard 
                    key={drink.idDrink}
                    imgUrl={drink.strDrinkThumb}
                    title={drink.strDrink}
                    desc={drink.strInstructions}
                    />
            ))}
</Grid>)}
