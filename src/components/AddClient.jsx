import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row  from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

import { createClient, toggleForm } from '../actions';

import Input from './Input.jsx';

@connect(mapStateToProps, { createClient, toggleForm })
export default class AddClient extends Component {
    constructor(props) {
        super(props);

        this.createClient = this.createClient.bind(this);
    }

    createClient() {
        this.props.createClient();
        this.props.toggleForm();
    }

    render() {
        return (
	        <div>
            <Row className="show-grid">
              <h1>Клиенты</h1>
              <div className="button" onClick={this.createClient}><i className="fa fa-plus-circle" aria-hidden="true"></i>Добавить клиента</div>
            </Row>
            <div className="form-box">
	        	    { this.props.isOpen ? <Input /> : null }
            </div>
	        </div>
	    );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: state.form.isOpen
    };
}
