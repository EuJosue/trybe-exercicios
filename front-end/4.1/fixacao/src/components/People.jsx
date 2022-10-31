import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../People.css';

class People extends Component {
  render() {
    const { people: {
      gender,
      name: {
        first,
        last,
        title,
      },
      email,
      picture: {
        large,
      },
      dob: {
        age,
      }
    } } = this.props;
    return (
      <div className='card'>
        <img src={ large } alt={ `${first} ${last}` } />
        <p>{ `Name: ${title} ${first} ${last}` }</p>
        <p>{ `Gender: ${gender}` }</p>
        <p>{ `Email: ${email}` }</p>
        <p>{ `Age: ${age}` }</p>
      </div>
    );
  }
}

People.propTypes = {
  people: PropTypes.object.isRequired,
};

export default People