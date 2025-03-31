from random import randint

min_number = int(input("Enter the first number: "))
max_number = int(input("Enter the second number please: "))

if(max_number < min_number):
    print("Invalid input - Shutsting down...")
else:
    randomNumber = randint(min_number, max_number)
    print(f"{randomNumber} is between {min_number} and {max_number}")
 