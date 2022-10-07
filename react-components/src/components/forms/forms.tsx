import React, { Component } from 'react';
// import { ICharacter } from '../../types';
import './forms.css';

class Forms extends Component {
  handleSubmit() {
    /*alert('A name was submitted: ' + this.input.current.value);*/
    // event.preventDefault();
    console.log('hjhjh');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="forms">
        <h3 className="form_title">Create your characters</h3>
        <div className="form_group">
          <label className="form_label">Name: </label>
          <input className="form_input" type="text" name="name" />
        </div>
        <div className="form_group">
          <label className="form_label">Date created: </label>
          <input className="form_input" type="date" name="date" />
        </div>

        <div className="form_group">
          <label className="form_label">Gender:</label>
          <select className="form_input" name="gender">
            <option> </option>
            <option>Female</option>
            <option>Male</option>
            <option>Genderless</option>
            <option>unknown</option>
          </select>
        </div>
        <div className="form_group">
          <label className="form_label">Link to the character{"'"}s image </label>
          <input className="form_file" type="file" name="img" />
        </div>

        <div className="form_group">
          <span className="form_label">Текст про переключатель</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="form_group">
          <label className="form_label">I consent to my personal data </label>
          <input className="input-text" type="checkbox" name="check" />
        </div>

        <input className="form_button" type="submit" value="Submit" />
      </form>
    );
  }
}
export default Forms;
