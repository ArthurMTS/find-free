import { Game } from '../../types';

export type FilterBarProps = {
  games: Game[];
  handler: (value: Game[]) => void;
}