import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';
import AppNavbar from '../../Header/AppNavbar';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class ViewSlae extends Component {

    constructor(props) {
        super(props);
        this.state = { clients: [] };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/clients')
            .then(response => response.json())
            .then(data => this.setState({ clients: data }));
    }

    async remove(id) {
        await fetch(`/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.clients].filter(i => i.id !== id);
            this.setState({ clients: updatedClients });
        });
    }

    render() {
        const { clients } = this.state;

        const viewslae = clients.map(client => {
            return <tr key={client.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{client.consumername}</td>
                <td>{client.platformname}</td>

            </tr>
        });

        return (
            <div>
                <AppNavbar />
                <div class="card border-dark mb-3">
                <Container fluid>
                    <Button color="success" tag={Link} to="/">Home</Button>{'  '}

                    <Button color="success" tag={Link} to="/add">Add</Button>
                </Container>
                <Container fluid>
                    <h5>View SLAE and Platform Configuration</h5><br></br>

                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="30%">Consumer Name</th>
                                <th width="30%">Platform Name</th>
                            </tr>
                            <tr>
                            <td><Link to="/slae">Alfreds Futterkiste</Link></td>
                                <td>Maria Anders</td>
                            </tr>
                            <tr>
                            <td><Link to="/slae">Centro comercial Moctezuma</Link></td>
                                <td>Francisco Chang</td>

                            </tr>
                        </thead>
                        <tbody>

                        </tbody>

                    </Table>
                </Container>
            </div>
            </div>
        );
    }
}

export default ViewSlae;