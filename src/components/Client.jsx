import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentClient, deleteClient, openForm } from '../actions';

@connect(undefined, { currentClient, deleteClient, openForm })
export default class Client extends Component {
    constructor(props) {
        super(props);

        this.currentClient = this.currentClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
    }

    currentClient() {
        this.props.currentClient(this.props.id);
        this.props.openForm();
    }

    deleteClient() {
        this.props.deleteClient(this.props.id);
    }

    render() {

        const { name, phone, email, date, summ, viewers, abonement } = this.props;

          return (
            <tr>
              <td><div className="editClient" onClick={this.currentClient}><i className="fa fa-pencil" aria-hidden="true"></i></div></td>
              <td><div className="deleteClient" onClick={this.deleteClient}><i className="fa fa-trash" aria-hidden="true"></i></div></td>
              <td>{name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{date}</td>
              <td>{summ}</td>
              <td>{viewers}</td>
              <td>{abonement}</td>
            </tr>
          );
    }
}
