let matrix = n => {
    let results = [];

    // init all 2d arrays
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let count = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;

    while (startCol <= endCol && endRow >= startRow) {
        // Top row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = count;
            count++;
        }
        startRow++;

        // Right col
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = count;
            count++;
        }
        endCol--;

        // Bottom row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = count;
            count++;
        }
        endRow--;

        // Start col
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = count;
            count++;
        }
        startCol++;
    }
    console.log('results', results);
    // find midpoint to start at (base on even/odd) console.log(results);
    return results;
};

module.exports = {
    matrix
}