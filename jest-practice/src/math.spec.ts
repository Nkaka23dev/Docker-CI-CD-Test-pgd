// import * as math from "./math";

// jest.spyOn(math, "sum")

// describe("Sum", () => {
//     it("Should check if sum is called and returned right value", () => {
//         //Arrange
//         const num1 = 12;
//         const num2 = 23;
//         //Act
//         const result = math.sum(num1, num2);

//         //Assert
//         expect(result).toEqual(num1 + num2);
//         expect(math.sum).toHaveBeenCalled();
//         expect(math.sum).toHaveBeenCalledTimes(1);
//         expect(math.sum).toHaveBeenCalledWith(num1, num2);
//     })
// })




import { sum } from "./math";

jest.mock("./math", () => ({
    sum: jest.fn()
}))

describe("Sum", () => {
    it("Should check if sum is called and returned right value", () => {
        //Arrange
        const num1 = 12;
        const num2 = 23;

        (sum as jest.Mock).mockReturnValue(num1 + num2);

        //Act
        const result = sum(num1, num2);

        //Assert
        expect(result).toEqual(num1 + num2);
        expect(sum).toHaveBeenCalled();
        expect(sum).toHaveBeenCalledTimes(1);
        expect(sum).toHaveBeenCalledWith(num1, num2);
    })
})

