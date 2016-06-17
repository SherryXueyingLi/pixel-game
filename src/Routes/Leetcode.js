import React from "react";
import SubsetII from "../Leetcode/Nity";

export default class Leetcode extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <pre id="main">The story is, one day I open my leetcode page, planning to review my past codes, and found that leetcode is not actually saving any code for me.<br/>
                Which means all my code is gone for good.<br/>
                Then I told myself, it's time to do what you have planed for a long time but did not do any may not do ever:<br/>
                To reserve a page that holding all the code and solutions.<br/>

                There's the start of this page.<br/></pre>
                <div>
                <div class="list-group" style={{position: "fixed"}}>
                    <a href="#main" class="list-group-item active">
                        Leetcode Subjects
                    </a>
                    <a href="#nity" class="list-group-item">90 Subset II
                    </a>
                    <a href="#" class="list-group-item">Morbi leo risus
                    </a>
                    </div>
                </div>
                <div id="nity" >
                    <SubsetII ></SubsetII>
                </div>
            </div>
        )
    }
}