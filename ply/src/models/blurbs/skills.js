import React from 'react'
import Blurb from './_blurb.js'

function SkillsBlurb(){
}

SkillsBlurb.prototype = Object.create(Blurb.prototype);

SkillsBlurb.prototype.render = function() {
    var reactComponent = (
        <div {...{
            className: "card medium blurb",
        }}>

            <div className="card-header">
                Skills!
            </div>

            <div className="card-body">

                <label className="card-section flex-1">
                    Skills:
                    <input {...{
                        onChange: this.handleChange,
                        type: 'text'
                    }}/>
                </label>

                <label className="card-section flex-1">
                    Start and End Dates:
                    <input {...{
                        onChange: this.handleChange,
                        type: 'date'
                    }}/>
                </label>

            </div>
        </div>
    );

    return reactComponent;
};

module.exports = SkillsBlurb;