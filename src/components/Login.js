import React from 'react'
import { Button, Form, Segment, Message, Card, Grid, Header, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter, Link, Redirect } from "react-router-dom";
import { loggingIn } from "../redux/actions"

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            loggedIn: false,
        }
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
        console.log(this.state)
    };

    handleLoginSubmit = () => {
        console.log("logging in")
        if(this.state.email === "" || this.state.password === ""){
            alert("email and password fields cannot be blank")
        }else{
            this.props.loggingIn(this.state.email, this.state.password)
        }
    }

    render(){
        return(
            <div className="login-form">
                <Grid textAlign='center' style={{ height: '75vh'}} verticalAlign='middle' className="user-login">
                <Grid.Column style={{ maxWidth: 450 }}>
                        <Segment stacked>
                        <Form.Input
                            label="email"
                            placeholder="email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        <br />
                        <Form.Input
                            type="password"
                            label="password"
                            placeholder="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    <div>
                        <br />
                        <Form onSubmit={this.handleLoginSubmit}>
                            <Button type="submit">Login</Button>
                        </Form>
                    </div>
                    </Segment>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loggingIn: (email, password) => {dispatch( loggingIn(email, password) )}
    }
}
export default withRouter(connect(null, mapDispatchToProps)(Login));