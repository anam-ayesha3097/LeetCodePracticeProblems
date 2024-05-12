class PalindromeNumber {
    public static void main(String args[]) {
        System.out.println(isPalindrome(0));
    }

    public static boolean isPalindrome(int x) {
        if (x >= -(Math.pow(2, 31)) && x <= (Math.pow(2, 31) - 1)) {
            int t = x, p = 0;
            while (t != 0) {
                p = p * 10 + (t % 10);
                t = t / 10;
            }
            if (x >= 0 && p == x)
                return true;
        }
        return false;
    }
}