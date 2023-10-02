import { Drink } from '@/models/drink.model';
import { List } from './list';
import { Grid } from '@mui/material';

interface Props {
    data: Drink[];
}

export const DrinkResutls = ({
    data
}: Props) => {
    // console.log(data)
    return (
        <Grid container item xs={12}>
          {data && data.length > 0 && <List data={data} />}
        </Grid>
    );
};
