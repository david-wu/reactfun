
/*
 * Persistent objects can sync their state to a database
 */

function Persistent(){

}

Persistent.prototype.sync = function(){
    console.log('syncing')
};

Persistent.prototype.save = function(){
    console.log('saving')
};

Persistent.prototype.delete = function(){
    console.log('delete')
};

module.exports = Persistent;