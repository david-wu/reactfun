import React from 'react'
import WorkHistoryBlurb from '../models/blurbs/experience.js'
import SkillsBlurb from '../models/blurbs/skills.js'
import EducationBlurb from '../models/blurbs/education.js'

var Main = React.createClass({
    getInitialState: function(){
        return {
            user: undefined,
            blurbs: {}
        };
    },
    addBlurb: function(blurb){

    },
    setUser: function(){

    },
    removeModel: function(){

    },
    render: function() {
        return (
            <div {...{
            }}>
                <h1>Main!</h1>
                <EducationBlurb/>
                <WorkHistoryBlurb/>
                <SkillsBlurb/>
            </div>
        );
    }
});


module.exports = Main;