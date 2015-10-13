import React from 'react'
import Blurb from './_blurb.js'
import _ from 'lodash'

function User(){

}

User.prototype = Object.create(React.Component);
_.extend(User.prototype, Persistent.prototype);

module.exports = User;