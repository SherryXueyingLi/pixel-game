//207. Course Schedule
// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// For example:

// 2, [[1,0]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

// 2, [[1,0],[0,1]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Note:
// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

// click to show more hints.

// Hints:
// This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
// Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
// Topological sort could also be done via BFS.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish_BFS = function(numCourses, prerequisites) {
    let graph = convertGraph(numCourses, prerequisites);
    let indegrees = countinDegree(numCourses, graph);
    for(let i=0; i<numCourses; i++){
        let zeroIndex = findZero(indegrees);
        if(zeroIndex === -1){
             return false
        }
        indegrees[zeroIndex] = -1;
        for(let i in graph[zeroIndex]) if(graph[zeroIndex][i]) indegrees[i]--;
    }
    return true;
};

var canFinish_DFS = function(numCourses, prerequisites) {
    let graph = convertGraph(numCourses, prerequisites);
    
};

var findZero = function(array){
    for(let i in array){if(array[i]===0) return i;}
    return -1;
}

var convertGraph = function(numCourses, prerequisites){
    let graph=[];
    for(let i=0; i<numCourses; i++){
        let t = [];
        for(let j=0; j<numCourses; j++){
            t.push(0);
        } 
        graph.push(t);
    }
    
    for(let i in prerequisites){
        let pair = prerequisites[i];
        graph[pair[1]][pair[0]] = 1;
    }
    return graph;
}

var countinDegree = function(numCourses, graph){
    let indegrees = Array.apply(null,Array(numCourses)).map(v=>{return 0});
    for(let i in graph){
        for(let j in graph[i]){
            if(graph[i][j]===1)  indegrees[j]++;
        }
    }
    return indegrees;
}