type Game = {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  developer: string;
  publisher: string;
  platform: string;
  release_date: string;
  short_description: string;
};

export type GameCardProps = {
  info: Game;
};