
class TwoSum {

    public static void main(String[] args) {
        int indices[] = new int[2];
        int nums[] = { 3, 3 };
        indices = twoSum(nums, 6);
        if (indices[0] == -1 || indices[1] == -1)
            System.out.println("No Solution");
        else
            System.out.println("[" + indices[0] + "," + indices[1] + "]");
    }

    public static int[] twoSum(int nums[], int target) {
        int indices[] = new int[2];
        indices[0] = -1;
        indices[1] = -1;

        // Base Case
        if (nums.length <= 1)
            return indices;

        // Base Case
        if (nums.length == 2) {
            if ((nums[0] + nums[1]) == target)
                indices[0] = 0;
            indices[1] = 1;
            return indices;
        }

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (target == (nums[i] + nums[j])) {
                    indices[0] = i;
                    indices[1] = j;
                    return indices;
                }
            }
        }

        return indices;
    }
}