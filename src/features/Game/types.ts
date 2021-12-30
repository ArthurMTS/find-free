type Photo = {
  id: number;
    image: string;
}

export type GameData = {
  title: string;
  description: string;
  developer: string;
  publisher: string;
  game_url: string;
  genre: string;
  platform: string;
  status: string;
  release_date: string;
  thumbnail: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  }
  screenshots: Photo[]
}