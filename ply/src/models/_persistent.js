
function Persistent(){

}

Persistent.prototype.save = function(){
    console.log('saving')
};

Persistent.prototype.delete = function(){
    console.log('delete')
};

Persistent.prototype.sync = function(){
    console.log('syncing')
};

module.exports = Persistent;