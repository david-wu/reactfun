import React from 'react'
import Blurb from './_blurb.js'
import _ from 'lodash'

function User(){

}

User.prototype = Object.create(React.Component);
_.extend(User.prototype, Persistent.prototype);

User.prototype.education = function(){

}

User.prototype.experience = function(){

}

User.prototype.skills = function(){

}

module.exports = User;