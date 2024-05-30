function twoSum(nums, target){
    let indices = [-1, -1];

    if(nums.length <= 1)
        return indices;
    if(nums.length == 2 && (nums[0] + nums[1]) == target)
    {
        indices[0] = 0;
        indices[1] = 1;
        return indices;
    }

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(target == (nums[i] + nums[j]))
            {
                indices[0] = i;
                indices[1] = j;
                return indices;
            }
        }
    }

    return indices;
}

let indices = [-1, -1];
indices = twoSum([3, 2, 4], 9);
if (indices[0] == -1 && indices[1] == -1) 
    console.log("No Solution");
else
    console.log(`[ ${indices[0]}, ${indices[1]}]`);