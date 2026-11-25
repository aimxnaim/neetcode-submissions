class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count : number = 0 ;
        let currNo : number = 0 ;
        let maxNo: number = 0;
        while(count < nums.length){
            if(nums[count] === 1){
                currNo++
            } else {
                currNo = 0 
            }
            maxNo = Math.max(maxNo, currNo)
            count++
        }
        // return Math.max(...myArray)
        return maxNo
    }
}
