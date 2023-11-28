import React, { Component } from 'react';

class StudentComplaintForm extends Component {
 constructor(props) {
    super(props);
    this.state = {
      complaintType: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
 }

 handleSubmit(event) {
    event.preventDefault();

    const { complaintType, description } = this.state;

    console.log('Complaint Type:', complaintType);
    console.log('Description:', description);
 }

 render() {
    const { complaintType, description } = this.state;

    return (
      <div>
        <h2>Submit a Complaint</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Complaint Type:
            <input type="text" name="complaintType" value={complaintType} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Description:
            <textarea name="description" value={description} onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
 }
}

export default StudentComplaintForm;