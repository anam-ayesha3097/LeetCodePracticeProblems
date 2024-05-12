class LargestOddNumberInString {
    public static void main(String args[]) {
        String num = "3691669784801845146";

        String largestOdd = largestOddNumber(num);

        System.out.println("Largest Odd Number: " + largestOdd);

    }

    public static String largestOddNumber(String num) {
        if (num.length() > 0 && num.length() <= 100000) {
            for (int i = num.length() - 1; i >= 0; i--) {
                if (((num.charAt(i) - '0') % 2) != 0)
                    return num;
                num = num.substring(0, i);
            }
        }
        return "";
        }
}