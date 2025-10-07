// [] - create a list
// {} - create a dictionary that stores key-value pairs

const database1 = [
    {
        question : "When was battle cats released?",
        options : ["November 11th, 2015", "October 10th, 2014", "November 10th, 2014", "December 25th, 2013"],
        answer : "November 10th, 2014"
    },

    {
        question : "What is the crazed cat that is most used?",
        options : ["Manic Eraser", "Manic Mohawk", "Manic Island", "Manic Macho Legs"],
        answer : "Manic Eraser"
    },

    {
        question : "What is the term for Awakened Bahumut Talents?",
        options : ["Bahabast", "Bahabam", "Bahablaster", "Bahablast"],
        answer : "Bahablast"
    },

    {
        question : "What is the boss you fight in floor 30 of Infernal Tower?",
        options : ["Hermit Cat", "Masked Grandmaster Cat", "Spiritual Yulala", "Esoteric Uril"],
        answer : "Masked Grandmaster Cat"
    },

    {
        question : "What is the MOST ANNOYING peon?",
        options : ["Sir Rel", "Squire Rel", " The Thrillerz", "Those Guys"],
        answer : "Sir Rel"
    },

     {
        question : "Which Boss can get you Bullet Train Cat?",
        options : ["Shy Boy", "Cruel Angel Clionel", "Queen B", "Hannya"],
        answer : "Hannya"
    },

      {
        question : "Which enemy is NOT in the stage, Muscle Party (Deadly)",
        options : ["Those Guys", "Squire Rel", "Snache", "Manic Macho Legs"],
        answer : "Those Guys"
    },

    {
        question : "What is the Hardest Metal Enemy in battle cats?",
        options : ["Metal Doge", "Metal Cyclone", "Sir Metal Seal", "Super Metal Hippoe"],
        answer : "Sir Metal Seal"
    },

    {
        question : "Which Gory is not in battle cats?",
        options : ["Gory Groom", "MikuGory", "Gorilliam", "Relic Gory"],
        answer : "Relic Gory"
    },

    {
        question : "Who was the culprit in Misson Impawsible?",
        options : ["Mohawk Cat", "Trash Cat", "Theif Cat", "Evil Cat"],
        answer : "Mohawk Cat"
    },

    {
        question : "Which is the best Relic Rusher?",
        options : ["Bahablast", "568-3 (Idi)", "Immortal Yukimura", "Ape Lord Luza"],
        answer : "568-3 (Idi)"
    },

    {
        question : "What is highest damage enemy in battle cats? (NOT DPS)",
        options : ["Metafilibuster", "Pikotaro", "Filibuster Obstructa", "Red Cyclone"],
        answer : "Metafilibuster"
    },

    {
        question : "What is the cat that is most expensive?",
        options : ["Mad Doctor Klay", "Master of Mind Catcrates", "Killer Cat", "Hundred-Million-Dollar Cat"],
        answer : "Killer Cat"
    },

    {
        question : "Which cat was NOT added in update 14.4?",
        options : ["Master of Logic Mewton", "Knuckles Cat", "Edgemaster Staal", "Shadow and Cat"],
        answer : "Knuckles Cat"
    },

    {
        question : "Which Catfruit / Catfuit Seed isn't real? ",
        options : ["Orange Catfruit", "Epic Catfruit", "Relic Catfruit Seed", "Blue Catfruit Seed"],
        answer : "Orange Catfruit"
    },
];

const DropDown = document.getElementById("drop-down");
const StartButton = document.getElementById("start-btn");
const TimerText = document.getElementById("timer-text");
const QuestionLabel = document.getElementById("question");
const OptionContainer = document.getElementById("option-container");
const ProgressBarFill = document.getElementById("progress-bar-fill");
const ScoreLabel = document.getElementById("score-label")
const FeedbackLabel = document.getElementById("feedback-label");
const BgnDropdown = document.getElementById("bgm-selector");
const BgnButton = document.getElementById("music-btn");

