import { isAllInRowDecreasing, isAllInRowIncreasing, isTheDifferenceAtLeastOneAndThreeAtMost, removeElementAtIndex } from './helpers';
import {levels} from './levels';

let safeReports = 0

const isReportSafe = (level: number[]) => 
    (isAllInRowDecreasing(level) || isAllInRowIncreasing(level)) 
    && isTheDifferenceAtLeastOneAndThreeAtMost(level);

levels.map((level) => {
    if(isReportSafe(level)) {
        safeReports++;
        return;
    }   

    for (let i = 0; i < level.length; i++) {
        const arrayWithoutIndexToTest = removeElementAtIndex(level, i);
        if (isReportSafe(arrayWithoutIndexToTest)) {
            safeReports++;
            return;
        } 
    }
});

console.log(safeReports);
