let truthBtn = document.querySelector('.truth-btn');
let dareBtn = document.querySelector('.dare-btn');
let displaycontainer = document.querySelector('.display-container');
let truth=[
"When was the last time you lied?",

"When was the last time you cried?",

"What's your biggest fear?",

"What's your biggest fantasy?",

"Do you have any fetishes?",

"What's something you're glad your mum doesn't know about you?",

"have you ever cheated on someone?",

"What's the worst thing you've ever done?",

"What's a secret you've never told anyone?",

"Do you have a hidden talent?",

"Who was your first celebrity crush?",

"What's the worst intimate experience you've ever had?",

"Have you ever cheated in an exam?",

"Have you ever broken the law?",

"What's the most embarrassing thing you've ever done?",

"What's your biggest insecurity?",

"What's the biggest mistake you've ever made?",

"What's the most disgusting thing you've ever done?",

"Who would you like to kiss in this room?",

"What's the worst thing anyone's ever done to you?",

"Have you ever had a run in with the law?",

"What's your worst habit?",

"What's the worst thing you've ever said to anyon?",

"Have you ever been caught doing something you shouldn't have?",

"What's your biggest regret?",

"What's the biggest misconception about you?",

"Why did your last relationship break down?",

"Have you ever lied to get out of a bad date?",

"What's the most trouble you've been in?",
];
let dare=[
"Show the most embarrassing photo on your phone",

"Show the last five people you texted and what the messages said",

"Let the rest of the group DM someone from your Instagram account",

"Eat a raw piece of garlic",

"Do 100 squats",

"Keep three ice cubes in your mouth until they melt",

"Say something dirty to the person on your left",

"Put 10 different available liquids into a cup and drink it",

"Yell out the first word that comes to your mind",

"Give a lap dance to someone of your choice",

"Like the first 15 posts on your Instagram newsfeed",

"Eat a spoonful of mustard",

"Keep your eyes closed until it's your go again",

"Seductively eat a banana",

"Tell the saddest story you know",

"Dance without music for two minutes",

"Pole dance with an imaginary pole",

"Let someone else tickle you and try not to laugh",
];

truthBtn.addEventListener('click', () => {
    let trueValue = truth[Math.floor(Math.random() * truth.length)];
    displaycontainer.innerHTML = `<p class='text'>${trueValue}</p>`;
})


dareBtn.addEventListener('click', () => {
    let dareValue = dare[Math.floor(Math.random() * dare.length)];
    displaycontainer.innerHTML = `<p class='text'>${dareValue}</p>`;
})
