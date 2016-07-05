import React from "react";

export default class Template extends React.Component{

    constructor(){
        super();
        this.md = window.markdownit({
            langPrefix:   'hljs-',
            highlight: function (str, lang){
                if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) {}
                }
                return ''; // use external default escaping
            }
        });
    }

    getTheme(){
        switch(this.props.difficulty){
            case "Hard": return "panel-primary";
            case "Medium" : return "panel-warning";
            case "Easy" : return "panel-info";
            default : return "panel-default";
        }
    }

    render(){
        const explain = this.md.render(this.props.explain|| '');
        const subject = this.md.render(this.props.subject|| '');
        const code = this.md.render("\n``` js\n" + (this.props.code||'')  +"\n```\n");
        
        return(
            <div class={"panel "+this.getTheme()} id={this.props.id}>
            <div class="panel-heading">{this.props.title}</div>
            <div class="panel-body" style={{borderBottom: 'solid #cccccc 1px'}}>
                <div class="row">   
                        <div class="col-md-12" dangerouslySetInnerHTML={{__html: subject}} >
                        </div>
                </div>
            </div>
            <div class="panel-body">
                <div class="row">   
                        <div class="col-md-6" dangerouslySetInnerHTML={{__html: explain}} >
                        </div>
                        <div class="col-md-6" dangerouslySetInnerHTML={{__html: code}}>
                        </div>
                </div>
            </div>
            </div>
        );
    }
}