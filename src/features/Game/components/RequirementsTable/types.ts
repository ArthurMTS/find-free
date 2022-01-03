export type RequirementsTableProps = {
  requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  } | undefined
};