def get_positive_float(prompt):
    while True:
        try:
            value = input(prompt)
            value = float(value)
            if value <= 0:
                print("Please enter a positive number greater than zero.")
            elif value > 1000:
                print("That seems too high. Please enter a reasonable number.")
            else:
                return value
        except ValueError:
            print("Invalid input. Please enter a number.")
        except KeyboardInterrupt:
            print("\nOperation cancelled by user.")
            exit()

def calculate_bmi(weight, height):
    return weight / (height ** 2)

def interpret_bmi(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Normal weight"
    elif 25 <= bmi < 29.9:
        return "Overweight"
    else:
        return "Obese"

def main():
    print("Welcome to the BMI Calculator\n")

    weight = get_positive_float("Enter your weight in kilograms: ")
    height = get_positive_float("Enter your height in meters: ")

    bmi = calculate_bmi(weight, height)
    status = interpret_bmi(bmi)

    print(f"\nYour BMI is: {bmi:.2f}")
    print(f"You are classified as: {status}")

if __name__ == "__main__":
    main()
