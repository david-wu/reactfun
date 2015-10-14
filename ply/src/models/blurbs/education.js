import _ from 'lodash'
import React from 'react'
import Blurb from './_blurb.js'

function EducationBlurb(attrs){
    React.Component.call(this)
    console.log(attrs);
    this.state = {
        editing: false
    };
    this.schoolName = 'asdf'+Math.random();
    this.major = 'sci'
}

EducationBlurb.prototype = Object.create(React.Component.prototype);
_.extend(EducationBlurb.prototype, Blurb.prototype);

EducationBlurb.prototype.form = function(){
    return {
        schoolName: this.schoolName,
        major: this.major
    };
};

EducationBlurb.prototype.schoolEl = function(){
    if(this.state && this.state.editing){
        return(
            <label className="card-section flex-1">
                School:
                <input {...{
                    value: this.schoolName,
                    onChange: this.handleChange.bind(this),
                    type: 'text'
                }}/>
            </label>
        );
    }else{
        return(
            <label className="card-section flex-1">
                School: {this.schoolName}
            </label>
        );
    }
};

EducationBlurb.prototype.majorEl = function(){
    // if(this.state.editing){
        // return(
        //     <label className="card-section flex-1">
        //         Major:

        //             if(this.state.editing){
        //                 return (
        //                     <input {...{
        //                         value: this.major,
        //                         onChange: this.handleChange.bind(this),
        //                         type: 'text'
        //                     }}/>
        //                 )
        //             }else{
        //                 return (<div>{this.major}</div>)
        //             }


        //     </label>
        // );
    // }else{
    //     return(
    //         <label className="card-section flex-1">
    //             Major: {this.major}
    //         </label>
    //     );
    // }
};

EducationBlurb.prototype.render = function() {
    var that = this;
    return(
        <div {...{
            className: "card medium blurb",
        }}>

            <div className="card-header">
                EducationBlurb!
                {this.toggleEditEl()}
            </div>

            <div className="card-body">

                {this.schoolEl()}

            </div>
        </div>
    );
};

module.exports = EducationBlurb;