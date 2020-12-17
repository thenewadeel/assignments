let movieList=[
'Fast and Furious, Captain America, Avenger - End Game, Top Gun, Interstellar, Pirates of the Caribbean, Five Feet Apart, The Fault in Our Stars, The Dark Knight, Joker, The Pursuit of Happiness, Legend, Titanic, The Godfather, Mission Impossible, Matrix Reloaded, Jurassic Park, Deep Blue Sea, Home Alone, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Fast and Furious, Gravity, Captain America, Avenger - End Game, Top Gun, Pirates of the Caribbean, The Dark Knight, Joker, Legend, Titanic, The Godfather, Mission Impossible, Lord of the Rings, Matrix Reloaded, Jurassic Park, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, Once upon a time in Mexico, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Fast and Furious, Titanic, Home Alone, Charlie and the Chocolate Factory',
'Contagion, Fast and Furious, Gravity, Captain America, Avenger - End Game, Top Gun, Interstellar, Pirates of the Caribbean, The Fault in Our Stars, The Dark Knight, Joker, The Pursuit of Happiness, Legend, Titanic, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Matrix Reloaded, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, Once upon a time in Mexico, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Fast and Furious, Captain America, Avenger - End Game, Top Gun, Pirates of the Caribbean, Five Feet Apart, The Fault in Our Stars, The Dark Knight, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, Godzilla, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Fast and Furious, Captain America, Avenger - End Game, Interstellar, Pirates of the Caribbean, The Dark Knight, Titanic, Lord of the Rings, Jurassic Park, Shawshank Redemption, The Wolf of Wall Street',
'Interstellar, The Fault in Our Stars, Titanic, Lord of the Rings, Home Alone, Jumanji, Final Destination, Shawshank Redemption, Charlie and the Chocolate Factory',
'Fast and Furious, Gravity, Avenger - End Game, Five Feet Apart, The Fault in Our Stars, The Dark Knight, Joker, The Pursuit of Happiness, Titanic, Mission Impossible, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, Godzilla, The Wolf of Wall Street',
'Fast and Furious, Gravity, Avenger - End Game, Interstellar, Five Feet Apart, The Fault in Our Stars, The Dark Knight, Joker, The Pursuit of Happiness, Titanic, 7 pounds, Mission Impossible, Home Alone, Final Destination, 127 hours, Charlie and the Chocolate Factory',
'Fast and Furious, Captain America, Avenger - End Game, Titanic, Mission Impossible, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, Twilight, The Darkest Hour, Vampire Academy, Harry Potter',
'Jurassic Park, Home Alone, Jumanji, Charlie and the Chocolate Factory',
'Mission Impossible, Jurassic Park, Deep Blue Sea, Jumanji, Godzilla',
'Mission Impossible, Jurassic Park, Deep Blue Sea, Jumanji, Godzilla',
'Fast and Furious, Pirates of the Caribbean, The Dark Knight, Joker, Titanic, Lord of the Rings, Jurassic Park, Deep Blue Sea, Godzilla, Charlie and the Chocolate Factory',
'Fast and Furious, Five Feet Apart, The Dark Knight, Titanic',
'Five Feet Apart, The midnight sun ',
'Fast and Furious, Captain America, Avenger - End Game, Pirates of the Caribbean, The Fault in Our Stars, The Dark Knight, Joker, Titanic, Mission Impossible, Lord of the Rings, Matrix Reloaded, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, Charlie and the Chocolate Factory',
'Fast and Furious, Avenger - End Game, Pirates of the Caribbean, The Fault in Our Stars, The Dark Knight, Joker, Titanic, The Godfather, Lord of the Rings, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, Godzilla',
'Joker, Titanic',
'Contagion, Fast and Furious, Five Feet Apart, Titanic, Mission Impossible, Lord of the Rings',
'Fast and Furious, Avenger - End Game, Interstellar, Pirates of the Caribbean, The Dark Knight, Joker, Titanic, Mission Impossible, Lord of the Rings, Jurassic Park, Jumanji, Once upon a time in Mexico, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Fast and Furious, Gravity, Captain America, Avenger - End Game, Titanic, Lord of the Rings, Jurassic Park, Deep Blue Sea, Final Destination, Godzilla',
'Joker, Home Alone, Jumanji',
'Contagion, Fast and Furious, Captain America, Pirates of the Caribbean, The Dark Knight, Joker, Titanic, Mission Impossible, Lord of the Rings, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory, The Meg, the shallow, 47 meter down, Jaws, HEREDITARY, A QUITE PLACE, THE CONJURING,INSIDIOUS, SAW, LIGHTS OUT, ANNABELLE, HAPPY DEATH DAY,IT,THE NUN, DEATH NOTE, DEADPOOL, SPIDER MAN, HARRY POTTER, BABY DRIVER, MAZE RUNNER,VENOM, THE HUNGER GAME, MY SPY, ALITA BATTLE ANGEL as well as ANIMATED MOVIES etc',
'Fast and Furious, Captain America, Avenger - End Game, Pirates of the Caribbean, The Dark Knight, Joker, The Pursuit of Happiness, Legend, Titanic, Mission Impossible, Lord of the Rings, Matrix Reloaded, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, The Wolf of Wall Street, Many others',
'Fast and Furious, Captain America, Avenger - End Game, Pirates of the Caribbean, The Dark Knight, Joker, The Pursuit of Happiness, Titanic, The Godfather, Mission Impossible, Lord of the Rings, Matrix Reloaded, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'The Dark Knight, Titanic, Home Alone, The Wolf of Wall Street',
'Pirates of the Caribbean, Five Feet Apart, The Fault in Our Stars, Joker, The Pursuit of Happiness, Titanic, Jurassic Park, Home Alone, The Wolf of Wall Street',
'Joker, Titanic, Jurassic Park, Deep Blue Sea, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, The Conjuring, Joker, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Avenger - End Game, The Conjuring, The Dark Knight, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Avenger - End Game, Home Alone, Whoever made this list has a bad taste in movies.',
'Joker, Home Alone, Charlie and the Chocolate Factory, Imitation Game',
'Avenger - End Game, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, 127 hours, Godzilla, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Gone Girl, Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Interstellar, Home Alone, Jumanji, Shawshank Redemption, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Silly',
'The Conjuring, Mission Impossible, Gravity, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory, deep blue sea, the meg ,house of wax, Anabelle, IT Chapter 2,aqauamen,harrypotterthe  stone, journey to the center  of the earth, the hollow man',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Mission Impossible',
'Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Godzilla, Shawshank Redemption',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Once upon a time in Hollywood',
'Gone Girl, Inception, The Godfather, Mission Impossible, Jurassic Park, Shawshank Redemption, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, The good, the bad, the ugly, Charlie and the Chocolate Factory',
'Gone Girl, Inception, The Godfather, Mission Impossible, Jurassic Park, Interstellar, Home Alone, Shawshank Redemption, Charlie and the Chocolate Factory, Casablanca',
'Gone Girl, The Conjuring, Joker, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Inception, Sicario, The Conjuring, John Wick, Mission Impossible, Jurassic Park, Interstellar, Home Alone, Jumanji',
'Inception, Avenger - End Game, The Conjuring, The Dark Knight, Joker, Mission Impossible, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, The Wolf of Wall Street',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Once upon a time in Hollywood',
'7 pounds, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Home Alone, Final Destination, 127 hours, Charlie and the Chocolate Factory',
'The Conjuring, Joker, Mission Impossible, Gravity, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Inception, Avenger - End Game, Jumanji, 127 hours, Godzilla',
'The Grand Budapest Hotel, Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, Sicario, The Conjuring, The Dark Knight, Joker, John Wick, Cloud Atlas, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Godfather, Lord of the Rings, Home Alone, The good, the bad, the ugly, Charlie and the Chocolate Factory',
'Gone Girl, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Dark Knight, Joker, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Home Alone, Jumanji, Final Destination, Shawshank Redemption, Charlie and the Chocolate Factory, Ghibli Studio movies',
'Inception, Captain America, 127 hours',
'Gone Girl, Inception, Captain America, Avenger - End Game, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Inception, The Conjuring, The Dark Knight, The Godfather, Mission Impossible, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Shawshank Redemption, Charlie and the Chocolate Factory',
'Captain America, Mission Impossible, Home Alone, Jumanji, Money hiest season',
'Logan, The Dark Knight, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Home Alone, Final Destination, Godzilla',
'Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, 127 hours, Godzilla, Shawshank Redemption, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Gone Girl, Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, John Wick, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Shawshank Redemption, The good, the bad, the ugly, Charlie and the Chocolate Factory',
'Captain America, Home Alone, Jumanji, Final Destination, Shawshank Redemption, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Guardians of the Galaxy, Sicario, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Gravity, Jumanji, Godzilla',
'Gone Girl, Inception, Captain America, Avenger - End Game, The Conjuring, Nocturnal Animals, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Gone Girl, Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Gravity, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, Once upon a time in Hollywood, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, Nocturnal Animals, The Dark Knight, Joker, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Conjuring, Mission Impossible, Jurassic Park, Home Alone, Final Destination',
'Inception, The Conjuring, The Dark Knight, Mission Impossible, Gravity, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'The Conjuring, Joker, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Sicario, The Conjuring, The Dark Knight, Joker, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Once upon a time in Hollywood, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Inception, Captain America, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, Mission Impossible, Jurassic Park, Home Alone, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Interstellar, Home Alone, Final Destination, Godzilla, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory, Tons more',
'Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Inception, Captain America, The Conjuring, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The good, the bad, the ugly, The Wolf of Wall Street',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, 7 pounds, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Captain America, Logan, The Conjuring, Joker, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption',
'Avenger - End Game, The Conjuring, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination',
'127 hours',
'Avenger - End Game',
'The Grand Budapest Hotel, Inception, Captain America, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, The Conjuring, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Final Destination, Godzilla, Shawshank Redemption, Charlie and the Chocolate Factory',
'Mission Impossible',
'Jurassic Park',
'The Conjuring, Mission Impossible, Jurassic Park, Home Alone, Final Destination',
'The Conjuring, The Godfather, Gravity, Jurassic Park, Home Alone, Jumanji, 127 hours, Godzilla, Charlie and the Chocolate Factory, Titanic, Eat Pray Love, P.S. I Love You',
'Logan, Joker, The Godfather, Interstellar, Home Alone, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street',
'Inception, Captain America, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, Mission Impossible, Gravity, Jurassic Park, Interstellar, Home Alone, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, Sicario, The Conjuring, Nocturnal Animals, The Dark Knight, Joker, John Wick, Cloud Atlas, The Handmaiden, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Joker',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Jumanji, Final Destination, Godzilla',
'The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, The Wolf of Wall Street',
'The Godfather, Mission Impossible, Jumanji, Godzilla, The Wolf of Wall Street',
'Gone Girl, Captain America, Avenger - End Game, The Dark Knight, Joker, The Godfather, Lord of the Rings, Charlie and the Chocolate Factory',
'The Dark Knight, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Joker, Mission Impossible, Lord of the Rings, Home Alone',
'Problem child and iron man',
'Joker',
'Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street',
'Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Dark Knight, John Wick, Mission Impossible, Home Alone, Jumanji, Shawshank Redemption, Charlie and the Chocolate Factory',
'Joker, The Godfather, Mission Impossible, Shawshank Redemption, The good, the bad, the ugly, The Wolf of Wall Street',
'Captain America, Avenger - End Game, The Dark Knight, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street',
'Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, Nocturnal Animals, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, The Dark Knight, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street',
'animated movies',
'The Conjuring, Joker, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Guardians of the Galaxy, The Dark Knight, Joker, The Handmaiden, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Godzilla',
'not specific but watch clips on youtube when got time ',
'The Grand Budapest Hotel, Inception, Captain America, Avenger - End Game, Logan, Sicario, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Captain America, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, 7 pounds, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Once upon a time in Hollywood, Charlie and the Chocolate Factory',
'Avenger - End Game, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Home Alone, The good, the bad, the ugly, The Wolf of Wall Street',
'Mission Impossible, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Shawshank Redemption, The Wolf of Wall Street',
'Inception, Avenger - End Game, The Conjuring, Jurassic Park, Jumanji, Godzilla, Charlie and the Chocolate Factory',
'Home Alone',
'The Grand Budapest Hotel, Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, Sicario, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The good, the bad, the ugly, The Wolf of Wall Street',
'Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, Sicario, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory, Too many',
'Inception, The Conjuring, Joker, Mission Impossible, Lord of the Rings, Home Alone, Final Destination, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'None',
'Band baja barat wrong no etc',
'Gone Girl, Captain America, Avenger - End Game, Logan, The Conjuring, Joker, John Wick, The Godfather, 7 pounds, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Final Destination, 127 hours, Godzilla, Once upon a time in Hollywood, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Joker, The Handmaiden, The Godfather, Gravity, Jurassic Park, Interstellar, Home Alone, Godzilla, The good, the bad, the ugly, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Gone Girl, Inception, Avenger - End Game, Logan, Sicario, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory, The pursuit of happiness, ready me, queens gambit',
'Inception, Captain America, Avenger - End Game, The Conjuring, The Dark Knight, Mission Impossible, Lord of the Rings, Jurassic Park, Jumanji, 127 hours, Shawshank Redemption, The Wolf of Wall Street',
'Inception, The Dark Knight, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla, Once upon a time in Hollywood, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Sicario, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, Sicario, The Conjuring, Nocturnal Animals, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, Once upon a time in Hollywood, The Wolf of Wall Street',
'Inception, The Conjuring, Joker, Mission Impossible, Jurassic Park, Home Alone, Jumanji, Final Destination, Charlie and the Chocolate Factory',
'Gone Girl, Inception, Avenger - End Game, Logan, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Final Destination, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'The Conjuring, Jurassic Park, Home Alone, Final Destination',
'Gone Girl, Captain America, The Conjuring, Joker, Jurassic Park, Home Alone, Jumanji, Godzilla, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Charlie and the Chocolate Factory',
'The Dark Knight',
'Home Alone, Charlie and the Chocolate Factory',
'Inception, Captain America, Mission Impossible, Lord of the Rings',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, Sicario, The Conjuring, The Dark Knight, Joker, John Wick, The Godfather, Mission Impossible, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Shawshank Redemption, Once upon a time in Hollywood, The good, the bad, the ugly, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Avenger - End Game',
'The Conjuring, Joker, Home Alone, Jumanji, Final Destination, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, The Conjuring, The Dark Knight, Joker, 7 pounds, Mission Impossible, Gravity, Jurassic Park, Home Alone, Jumanji, Final Destination, Godzilla',
'Jurassic Park, Home Alone',
'Avenger - End Game, The Conjuring, Lord of the Rings, Jurassic Park, Home Alone, Jumanji, Final Destination, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, The Conjuring, The Dark Knight, Joker, Mission Impossible, Home Alone, Final Destination',
'Joker, Shutter Island, How to train your dragon etc',
'The Dark Knight, Once upon a time in Hollywood',
'Mission Impossible',
'The Conjuring, Home Alone, Final Destination, 127 hours, Charlie and the Chocolate Factory',
'The Grand Budapest Hotel, Captain America, Avenger - End Game, The Dark Knight, Joker, The Godfather, Mission Impossible, Lord of the Rings, Jumanji, Final Destination, The Wolf of Wall Street',
'Logan, Guardians of the Galaxy, Gravity, Jurassic Park, Interstellar, Home Alone, Final Destination, Lucy, twilight',
'Gone Girl, Inception, The Conjuring, Joker, The Godfather, Mission Impossible, Final Destination, Charlie and the Chocolate Factory',
'The Conjuring, Home Alone, Fault in our stars ,The count of monte cristo',
'Gone Girl, Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Dark Knight, Joker, The Godfather, Mission Impossible, Home Alone, Jumanji, Final Destination, 127 hours, Once upon a time in Hollywood, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Avenger - End Game, The Conjuring, The Dark Knight, Joker, 7 pounds, Mission Impossible, Gravity, Interstellar, Home Alone, Final Destination, 127 hours, Charlie and the Chocolate Factory',
'Band baja barat wrong no etc',
'Avenger - End Game, The Conjuring, Home Alone',
'Captain America, Avenger - End Game, John Wick, Mission Impossible',
'Inception, The Conjuring, The Dark Knight, Joker, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Jumanji, Final Destination, Once upon a time in Hollywood, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Captain America, Mission Impossible, Lord of the Rings',
'Gone Girl, Inception, The Conjuring, Joker, The Godfather, Mission Impossible, Final Destination, Charlie and the Chocolate Factory',
'Final Destination',
'Gone Girl, The Conjuring, Nocturnal Animals, The Dark Knight, Joker, 7 pounds, Mission Impossible, Lord of the Rings, Home Alone, Jumanji, Final Destination, The Wolf of Wall Street, Charlie and the Chocolate Factory',
'Inception, Joker, Mission Impossible, Jurassic Park, Final Destination, no country for old men, transporter, red eye , money heist',
'Inception, Captain America, Mission Impossible, Lord of the Rings',
'The Conjuring, Joker',
'The Wolf of Wall Street',
'Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla',
'Captain America, The Conjuring, Nocturnal Animals, The Dark Knight, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla, Charlie and the Chocolate Factory, Five feet apart ',
'The Grand Budapest Hotel, Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Shawshank Redemption, Charlie and the Chocolate Factory',
'Joker',
'Captain America, Avenger - End Game, Guardians of the Galaxy, The Dark Knight, Joker, The Godfather, Jumanji, Final Destination, Godzilla',
'Interstellar, Home Alone, The Wolf of Wall Street',
'Inception, Captain America, Avenger - End Game, Logan, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, John Wick, Mission Impossible, Lord of the Rings, Gravity, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, 127 hours, Godzilla, Charlie and the Chocolate Factory',
'Inception, Captain America, Avenger - End Game, Guardians of the Galaxy, The Conjuring, The Dark Knight, Joker, Mission Impossible, Jurassic Park, Interstellar, Home Alone, Jumanji, Final Destination, Godzilla',
]
TOKENS=[]
// movieList.forEach(x=>{
//     let tokens=x.split(',');
//     TOKENS.push(tokens);
// })
