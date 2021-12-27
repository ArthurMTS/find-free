import { Box, TextField, MenuItem, Button } from '@material-ui/core';

import { useStyles } from './FilterBar.styles';

const genres = ['All', 'MMO', 'MMORPG', 'Shooter', 'Strategy', 'MOBA', 'Card Game', 'Racing', 'Sports', 'Social', 'Fighting', 'Action RPG', 'Sandbox', 'Battle Royale', 'Anime', 'Fantasy', 'Sci-Fi', 'Action', 'Zombie', 'Superhero'];

export const FilterBar = () => {
  const styles = useStyles();

  return (
    <Box component='section' className={styles.filterBar}>
      <TextField variant='outlined' label='Search' />

      <TextField
        id='genre'
        label='Genre'
        variant='outlined'
        value='All'
        select
      >
        {
          genres.map(genre => <MenuItem value={genre}>{genre}</MenuItem>)
        }
      </TextField>

      <TextField
        id='sort'
        label='Sort'
        variant='outlined'
        value='None'
        select
      >
        <MenuItem value='None'>None</MenuItem>
        <MenuItem value='Name'>Name</MenuItem>
        <MenuItem value='Release'>Release</MenuItem>
      </TextField>

      <Button color='primary' variant='contained'>Clean</Button>
    </Box>
  );
}