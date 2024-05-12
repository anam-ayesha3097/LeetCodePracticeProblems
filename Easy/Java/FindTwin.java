import java.util.Scanner;

public class FindTwin {
    public static void funcTwins(int[] inputArr) {
        // Write your code here
        int twin = -1;

        for (int i = 0; i < inputArr.length; i++) {
            for (int j = i + 1; j < inputArr.length; j++) {
                // System.out.println(inputArr[i] + " " + inputArr[j]);
                if (inputArr[i] != inputArr[j] && (j + 1) < inputArr.length && inputArr[j] != inputArr[j + 1]) {
                    twin = inputArr[j];
                    break;
                } else {
                    break;
                }
            }
            if (twin != -1)
                break;
        }
        System.out.println(twin);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // input for inputArr
        int inputArr_size = in.nextInt();
        int inputArr[] = new int[inputArr_size];
        for (int idx = 0; idx < inputArr_size; idx++) {
            inputArr[idx] = in.nextInt();
        }

        funcTwins(inputArr);
    }
}