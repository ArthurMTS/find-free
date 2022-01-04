import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, TextField, MenuItem, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { useStyles } from './FilterBar.styles';

import { FilterBarProps } from './types';

const genres = ['All', 'MMO', 'MMORPG', 'Shooter', 'Strategy', 'MOBA', 'Card Game', 'Racing', 'Sports', 'Social', 'Fighting', 'Action RPG', 'Battle Royale', 'Fantasy'];

export const FilterBar = ({ games, handler }: FilterBarProps) => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');

  const styles = useStyles();

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearch(value);
  }

  const handleChangeGenre = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setGenre(value);
    setSearch('');

    if (value === 'All') {
      handler(games);
      return;
    }

    const filteredGames = games.filter(game => game.genre.toLowerCase() === value.toLowerCase());

    handler(filteredGames);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setGenre('All');

    if (search === '') {
      handler(games);
      return;
    }

    const filteredGames = games.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));

    handler(filteredGames);
  }

  const handleClean = () => {
    setSearch('');
    setGenre('All');
    handler(games);
  }

  return (
    <Box component='section' className={styles.filterBar}>
      <form onSubmit={handleSubmit} className={styles.filterBar}>
        <TextField
          variant='outlined' 
          label='Search'
          value={search}
          onChange={handleChangeSearch}
        />

        <Button
          variant='contained'
          color='primary'
          type='submit'
        >
          <Search />
        </Button>
      </form>

      <TextField
        id='genre'
        label='Genre'
        variant='outlined'
        value={genre}
        onChange={handleChangeGenre}
        select
      >
        {
          genres.map((genre, index) => <MenuItem key={index} value={genre}>{genre}</MenuItem>)
        }
      </TextField>

      <Button
        color='primary' 
        variant='contained'
        onClick={handleClean}
      >
        Clean
      </Button>
    </Box>
  );
}