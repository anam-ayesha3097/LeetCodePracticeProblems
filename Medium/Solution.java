
import java.util.*;
import java.lang.*;
import java.io.*;

/*
 * matrix, represents the elements in each cell of the matrix of size N*M.
 */
public class Solution {
    public static void funcHopSkipJump(int[][] matrix) {
        // Write your code here
        int row = matrix.length;
        int col = matrix[0].length;
        int reachable = 41;
        int reachableOther = 4;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (matrix[i][j] == reachable) {
                    System.out.println(matrix[i][j]);
                    break;
                } else if (matrix[i][j] == reachableOther) {
                    System.out.println(matrix[i][j]);
                    break;
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // input for matrix
        int matrix_row = in.nextInt();
        int matrix_col = in.nextInt();
        int matrix[][] = new int[matrix_row][matrix_col];
        for (int idx = 0; idx < matrix_row; idx++) {
            for (int jdx = 0; jdx < matrix_col; jdx++) {
                matrix[idx][jdx] = in.nextInt();
            }
        }

        funcHopSkipJump(matrix);
    }
}