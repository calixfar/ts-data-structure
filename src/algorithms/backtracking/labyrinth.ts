const CLOSER_COORDS = [[0,1], [1,-1], [1,0], [1,1]]

export function backtrackingLabyrinth(array: number[][]) {
	const lengthX = array.length, lengthY = array[0].length, paths: ([number, number] | null)[][] = []
	
	function recursive(indexX: number, indexY: number , path: ([number, number] | null)[] = []): any {
		if (indexX === -1 || indexY === -1 || (indexX >= lengthX || indexY >= lengthY)) {
			return [null]
		}

    path.push([indexX, indexY])

		if (indexX === lengthX - 1 && indexY === lengthY - 1) {
			return path
		}

		for (const coord of CLOSER_COORDS) {
			let newIndexX = indexX + coord[0], newIndexY = indexY + coord[1]

			if((newIndexX >= 0 && newIndexY >= 0) && 
				(newIndexX < lengthX && newIndexY < lengthY) && 
				array[newIndexX][newIndexY] === 0) {
				paths.push(recursive(newIndexX, newIndexY, [...path]))
			}
		}

		return [null]
	}
	
	recursive(0, 0)

	let longestPathIndex = -1, shortestPathIndex = -1

	paths.forEach((path, index) => {
		if (path[0] === null) {
			return
		}

		if (longestPathIndex === -1 || path.length > paths[longestPathIndex].length) {
			longestPathIndex = index
		}
		
		if (shortestPathIndex === -1 || path.length < paths[shortestPathIndex].length) {
			shortestPathIndex = index
		}
	})

	return {
		longestPath: paths[longestPathIndex].join('|'),
		shortestPath: paths[shortestPathIndex].join('|') 
	}
}

const array = [
[0,0,0,1,1],
[1,0,0,0,0],
[1,1,0,1,0],
[1,0,1,0,1],
[0,1,1,1,0]
]

console.table(backtrackingLabyrinth(array))
