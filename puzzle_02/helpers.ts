export const isAllInRowDecreasing = (row: number[]) => {
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] <= row[i + 1]) {
            return false;
        }
    }
    return true;
}

export const isAllInRowIncreasing = (row: number[]) => {
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] >= row[i + 1]) {
            return false;
        }
    }
    return true;
}

export const isTheDifferenceAtLeastOneAndThreeAtMost = (row: number[]) => {
    for (let i = 0; i < row.length - 1; i++) {
        if (Math.abs(row[i] - row[i + 1]) > 3) {
            return false;
        }
    }
    return true;
}

export function removeElementAtIndex(arr: number[], index: number): number[] {
    return arr.slice(0, index).concat(arr.slice(index + 1));
}
