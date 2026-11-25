class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count : number = 0 ;
        let total : number = 0 ;
        let myArray: number[] = [];
        while(count < nums.length){
            if(nums[count] === 1){
                total++
            } else {
                total = 0 
            }
            myArray.push(total)
            count++
        }
        return Math.max(...myArray)
    }
}
