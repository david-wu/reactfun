import React from 'react'

var AddBlurb = React.createClass({
    getInitialState: function(){
        return {
        };
    },
    handleChange: function(e){
        console.log('e', e)
    },
    render: function() {
        var reactComponent = (
            <div {...{
                className: "card medium blurb",
            }}>

                <div className="card-header">
                    AddBlurb!
                </div>

                <div className="card-body">
                    <label>
                        Title:
                        <input {...{
                            value: 'a',
                            onChange: this.handleChange,
                            type: 'text'
                        }}></input>
                    </label>
                    <label>
                        Summary:
                        <input {...{
                            value: 'a',
                            onChange: this.handleChange,
                            type: 'text'
                        }}></input>
                    </label>
                </div>
            </div>
        );

        return reactComponent;
    }
});

module.exports = AddBlurb;