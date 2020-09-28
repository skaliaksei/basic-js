const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
    if (!(Array.isArray(members))) {
        return false;
    }   else {

        let countOfStrings = 0;

        for (let i = 0; i < members.length; i++) {
            if (typeof(members[i]) === 'string') {
                countOfStrings++;
            }
        }

        let outArray = new Array(countOfStrings);

        for (let i = 0, j = 0; i < members.length; i++) {
            if (typeof(members[i]) === 'string') {
                outArray[j] = members[i].trim().substr(0, 1).toUpperCase();
                j++;
            }
        }

        return outArray.sort().join('');
    }
};
