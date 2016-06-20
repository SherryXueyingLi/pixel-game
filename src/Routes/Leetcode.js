import React from "react";
import SubsetII from "../Leetcode/90";
import DecodeWays from "../Leetcode/91";
import ReverseListII from "../Leetcode/92";
import RestoreIPAddresses from "../Leetcode/93";
import BinaryTreeInorder from "../Leetcode/94";

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
                <div class="list-group" style={{position: "fixed", left:"5%"}}>
                    <a href="#main" class="list-group-item active">
                        Leetcode Subjects
                    </a>
                    <a href="#leetcode/90" class="list-group-item">90 Subset II</a>
                    <a href="#leetcode/91" class="list-group-item">91 Decode Ways</a>
                    <a href="#leetcode/92" class="list-group-item">92 Reverse Node List II</a>
                    <a href="#leetcode/93" class="list-group-item">93 Restore IP Addresses</a>
                    <a href="#leetcode/93" class="list-group-item">94. Binary Tree Inorder Traversal</a>
                    </div>
                </div>
                    <SubsetII id="leetcode/90" ></SubsetII>
                    <DecodeWays id="leetcode/91"/>
                    <ReverseListII id="leetcode/92"/>
                    <RestoreIPAddresses id="leetcode/93" />
                    <BinaryTreeInorder id="leetcode/93" />
            </div>
        )
    }
}