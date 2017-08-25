import React, { Component } from 'react';
import { connect } from 'react-redux';
import Col  from 'react-bootstrap/lib/Col';

import { addClient, closeForm, updateClient } from '../actions';

@connect(mapStateToFormProps, { addClient, closeForm, updateClient })
export default class Input extends Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handleAddClient = this.handleAddClient.bind(this);

        if (!this.props.newEntry) {
              this.state = ({
                name: props.name,
                phone: props.phone,
                email: props.email
              });
            } else {
              this.state = ({
                name: '',
                phone: '',
                email: ''
              });
        }
    }

    handleAddClient() {
      const client = {
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email
      };

      if (!this.props.newEntry) {
          this.props.updateClient(this.props.id, client);
      }
      else {
          this.props.addClient(client);
      }

      this.props.closeForm();
    }

    handleNameChange(e) {
        e.preventDefault();
        this.setState({
            name: e.target.value
        });
    }

    handlePhoneChange(e) {
        e.preventDefault();
        this.setState({
            phone: e.target.value
        });
    }

    handleMailChange(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value
        });
    }

    render() {
        return (
            <div className="client-entry">
                <div className="form-group main-group">
                <label>Имя</label>
                <input
                    className="form-control"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                </div>
                <div className="form-group second-group right">
                <label>Телефон</label>
                <input
                    className="form-control"
                    type="text"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                />
                </div>
                <div className="form-group main-group">
                <label>E-Mail</label>
                <input
                    className="form-control"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleMailChange}
                />
                </div>
              <div className="form-group second-group right">
                <label></label>
                <button type="submit" className="btn btn-default btn-sm btn-block  save left" onClick={this.handleAddClient}>Сохранить</button>
              </div>
            </div>
        );
    }
}

function mapStateToFormProps(state) {
  return {
    id: state.clients.current[0].id,
    name: state.clients.current[0].name,
    phone: state.clients.current[0].phone,
    email: state.clients.current[0].email,
    isOpen: state.form.isOpen,
    newEntry: state.form.newEntry
  };
}
