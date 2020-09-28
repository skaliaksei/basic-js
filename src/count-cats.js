const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  let count = 0;

    if (matrix.length != 0) {
        let width = matrix[0].length;
        let height = matrix.length;

        for (let i = 0; i < height; i++) {
            for (j = 0; j < width; j++) {
                if (matrix[i][j] === '^^') {
                    count++;
                }
            }
        }

        return count;
    }

    return count;
};
