import { verifyEvenNumber, isEvenNumber } from "../src/even"

jest.mock('../src/even.ts', () => ({
    verifyEvenNumber: jest.fn(),
    isEvenNumber: jest.fn()
}))
describe("Even function", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    })
    it("Should check if a number is Even or Odd.", () => {
        //Arrange
        const oddNumber = 5;
        const evenNumber = 4;

        (verifyEvenNumber as jest.Mock).mockImplementation((num1) => num1 % 2 === 0);

        //Act
        const oddNumberResult = verifyEvenNumber(oddNumber)
        const evenNumberResult = verifyEvenNumber(evenNumber)

        //Assert
        expect(oddNumberResult).toBeFalsy();
        expect(evenNumberResult).toBeTruthy();
    })
    it("Should check if verifyNumber is called", () => {
        //Arrange
        (verifyEvenNumber as jest.Mock).mockReturnValue(false);
        (isEvenNumber as jest.Mock).mockReturnValue(true)

        //Act
        verifyEvenNumber(5);
        isEvenNumber(4);
       
        //Assert
        expect(verifyEvenNumber).toHaveBeenCalled();
        expect(verifyEvenNumber).toHaveBeenCalledTimes(1);
        expect(verifyEvenNumber).toHaveBeenCalledWith(5);
        expect(isEvenNumber).toHaveBeenCalled();

    })
})