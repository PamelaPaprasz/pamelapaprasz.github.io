import random

print('Game is on!')

my_fav_num = random.randint(0, 10)
chance_to_guess = 3
hit = False
    
while not hit and chance_to_guess > 0:
    print('You have ', chance_to_guess, ' chances left.')
    
    guess = int(input('Guess a number: '))
    hit = my_fav_num == guess
    
    if hit:
        print('You guessed it! My favorite number is: ', my_fav_num)
            
    elif chance_to_guess > 1:
        print('Your guess is not my favorite number, try again.')

    else:
        print('Game is over. You could not guess my favorite number and you have no more chance to left.')
            
    chance_to_guess -= 1
    
    
    
    