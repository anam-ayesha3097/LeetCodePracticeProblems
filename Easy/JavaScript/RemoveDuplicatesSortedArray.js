var removeDuplicates = function(nums) {
    
    if(nums == undefined)
        return 0;
    if(nums.length == 1)
        return 1;


    let k = 1;
    for(let i = 1; i < nums.length; i++){
        if (nums[k - 1] != nums[i])
        {
            nums[k] = nums[i];
            k++;
        }   
    }

    console.log(nums);
    return k;

};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
