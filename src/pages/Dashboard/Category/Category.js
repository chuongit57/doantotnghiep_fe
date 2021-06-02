/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import {Button, Grid, IconButton} from '@material-ui/core'
import Form from './components/Form'
import Template from '../components/Template'
import {useCategories, useOnDeleteAPICategory, useOnLoadAPICategories} from '../../../hooks/category'
import {confirmAlert} from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const columns = [
  {id: 'category_code', label: 'Code', minWidth: 170},
  {id: 'category_name', label: 'Name', minWidth: 100},
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

const Category = () => {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [openForm, setOpenForm] = React.useState(false)
  const onLoadAPICategories = useOnLoadAPICategories()
  const onDeleteAPICategory = useOnDeleteAPICategory()
  const categories = useCategories()

  useEffect(() => {
    onLoadAPICategories()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleChangeStatusForm = (value) => {
    setOpenForm(value)
  }

  const handleDelete = (data) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: `Are you sure to delete ${data.category_name}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            onDeleteAPICategory(data.id)
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    })
  }

  return (
    <Template>
      <Grid container direction="column" spacing={1}>
        <Grid item xs>
          <Grid container justify="flex-end">
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleChangeStatusForm.bind(this, true)}>
                create
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align} style={{minWidth: column.minWidth}}>
                        {column.label}
                      </TableCell>
                    ))}
                    <TableCell key="actions" align="left" style={{minWidth: 150, paddingLeft: 30}}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id]
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          )
                        })}
                        <TableCell align="right">
                          <Grid container>
                            {/* <Grid item>
                              <IconButton aria-label="edit">
                                <EditIcon />
                              </IconButton>
                            </Grid> */}
                            <Grid item>
                              <IconButton aria-label="delete" onClick={handleDelete.bind(this, row)}>
                                <DeleteIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={categories.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} />
          </Paper>
        </Grid>
        <Form open={openForm} onClose={handleChangeStatusForm.bind(this, false)} />
      </Grid>
    </Template>
  )
}

export default Category
