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
             code: `/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n=nums2.length, mid = Math.floor((m+n)/2); //if odd it's mid, if even, it's mid-1 & mid
    console.log("mid index is ", mid);
    if(m>n) return findMedianSortedArrays(nums2, nums1); //Note 1: make sure m<=n
    let min = 0, max = m; //search i in [0...m];
    while(min <= max){
        let i = Math.floor((max + min + 1)/2), j = mid - i;
        if(i>0 && j<n && nums1[i-1]>nums2[j]) max=i-1;
        else if(j>0 && i<m && nums2[j-1]>nums1[i]) min=i+1;
        else{
            let left, right;
            if(i===m) right = nums2[j];
            else if(j===n) right = nums1[i];
            else right = Math.min(nums1[i], nums2[j]);
            if((m+n)%2 === 1) return right;
            
            if(i===0) left = nums2[j-1];
            else if(j===0) left = nums1[i-1];
            else left = Math.max(nums1[i-1], nums2[j-1]);
            
            return (left+right)/2
        }
    }
};`,
            explain:`The best solution with O(log(min(m, n))): \n
Frist let make sure we use A, B as input array, and we want A.length <= B.length, so once we find that input is not satisfy the condition, we recursive it with reversed input, check comment Note1. \n
Now we have m = A.length, n = B.length, and m<=n. let's split A and B into A[0...i-1], A[i...m-1], B[0...j-1], B[j...n-1].\n

        A[0...i-1] | A[i...m-1]
        B[0...j-1] | B[j...n-1]

now left length is \`i+j\`, right length is \`m+m-(i+j)\`. Assume the merged array is C, Now we want:\n

    if m+n is odd:  i+j+1 =  m+m-(i+j), 
        middle index = (m+n-1)/2 = Math.floor((m+n)/2). 
        target element is C[mid]. ---(condition a)
    if m+n is even: i+j =  m+m-(i+j), 
        middle index = (m+n)/2. 
        two element's index are C[mid-1] & C[mid]. ---(contition b)

So the right part's lengh is __equal to__ or __one element larger than__ left part.\n

Now assume we found i and j properly, who is C[mid]? Actually, according our conditions,  \n
	merge(A[0...i-1], B[0...j-1]) = C[0...mid-1]
	merge(A[i...m-1], B[j...n-1]) = C[mid...m+n-1]

    So C[mid-1] = Math.max(A[i-1], B[j-1]) -- formular a
       C[mid] =   Math.min(A[i], B[j]).    -- formular b

So how do we find i & j?\n
now remeber we have conditions(a & b) mentioned before, \n
    use (a), we know that i+j+1 = 2*mid+1-(i+j) => mid = i+j
    use (b), we know that i+j =   2*mid-(i+j)   => mid = i+j.

So \`mid = i+j\`, it's sum is instante, we only have to find i.\n

For the begining, i's interval \`[min, max] = [0...m-1]\`, \n

1. so we use binary search, set \`i = (max+min)/2\`, then we know that \`j=mid-i\`; \n

2. If \`A[i]>B[j-1]\`, we know that i must between[i+1, max], we update interval, and back to 1. -- \`case a\` \n
   If \`B[j]<A[i-1]\`, we know that i must between[min, i-1], we update interval, and back to 1. -- \`case b\` \n

For case a and b, you may wonder, what about the edge condition?  \n

when we compare  A[i],B[j-1] what if i=m, or j = 0? \n

For case a: If i===m, that for all A[0..i] are smaller than B[j-1], that means All set A are smaller than B[j-1], we've actually found i & j now. \n
Same logic goes for j===0. So if we reach the edge of A, we are actually fond i and j, we do not need to go back to step 1. \n

So case a and b could be change to:  \n
2. If:  \`i<m && j>0 && A[i]>B[j-1]\`, we know that i must between\`[i+1, max]\`, we update interval, and back to 1. -- case a  \n
   else If:  \`j<n && i>0 && B[j]<A[i-1]\`, we know that i must between\`[min, i-1]\`, we update interval, and back to 1. -- case b  \n
   else: we found i & j, goto step 3.

3. Now we have proper i and j, remeber in formular(a, b), we have an target already, the only thing is, if any of the element do not exist, ignor it.\n

    Say: C[mid-1]=B[j-1]  if i===m  
                  A[i-1]  if j===n
                  Math.max(A[i-1], B[j-1] ) other cases`                 
        }
    }

    static title(){ return "4. Median of Two Sorted Arrays";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}