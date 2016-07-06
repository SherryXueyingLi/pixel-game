import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`There are two sorted arrays \`nums1\` and \`nums2\` of size m and n respectively.\n

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).\n

__Example 1:__\n
    nums1 = [1, 3]
    nums2 = [2]

The median is 2.0\n
__Example 2:__\n
    nums1 = [1, 2]
    nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5`,
             code: ``,
            explain:``          
        }
    }

    static title(){ return "4. Median of Two Sorted Arrays";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}