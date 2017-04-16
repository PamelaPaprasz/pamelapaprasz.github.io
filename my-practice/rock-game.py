import random

print('This is a rock-paper-scissors game for singles.')

choices = ['rock', 'paper', 'scissors']
machine_score = 0
user_score = 0


while machine_score < 3 and user_score < 3:
    machine_choice = random.choice(choices)
    user_choice = input('Rock, paper or scissors? Type your chocie here: ')
    
    if machine_choice == user_choice:
        print('It is even, noone gets a score now.')
        
    elif machine_choice == choices[0]:
        if user_choice == 'paper':
            print('Paper is stronger than rock. One score for the user.')
            user_score += 1
        else:
            print('Rock is stronger than scissors. One score for the machine.')
            machine_score += 1
    
    elif machine_choice == choices[1]:
        if user_choice == 'scissors':
            print('Scissors is stronger than paper. One score for the user.')
            user_score += 1    
        else:
            print('Paper is stronger than rock. One score for the machine.')
            machine_score += 1
            
    elif machine_choice == choices[2]:
        if user_choice == 'rock':
            print('Rock is stronger than scissors. One score for the user.')
            user_score += 1
        else:
            print('Scissors is stronger than paper. One score for the machine.')
            machine_score += 1
            
    print('User score: ', user_score)
    print('Machine score: ', machine_score)
            

if machine_score == 3:
    print('Machine won.')
    
elif user_score == 3:
    print('You won over a machine. Congratulations!')







