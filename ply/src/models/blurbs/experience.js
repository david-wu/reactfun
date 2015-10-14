import _ from 'lodash'
import React from 'react'
import Blurb from './_blurb.js'

function ExperienceBlurb(){
    React.Component.call(this)
    this.state = {};
}

ExperienceBlurb.prototype = Object.create(React.Component.prototype)
_.extend(ExperienceBlurb.prototype, Blurb.prototype);

ExperienceBlurb.prototype.render = function() {
    return (
        <div {...{
            className: "card medium blurb",
        }}>

            <div className="card-header">
                experienceBlurb!
                {this.toggleEditEl()}
            </div>

            <div className="card-body">

                <label className="card-section flex-1">
                    Skills:
                    <input {...{
                        onChange: this.handleChange.bind(this),
                        type: 'text'
                    }}/>
                </label>

                <label className="card-section flex-1">
                    Start and End Dates:
                    <input {...{
                        onChange: this.archive.bind(this),
                        type: 'date'
                    }}/>
                </label>

            </div>
        </div>
    );
};

module.exports = ExperienceBlurb;