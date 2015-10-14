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
        // var blurbs = [];
        // for(var i = 0; i < 10; i++){
        //     blurbs.push(new EducationBlurb());
        // }
        // console.log(blurbs)

        return (
            <div {...{
            }}>
                <h1>Main!</h1>

                <EducationBlurb data={{test:3}}/>
                <WorkHistoryBlurb/>
                <SkillsBlurb/>
            </div>
        );
    }
});


module.exports = Main;