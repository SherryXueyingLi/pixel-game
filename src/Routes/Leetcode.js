import React from "react";
import * as Leetcode0  from "../Leetcode/1-9/index";
import * as Leetcode9  from "../Leetcode/90-99/index";

import * as Leetcode10  from "../Leetcode/100-109/index";
import * as Leetcode11  from "../Leetcode/110-119/index";
import * as Leetcode12  from "../Leetcode/120-129/index";
import * as Leetcode13  from "../Leetcode/130-139/index";
import * as Leetcode14  from "../Leetcode/140-149/index";


import NumberofIslands  from "../Leetcode/200";

export default class Leetcode extends React.Component{
    constructor(){
        super();
        this.tags = this.generateTags();
    }

    generateTags(){
        let tags = {};
        let imported = [Leetcode0, Leetcode9, Leetcode10, Leetcode11, Leetcode12, Leetcode13, Leetcode14];
        for(let v in  imported){          
            for(let key in imported[v]){
                let index = key.split("leetcode")[1];
                tags[index] =imported[v][key];
            }
        }
        return tags;
    }

    render(){
        const { subjects } = this.props.params;
        
        const tags = this.tags;

        const codes = Object.keys(tags).filter(v=>{             
                    return +v>=+subjects && +v <(+subjects+10);}).map(key=>{
                        return React.createElement(tags[key], {id: `leetcode/${subjects}/${key}`, key})
                    });
        const indexes = Object.keys(tags).filter(v=>{return +v >= +subjects && +v <(+subjects+10); }).map((key) =>{
                           return (
                               <a href={`#leetcode/${subjects}/${key}`} class="list-group-item" key={key}>{key}. {tags[key].title()}</a>
                           );
                       });
        return (
            <div>
                <pre id="main">The story is, one day I open my leetcode page, planning to review my past codes, and found that leetcode is not actually saving any code for me.<br/>
                Which means all my code is gone for good.<br/>
                Then I told myself, it's time to do what you have planed for a long time but did not do and may not do ever:<br/>
                To reserve a page that holding all the code and solutions.<br/>

                There's the start of this page.<br/></pre>
                <div>
               
                </div>
                {codes}
            </div>
        )
    }
}

//  <div class="list-group" style={{position: "fixed", left:"0px", fontSize:"0.7em"}}>
//                     <a href="#leetcode" class="list-group-item active">
//                         Leetcode Subjects
//                     </a>
//                     {indexes}* 
//                 </div>