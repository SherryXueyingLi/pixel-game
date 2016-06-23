import React from "react";
import SubsetII from "../Leetcode/90";
import DecodeWays from "../Leetcode/91";
import ReverseListII from "../Leetcode/92";
import RestoreIPAddresses from "../Leetcode/93";
import BinaryTreeInorder from "../Leetcode/94";
import UniqueTreesII from "../Leetcode/95";
import UniqueTrees from "../Leetcode/96";
import Interleaving from "../Leetcode/97";
import ValidateBSTree from "../Leetcode/98";

export default class Leetcode extends React.Component{
    constructor(){
        super();
    }

    render(){
        const subjects = {
            90: "Subset II",
            91: "Decode Ways",
            92: "Reverse Node List II",
            93: "Restore IP Addresses",
            94: "Binary Tree Inorder Traversal",
            95: "Unique Binary Search Trees II",
            96: "Unique Binary Search Trees",
            97: "Interleaving String",
            98: "Validate Binary Search Tree"
        };
        const indexes = Object.keys(subjects).map((key) =>{
                           return (
                               <a href={"#leetcode/"+key} class="list-group-item" key={key}>{key} {subjects[key]}</a>
                           );
                       })
        return (
            <div>
                <pre id="main">The story is, one day I open my leetcode page, planning to review my past codes, and found that leetcode is not actually saving any code for me.<br/>
                Which means all my code is gone for good.<br/>
                Then I told myself, it's time to do what you have planed for a long time but did not do and may not do ever:<br/>
                To reserve a page that holding all the code and solutions.<br/>

                There's the start of this page.<br/></pre>
                <div>
                <div class="list-group" style={{position: "fixed", left:"5%"}}>
                    <a href="#main" class="list-group-item active">
                        Leetcode Subjects
                    </a>
                    {indexes}
                    </div>
                </div>
                    <SubsetII id="leetcode/90" />
                    <DecodeWays id="leetcode/91"/>
                    <ReverseListII id="leetcode/92"/>
                    <RestoreIPAddresses id="leetcode/93" />
                    <BinaryTreeInorder id="leetcode/94" />
                    <UniqueTreesII id="leetcode/95" />
                    <UniqueTrees id="leetcode/96" />
                    <Interleaving id="leetcode/97" />
                    <ValidateBSTree id="leetcode/98" />
            </div>
        )
    }
}