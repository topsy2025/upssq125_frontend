# initial design brief
let imagine your boss has given you the following brief to create this game

i want you to create a simple guess the number type game.it should choose a random number between 1 and 100 and challenge the player to guess the number in ten turns.After each turn,the player should be told if they are right or wrong and if they are wrong,whether the guess was too low or high.It should also tell the player what number the previously get.The game will end once the player get correctly or once they run of turns.When the game ends the player should be given an option to start playing the game again

upon looking at the brief,the first thing to do is to start breaking it down into simple actionable task in as much of a programmer mindset as possible:
1. Generate a random number between 1 and 100
2. Record the turns number the player is on .start it on 1.
3. Provide the player with a way to guess what the number is
4. Once a guess has been submitted,first record it somewhere so the user can see their previous guess
5. Next,check whether it is the correct number.
6. If it is the correct number:
 - Display congratulation message
 - Stop the player from been able to enter more guesses(these will mess the game up)
 - Display control allowing the player to restart the game
 7. If it is wrong and the player has turns left:
    - Tell the player they are wrong and whether their guess was too high or too low
    - Allow them to enter another guess.
    - Increment the turn number by 1.
8. If it is wrong and the player has no turn left:
    - Tell the player it is game over.
    - Stop the player from being able to enter more guesses.
    - Display control allowing the player to restart the game.
9. Once the game restarts make sure the game logic and UI are completely reset, then go back to step 1.

