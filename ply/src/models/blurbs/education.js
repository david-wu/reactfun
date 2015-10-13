import React from 'react'
import Blurb from './_blurb.js'

function EducationBlurb(){
}

EducationBlurb.prototype = Object.create(Blurb.prototype);

EducationBlurb.prototype.render = function() {
    var reactComponent = (
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
                        onChange: this.handleChange.bind(this),
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

    return reactComponent;
};

module.exports = EducationBlurb;