// import java.util.HashMap;
// import java.util.Map;

class LongestSubstringWithoutRepeatingCharacters {

    public static void main(String args[]) {
        int lengthLCS = lengthOfLongestSubstring("dvdf");
        System.out.println("LCS without Repeating Characters length: " + lengthLCS);

        int[][] array_name = new int[3][5];
        int row = array_name.length; // row
        int col = array_name[0].length; // col
        System.out.println(row + " " + col);
    }

    public static int lengthOfLongestSubstring(String s) {
        char[] uniqueChar = new char[s.length()];
        int[] dp = new int[s.length()];
        String lcs = "";
        int lcsdp = 0;
        // Map<Character, Integer> lcs = new HashMap<Character, Integer>();
        int len = 0, max = -1;
        if (s.length() > 0 && s.length() <= 50000) {
            // DP initialization
            uniqueChar[0] = s.charAt(0);
            dp[0] = ++len;
            max = dp[0];
            // System.out.println(dp[0] + " " + uniqueChar[0]);
            // Character.isLetter(max)
            for (int i = 1; i < s.length(); i++) {
                dp[i] = 0;
                for (int j = 0; j < i; j++) {
                    if (s.charAt(i) == uniqueChar[j]) {
                        dp[i] = dp[j];
                        break;
                    }
                }

                if (dp[i] == 0) {
                    dp[i] = ++len;
                    uniqueChar[i] = s.charAt(i);
                    // lcs += Character.toString(s.charAt(i));
                    // System.out.println(dp[i] + " " + uniqueChar[i]);
                }
            }
            for (int i = 0; i < dp.length; i++)
                System.out.print(dp[i] + "\t");

            System.out.println();

            for (int i = 0; i < dp.length; i++) {

                if ((i + 1) < dp.length)
                    System.out.println(dp[i] + " " + dp[i + 1]);
                if ((i + 1) < dp.length && dp[i] != dp[i + 1] && dp[i + 1] > dp[i] && dp[i] > lcsdp) {
                    // System.out.println(dp[i] + " " + dp[i + 1]);
                    lcs += Character.toString(s.charAt(i));
                    System.out.println(lcs);
                    max = lcs.length();
                    lcsdp = dp[i];
                } else if ((i + 1) < dp.length && dp[i] == dp[i + 1]) {
                    lcs = "";
                } else if ((i + 1) < dp.length && dp[i] > dp[i + 1]) {
                    // System.out.println(dp[i]);
                    lcs += Character.toString(s.charAt(i));
                    max = lcs.length();
                    lcsdp = dp[i];
                    // System.out.println("lcsdp " + lcsdp);
                }
            }

            // for (int i = 0; i < dp.length; i++) {
            // if ((i + 1) < dp.length && dp[i] != dp[i + 1] && dp[i + 1] > dp[i]) {
            // lcs.put(s.charAt(i), dp[i]);
            // } else if ((i + 1) < dp.length && dp[i] == dp[i + 1]) {
            // if(lcs.containsKey())
            // }
            // }
            System.out.println("LCS:  " + lcs);
            if (max == 1)
                lcs += Character.toString(s.charAt(0));
            return max;
        }
        return 0;
    }
}