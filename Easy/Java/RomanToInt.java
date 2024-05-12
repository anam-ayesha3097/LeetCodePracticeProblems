class RomanToInt {

    public static void main(String args[]) {
        System.out.println("romanToInt: " + romanToInt("MMMCMXCX"));
    }

    public static int romanToInt(String s) {
        int romanToInt = 0;
        if (s.length() > 0 && s.length() <= 15) {
            for (int i = 0; i < s.length(); i++) {
                if (s.charAt(i) == 'I')
                    romanToInt += 1;
                else if (s.charAt(i) == 'V' && (i - 1) >= 0 && s.charAt(i - 1) == 'I')
                    romanToInt += 3;
                else if (s.charAt(i) == 'V')
                    romanToInt += 5;
                else if (s.charAt(i) == 'X' && (i - 1) >= 0 && s.charAt(i - 1) == 'I')
                    romanToInt += 8;
                else if (s.charAt(i) == 'X')
                    romanToInt += 10;
                else if (s.charAt(i) == 'L' && (i - 1) >= 0 && s.charAt(i - 1) == 'X')
                    romanToInt += 30;
                else if (s.charAt(i) == 'L')
                    romanToInt += 50;
                else if (s.charAt(i) == 'C' && (i - 1) >= 0 && s.charAt(i - 1) == 'X')
                    romanToInt += 80;
                else if (s.charAt(i) == 'C')
                    romanToInt += 100;
                else if (s.charAt(i) == 'D' && (i - 1) >= 0 && s.charAt(i - 1) == 'C')
                    romanToInt += 300;
                else if (s.charAt(i) == 'D')
                    romanToInt += 500;
                else if (s.charAt(i) == 'M' && (i - 1) >= 0 && s.charAt(i - 1) == 'C')
                    romanToInt += 800;
                else if (s.charAt(i) == 'M')
                    romanToInt += 1000;
                else
                    romanToInt += 0;
            }
            if (romanToInt > 0 && romanToInt <= 3999)
                return romanToInt;
        }
        return 0;
    }
}