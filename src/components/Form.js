import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import $ from 'jquery';
import RequestPHP from '../Request.php'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        firstName: "",
        lastName: "",
        email: "",
        text: "",
        checked: false
    };

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    updateCheck() {
        this.setState({
            checked: !this.state.checked
        });
    }

    onSubmit = e => {
        $.ajax({
            type: 'POST',
            data: {
                name: 'xxx',
                lastname: 'yyy'
            },
            url: 'RequestPHP',
            dataType: 'json',
            asnyc: false,
            success: console.log('succes'),
            error: console.log('error')
        })
        // e.preventDefault();
        // // this.props.onSubmit(this.state);
        // this.setState({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     text: ""
        // });
        // this.props.onChange({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     text: ""
        // });
    };

    checkIfFieldsAreEmpty() {
        const fields = this.state;
        const fieldsArr = Object.values(fields);
        const fieldsStringArr = [];
        const fieldsBooleanArr = [];
        fieldsArr.forEach((field) => {
            typeof field === 'string' ?
                fieldsStringArr.push(field)
                : fieldsBooleanArr.push(field)
        });
        return !this.checkForBooleanAndString(fieldsBooleanArr, fieldsStringArr)
        // return fields.some((field) => field.length)
    }

    checkForBooleanAndString(fieldsBooleanArr, fieldsStringArr) {
        return fieldsBooleanArr.every(field => field !== false) && fieldsStringArr.every(field => field.length !== 0)
    }
    render() {

        const styles = {
            block: {
                maxWidth: 250,
            },
            checkbox: {
                marginBottom: 0,
                marginTop: 10,
                marginLeft: -50
            },
            floatingLabelText: {
                textAlign: 'right'
            },
            label: {
                color: 'black',
                marginTop: 20,
                fontSize: 12
            },
            icon: {
                marginLeft: 1002
            },
        };
        return (
            <form>
                <button type="button" class="close" aria-label="Close" onClick={this.props.showForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="form-title">
                    <h2> Formularz Zgłoszeniowy </h2>
                </div>
                <TextField
                    name="firstName"
                    hintText="First name"
                    floatingLabelText="First name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                    errorText={this.state.firstName.length === 0 ? "to pole jest wymagane" : ""} />
                <br />
                <TextField
                    name="lastName"
                    hintText="Last Name"
                    floatingLabelText="Last Name"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                    errorText={this.state.lastName.length === 0 ? "to pole jest wymagane" : ""}
                />
                <br />
                <TextField
                    name="email"
                    hintText="Email"
                    floatingLabelText="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                    errorText={this.state.email.length === 0 ? "to pole jest wymagane" : ""}
                />
                <br />
                <TextField
                    name="text"
                    hintText="Tekst zgłoszenia"
                    floatingLabelText="Tekst zgłoszenia"
                    value={this.state.text}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                    floatingLabelStyle={{
                        textAlign: 'left',
                        marginLeft: -128
                    }}
                    inputStyle={{ textAlign: 'center' }}
                    hintStyle={{ textAlign: 'center' }}
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                    errorText={this.state.text.length === 0 ? "to pole jest wymagane" : ""}

                />
                <br />
                <Checkbox
                    label="Akceptuje regulamin strony"
                    labelPosition='left'
                    iconStyle={styles.checkbox}
                    labelStyle={styles.label}
                    styles={styles.checkbox}
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                    errorText={!this.state.check ? "Wymagane zatwierdzenie regulaminu" : ""}
                />
                <div class="terms">
                    <span> {!this.state.checked ? 'Proszę zaakceptować regulamin' : ''}</span>
                </div>
                <br />
                <RaisedButton disabled={this.checkIfFieldsAreEmpty()} class="checkbox" label="Wyślij zgłoszenie" onClick={e => this.onSubmit(e)} primary />
            </form>
        );
    }
}