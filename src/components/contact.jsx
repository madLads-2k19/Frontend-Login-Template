import React, { Component } from 'react';
import {Button,Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch">
                <Link to="/">
                    <Button variant="contained">Back to about</Button>
                </Link>
                <Button>Clear</Button>
            </Grid>
        );
    }
}

export default Contact;

