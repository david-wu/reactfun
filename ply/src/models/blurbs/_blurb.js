import React from 'react'
import _ from 'lodash'
import Persistent from '../_persistent.js'

function Blurb(){

}

Blurb.prototype = Object.create(React.Component);
_.extend(Blurb.prototype, Persistent.prototype);

Blurb.prototype.toggleEdit = function(){
    console.log('togglingEdit');
};

Blurb.prototype.archive = function(){
    console.log('archiving');
};

Blurb.prototype.handleChange = function(){
    console.log('changing');
};

Blurb.prototype.render = function() {
    return (
        <div {...{
            className: "card medium blurb",
        }}>

            <div className="card-header">
                EducationBlurb!
            </div>

            <div className="card-body">

                <label className="card-section flex-1">
                    School:
                    <input {...{
                        onChange: this.save.bind(this),
                        type: 'text'
                    }}/>
                </label>

                <label className="card-section flex-1">
                    Dates Attended:
                    <input {...{
                        onChange: this.handleChange,
                        type: 'date'
                    }}/>
                </label>

                <label className="card-section flex-1">
                    Major:
                    <input {...{
                        onChange: this.handleChange,
                        type: 'text'
                    }}/>
                </label>

            </div>
        </div>
    );
};

module.exports = Blurb;