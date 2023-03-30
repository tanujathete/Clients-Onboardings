import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../../Header/AppNavbar';

class AddSlae extends Component {

    emptyItem = {
        consumername: '',
        platformname: ''
    };


    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const client = await (await fetch(`/clients/${this.props.match.params.id}`)).json();
            this.setState({ item: client });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/clients' + (item.id ? '/' + item.id : ''), {

            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/clients');
    }

    render() {

        const { item } = this.state;
        const title = <h4>{item.id ? 'Edit Client' : 'Add Slae and Platform Configure'}</h4>;
        return <div>
                        <AppNavbar />
                        <div class="card border-dark mb-3">
                        <Container fluid>
                            <Button color="success" tag={Link} to="/">Home</Button>{'  '}

                            <Button color="success" tag={Link} to="/viewslae">List</Button>
                        </Container>
                        <Container>
                            {title}
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="name">ConsumerName</Label>
                                    <Input type="text" name="consumername" id="consumername" value={item.consumername || ''}
                                        onChange={this.handleChange} autoComplete="consumername" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">PlatformName</Label>
                                    <Input type="text" name="platformname" id="platformname" value={item.platformname || ''}
                                        onChange={this.handleChange} autoComplete="platformname" />
                                </FormGroup>
                                <FormGroup>
                                    <Button color="primary" type="submit" tag={Link} to="/viewslae">Save</Button>{' '}
                                    <Button color="secondary" tag={Link} to="/viewslae">Cancel</Button>
                                </FormGroup>
                            </Form>
                        </Container>
                    </div>
                    </div>
    }
}

export default AddSlae;