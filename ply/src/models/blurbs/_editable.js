
/*
 * Introduces a state.editing variable
 * Provides a function that renders the edit toggle button
 */

import React from 'react'

function Editable(){

}

Editable.prototype.toggleEditEl = function(){
    var that = this;
    return (
        <i {...{
            className: "fa fa-pencil-square-o",
            onClick: function(){
                that.setState({
                    editing: !that.state.editing
                });
            }
        }}/>
    );
}

module.exports = Editable;