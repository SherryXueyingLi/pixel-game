import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.\n


OJ's undirected graph serialization:\n
Nodes are labeled uniquely.\n

We use \`#\` as a separator for each node, and \`,\` as a separator for node label and each neighbor of the node.\n
As an example, consider the serialized graph \`{0,1,2#1,2#2,2}\`.\n

The graph has a total of three nodes, and therefore contains three parts as separated by \`#\`.\n

First node is labeled as 0. Connect node 0 to both nodes \`1\` and \`2\`.\n
Second node is labeled as 1. Connect node 1 to node \`2\`.\n
Third node is labeled as 2. Connect node 2 to node \`2\` (itself), thus forming a self-cycle.\n
Visually, the graph looks like the following:\n

           1
          / \\
         /   \\
        0 --- 2
             / \\
             \\_/`,
             code: `/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    return cloneUnmarkedGraph(graph, {});
};

var cloneUnmarkedGraph = function(graph, marked) {
    if(!graph) return null;
    if(marked[graph.label]) return marked[graph.label];
    let node = new UndirectedGraphNode(graph.label);
    marked[graph.label] = node;
    for(let i in graph.neighbors){
        node.neighbors.push(cloneUnmarkedGraph(graph.neighbors[i], marked));
    }
    return node;
};`,
            explain:`Use map to save the nodes that have been created.`          
        }
    }

    static title(){ return "133. Clone Graph";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}