import random

print('Game is on!')

my_fav_num = random.randint(0, 10)
chance_to_guess = 3
hit = False
    
while not hit and chance_to_guess > 0:
    print('You have ' + str(chance_to_guess) + ' chances left.')
    print('Guess a number: ')
    
    guess = int(input())
    hit = my_fav_num == guess
    
    if hit:
        print('You guessed it! My favorite number is: ' + str(my_fav_num))
            
    elif chance_to_guess > 1:
        print('Your guess is not my favorite number, try again.')
        
    else:
        print('No more chance to guess')
            
    chance_to_guess -= 1
    
    
    
    