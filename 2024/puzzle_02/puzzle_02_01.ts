import { isAllInRowDecreasing, isAllInRowIncreasing, isTheDifferenceAtLeastOneAndThreeAtMost } from './helpers';
import {levels} from './levels';

let safeReports = 0

levels.map((level) => {
    if(isAllInRowDecreasing(level) || isAllInRowIncreasing(level)) {
        isTheDifferenceAtLeastOneAndThreeAtMost(level) && safeReports++;
    }
})

console.log(safeReports);
