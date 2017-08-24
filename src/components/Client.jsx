import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editClient, toggleForm } from '../actions';

@connect(undefined, { editClient, toggleForm })
export default class Client extends Component {
    constructor(props) {
        super(props);

        this.editClient = this.editClient.bind(this);
    }

    editClient() {
        this.props.editClient(this.props.id);
        this.props.toggleForm();
    }

    render() {

        const { name, phone, email, date, summ, viewers, abonement } = this.props;

          return (
            <tr>
              <td><div className="editClient" onClick={this.editClient}><i className="fa fa-pencil" aria-hidden="true"></i></div></td>
              <td><div className="deleteClient"><i className="fa fa-trash" aria-hidden="true"></i></div></td>
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
