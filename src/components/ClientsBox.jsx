import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import Client from './Client.jsx';

@connect(mapStateToProps)
export default class ClientsBox extends Component {

    render() {
        return (
            <div>
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Клиент</th>
                    <th>Телефон</th>
                    <th>E-Mail</th>
                    <th>Дата<br></br> последнего<br></br> посещения</th>
                    <th>Сумма оплат</th>
                    <th>Количество<br></br> посещений</th>
                    <th>Активный<br></br> абонемент</th>
                  </tr>
                </thead>
                <tbody>
                        {
                        	this.props.clients.map(client =>
                        		<Client
                        			key={client.id}
                        			id={client.id}
                        			name={client.name}
                        			phone={client.phone}
                        			email={client.email}
                              date={client.date}
                        			summ={client.summ}
                        			viewers={client.viewers}
                        			abonement={client.abonement}
                        	   />
                        	)
                        }
                  </tbody>
                </Table>
             </div>
        );
    }
}

function mapStateToProps(state) {
	return {
		clients: state.clients.clients
	};
}
