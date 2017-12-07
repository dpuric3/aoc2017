const treeString = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;



function createUnsortedTreeArray(treeString) {
	var num = treeString.split('\n');
	var unsortedTree = [];

	for (var i = 0; i < num.length;i++) {
		var node = {};
		var parents = num[i].split(/\->/)[1];
		if (parents) {
			parents = parents.trim();
			node.parents = parents.split(/[ ,]+/);
		}
		
		var name = num[i].split(/[ ,]+/)[0];
		var weight = parseInt(num[i].match(/\(([^)]+)\)/)[1], 10);
		node.weight = weight;
		node.name = name;
		unsortedTree.push(node);
	}
	return unsortedTree;
}

function findBottomNode(unsortedTree) {
	var newTree = [];
	//remove nodes without parents
	for (var i = 0; i < unsortedTree.length;i++) {
		// console.log(unsortedTree[i].parents);
		if (unsortedTree[i].parents) {
			newTree.push(unsortedTree[i]);
		}
	}

	var tempArr = newTree.slice();

	for (var i = 0; i < newTree.length; i++) {
		var node = newTree[i].name;

		for (var k = 0; k < newTree.length; k++) {
			if( newTree[k].parents.includes(node)) {
				tempArr = tempArr.filter(item => item.name !== node)
			}
		}
	}
	return tempArr;
}


function findUnbalancedNode(unsortedTree, bottomNode) {
	var node = bottomNode[0];
	var par = getParents(node, unsortedTree);
	console.log(par);
	// for (var i; par.length; i++) {
		
	// }
}

function getParents(node, unsortedTree) {
	var parents = [];
	for (var i = 0; i < unsortedTree.length;i++) {
		if (node.parents.includes(unsortedTree[i].name)) {
			parents.push(unsortedTree[i]);
		}
	}
	return parents;
}

function checkParents(node, unsortedTree) {
	for (var i = 0; i < unsortedTree.length;i++) {
		if (node.parents.includes(unsortedTree[i].name)) {
			return true;
		}
	}
	return false;
}
