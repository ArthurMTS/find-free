import { TableContainer, Table, TableRow, TableBody, TableCell, Paper } from '@material-ui/core';

import { useStyles } from './RequirementsTable.styles'

import { RequirementsTableProps } from './types';

export const RequirementsTable = ({ requirements }: RequirementsTableProps) => {
  const styles = useStyles();

  const data = [{ label: 'System', value: requirements?.os }, { label: 'Processor', value: requirements?.processor }, { label: 'Memory', value: requirements?.memory }, { label: 'Graphics', value: requirements?.graphics }, { label: 'Storage', value: requirements?.storage }];

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableBody>
          {data.map((element, index) => 
            <TableRow key={index}>
              <TableCell className={styles.cell} component='th'>
                {element.label}
              </TableCell>

              <TableCell className={styles.cell}>
                {element.value}
              </TableCell>
            </TableRow>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}