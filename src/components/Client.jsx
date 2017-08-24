import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editClient, deleteClient, toggleForm } from '../actions';

@connect(undefined, { editClient, deleteClient, toggleForm })
export default class Client extends Component {
    constructor(props) {
        super(props);

        this.editClient = this.editClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
    }

    editClient() {
        this.props.editClient(this.props.id);
        this.props.toggleForm();
        console.log(this.props.id);
    }

    deleteClient() {
        this.props.deleteClient(this.props.id);
    }

    render() {

        const { name, phone, email, date, summ, viewers, abonement } = this.props;

          return (
            <tr>
              <td><div className="editClient" onClick={this.editClient}><i className="fa fa-pencil" aria-hidden="true"></i></div></td>
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
