import java.util.Scanner;

public class RotateMatrixByNintyDegree {
    public static void funcRotate(int[][] inputMat) {
        // Write your code here
        int row = inputMat.length;
        int col = inputMat[0].length;

        for (int j = 0; j < col; j++) {
            for (int i = (row - 1); i >= 0; i--) {
                System.out.print(inputMat[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // input for inputMat
        int inputMat_row = in.nextInt();
        int inputMat_col = in.nextInt();
        int inputMat[][] = new int[inputMat_row][inputMat_col];
        for (int idx = 0; idx < inputMat_row; idx++) {
            for (int jdx = 0; jdx < inputMat_col; jdx++) {
                inputMat[idx][jdx] = in.nextInt();
            }
        }

        funcRotate(inputMat);
    }
}