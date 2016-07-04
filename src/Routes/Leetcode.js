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
import RecoverBST from "../Leetcode/99";
import SameTree from "../Leetcode/100";
import SymmetricTree from "../Leetcode/101";
import LevelOrder from "../Leetcode/102";
import ZigzagLevel from "../Leetcode/103";
import TreeDepth from "../Leetcode/104";
import ConsTreeFromPI from "../Leetcode/105";
import ConsTreeFromPI2 from "../Leetcode/106";
import LevelOrderII from "../Leetcode/107";
import Array2BST from "../Leetcode/108";
import List2BST from "../Leetcode/109";
import BalancedBinaryTree from "../Leetcode/110";
import MinDepth from "../Leetcode/111";
import PathSum from "../Leetcode/112";
import PathSumII from "../Leetcode/113";

import NumberofIslands  from "../Leetcode/200";

export default class Leetcode extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        const { subjects } = this.props.params;
        
        const tags = {
            90: SubsetII,
            91: DecodeWays,
            92: ReverseListII,
            93: RestoreIPAddresses,
            94: BinaryTreeInorder,
            95: UniqueTreesII,
            96: UniqueTreesII,
            97: Interleaving,
            98: ValidateBSTree,
            99: RecoverBST,
            100: SameTree,
            101: SymmetricTree,
            102: LevelOrder,
            103: ZigzagLevel,
            104: TreeDepth,
            105: ConsTreeFromPI,
            106: ConsTreeFromPI2,
            107: LevelOrderII,
            108: Array2BST,
            109: List2BST,
            110: BalancedBinaryTree,
            111: MinDepth,
            112: PathSum,
            113: PathSumII,
            200: NumberofIslands
        };
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
                <div class="list-group" style={{position: "fixed", left:"0px", fontSize:"0.7em"}}>
                    <a href="#leetcode" class="list-group-item active">
                        Leetcode Subjects
                    </a>
                    {indexes}
                    </div>
                </div>
                {codes}
            </div>
        )
    }
}