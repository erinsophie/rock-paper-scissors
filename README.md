My first project combining Javascript, HTML and CSS was a Rock, Paper, Scissors game!

This game may have a basic structure with no fancy graphics or effects but the main point of this project was to use it as a starting point to put all of the knowledge I have so far into a real project. With time, I hope to learn how to write clean and DRY code. 

This game was initially intended to be played in the console to ensure everything was functioning properly before adding a UI. The user would input either one of the options thorugh an alert prompt and play against the computer's randomly-generated choice before finishing after 5 rounds and annoucning a winner. 

To turn it into a real playable game I had to rework a lot of the original logic from before, adding new features bit by bit. Mostly by using event listeners and working with the DOM which was a large part of this project. Never having used these before, I got to see how powerful and useful they are in front end developement.

Some challenges I faced were transitioning the playRound function from the console. The first issue was reworking it so it didn't have such lengthy conditionals and could become more readable. Using if else conditionals with the new format didn't work and was returning some incorrect results (resulting in tie when it wasn't a tie or 'paper' when it was 'rock' etc) so I used multiple if statements instead which worked. 

Something I had not noticed until near the end was that when I implemented the UI and clicked anywhere in the buttons div, even if it was not on the button but just near it, that it would select the closest button. This is because when grabbing the 'buttons' I had actually grabbed the div that the buttons were in instead of the buttons themselves. I changed my optionBtns to select the buttons that were in the div with the class of option-btns ('div.option-btns button') and this fixed the issue. 

