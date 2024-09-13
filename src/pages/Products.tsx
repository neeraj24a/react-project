import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import ProductImages from '../components/ProductImages';
import ProductCategory from '../components/ProductCategory';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 250
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 90,
    type: 'number'
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 500,
    sortable: false
  },
  {
    field: 'category',
    headerName: 'Category',
    renderCell: (params) => {
      return <>{ProductCategory(params)}</>;
    },
    sortable: false,
    width: 160
  },
  {
    field: 'images',
    headerName: 'Images',
    renderCell: (params) => {
      return <>{ProductImages(params)}</>;
    },
    sortable: false,
    width: 160
  },
  {
    field: 'creationAt',
    headerName: 'Created At',
    width: 150
  },
  {
    field: 'updatedAt',
    headerName: 'Updated At',
    width: 150
  }
];

async function getProducts() {
  return await axios.get('https://api.escuelajs.co/api/v1/products')
    .then(response => {
      if (response.status === 200) {
        console.log(response);
        return response.data;
      }
    })
}

const Products = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    try {
      getProducts().then((response: any) => {
        setRows(response.length > 0 ? response : []);
      })      
    } catch (error) {
      console.log('something went wrong while loading products', error);
    }
  }, []);
  return (
    <center>
      <div>
        <h1>Products</h1>
        <h2>List of Products</h2>
      </div>
      <div>
        <Container maxWidth="xl" disableGutters>
          <div
            style={{
              // backgroundColor: "lightgreen",
              height: "40em",
              marginBottom: "5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </Container>
      </div>
    </center>
  )
}

export default Products