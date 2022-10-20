// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="card">
        <Image source={ user.avatar } alternativeText="User avatar" />
        <p> { user.name } </p>
        <p> { user.email } </p>
      </div>
    );
  }
}

export default UserProfile;