let CurrentSong = null;
let IsBgmPlaying = false;

//whwsbsas
BgnDropdown.addEventListener("change", () => { 
const SeclectedSong = BgnDropdown.value;

    // itscbftaf
    if(!SeclectedSong) return;

    // if it exsisisisisisisisisisisisisisisist
    if(CurrentSong)
    {
        CurrentSong.pause();
        CurrentSong.currentTime = 0;
    }
    //lpss
    CurrentSong = new Audio(SeclectedSong);
    CurrentSong.loop = true;
    CurrentSong.volume = 0.2;
    CurrentSong.play();
    IsBgmPlaying = true;
    BgnButton.textContent = "Music On :] 🔊";
    BgnButton.style.backgroundColor = "blue";
});
    BgnButton.addEventListener("click", () => {
        if(IsBgmPlaying) {CurrentSong.pause();
            BgnButton.textContent = "Music Off :[ 🔇"
            BgnButton.style.backgroundColor = "red";
            IsBgmPlaying = false ;
        } else
        {
            CurrentSong.play();
            BgnButton.textContent = "Music On :] 🔊"
            BgnButton.style.backgroundColor = "blue";
            IsBgmPlaying = true ;
        }
    });

StartButton.addEventListener('click', StartQuiz);
let timer;
let question_index = 0;
let score = 0;
function StartQuiz()
{
    StartButton.style.display = 'none';
    DropDown.style.display = 'none';
    LoadQuestion();
}

function LoadQuestion()
{
    // citqitdtaytbl
    if (question_index < database1.length)
    {
        // clear feedback label
        FeedbackLabel.textContent = "";

        // reset timer
        TimerText.textContent = 20;

        // upzate za bloglezz par
        ProgressBarFill.style.width = `${ ( (question_index + 1) / database1.length ) * 100 }%`

        // load a question from the database
        const CurrentQuestionSet = database1[question_index];
        QuestionLabel.textContent = CurrentQuestionSet.question;


        // erase previous option buttons
        OptionContainer.innerHTML = '';


        // clone all option buttons accociated with the question
        CurrentQuestionSet.options.forEach((item) => {
            const button = document.createElement('button');
            button.textContent = item
            button.classList.add('option-btn');
            OptionContainer.appendChild(button);

            button.addEventListener('click', () => {
                DisableAllOptionButtons();
                CheckAnswer(item);
            });
        });

        //turn on the timer
        timer = setInterval(() => {
            TimerText.textContent = parseInt(TimerText.textContent) - 1;
            if(parseInt(TimerText.textContent) === 0)
            {
                clearInterval(timer); // to stop the timer
                DisableAllOptionButtons();
                CheckAnswer(null)
            }
        }, 1000);
    } else
    {
        EndQuiz();
    }
}
function EndQuiz()
{
    clearInterval(timer)
    QuestionLabel.textContent = "Congrats! You are done with the quiz!"
    FeedbackLabel.style.display = 'none';
    OptionContainer.style.display = 'none';
    TimerText.textContent = ":)"
}

function DisableAllOptionButtons()
{
    const all_option_buttons = document.querySelectorAll('.option-btn');
    all_option_buttons.forEach(button => {
        button.disabled = true;
    });
}
function CheckAnswer (item) {
    clearInterval(timer)
    const actual_ans = database1[question_index].answer;
    let message = "";
    if(item === actual_ans)
    {
        score = score + 100;
        message = "That's correct! 100 Catfood goes to you!";
    } else if (item === null)
    {
        message = "The question period has ended."
    } else
    {
        message = "Did you even TRY?"
    }
    FeedbackLabel.textContent = message;
    ScoreLabel.textContent = `You scored ${score} Catfood.`;
    setTimeout(() => {
        question_index = question_index + 1
        LoadQuestion();
    }, 2000);
}