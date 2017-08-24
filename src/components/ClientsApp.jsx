import React, { Component } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';

import ClientsBox from './ClientsBox.jsx';
import AddClient from './AddClient.jsx';

export default class ClientsApp extends Component {
    render() {
        return (
              <Grid>
                  <AddClient />
                  <ClientsBox />
              </Grid>
        );
    }
}
