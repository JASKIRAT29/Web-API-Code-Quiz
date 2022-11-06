# Web-API-Code-Quiz
This project was designed as a homework assignment for WEB-API bootcamp.

This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and 
collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data.
Installing
To install this code, download the zip file, or use GitHub's guidelines to clone the repository.

Summary
HTML and CSS and Javascript documents create a quiz with multiple choice questions with Javascript trivia
This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document
This project utilizes the use of appending HTML pages
This project has the following features:
A Start Quiz button
This starts a timer for the user
Each question averages 15 seconds each for a total time of 75 seconds + 1.


An appended HTML page that features questions, and multiple choice answers
If questions are answered incorrectly, 5 seconds are deducted off remaining time
Answers are recording using an event listener, "click" and tracks correct answers




An appended HTML page that features:
Final score which is calculated using time remaining
A Summary of how many questions answered correctly
Input area to record initials
A Submit button
Submit buttom saves initials and score to local storage


A Highscores HTML
This a list summary of intials and final scores
Clear button resets the page and local storage
Go back button travels to the start of the quiz


Psuedo code:
Create a timer attached to a button with a starting value of 0
When timer is pressed start a reverse countdown
Create a 0 for countdown
When countdown starts, start quiz
Start Quiz will be on appended page
Append the question: choices
When user selects the right answer, textcontent "Correct!"
When user selects the right answer, textcontent "Wrong!"
Final score will keep track of how many the user got right
Left over time will be deducted from final score
Final Score Appended page
Captures local storage
Travels to another HTML
Retrieved highscores
