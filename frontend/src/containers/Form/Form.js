import React, {useState} from 'react';
import {Grid, IconButton, makeStyles, TextField} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
    },
    password: {
        flexGrow: 1,
    },
}));

const Form = () => {
    const classes = useStyles();

    const [message, setMessage] = useState({
        decoded: '',
        password: '',
        encoded: ''
    });

    const handleInputChange = e => {
        const {name, value} = e.target;

        setMessage(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form className={classes.root}>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <TextField
                        label="Decoded message"
                        variant="outlined"
                        multiline
                        rows={5}
                        fullWidth
                        name="decoded"
                        value={message.decoded}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid container item>
                    <TextField
                        label="Password"
                        variant="outlined"
                        name="password"
                        value={message.password}
                        onChange={handleInputChange}
                        className={classes.password}
                    />
                    <IconButton>
                        <ArrowDownwardIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowUpwardIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <TextField
                        label="Encoded message"
                        variant="outlined"
                        multiline
                        rows={5}
                        fullWidth
                        name="encoded"
                        value={message.encoded}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;