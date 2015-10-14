import _ from 'lodash'
import Persistent from '../_persistent.js'
import Editable from './_editable.js'

function Blurb(){

}

Blurb.prototype = _.extend(Persistent.prototype, Editable.prototype);

Blurb.prototype.archive = function(){
    console.log('archiving');
};

Blurb.prototype.handleChange = function(){
    console.log('changing');
};


module.exports = Blurb;