
var level=0;
var computer="";
var user="";
var userLen=0;

deactivateButtons();

$(document).keypress(function(){
    $(document).off();
    activateButtons();
    startNewLevel();
});

function startNewLevel()
{
    level++;
    $("h1").text("Level"+" "+level);
    var rand=Math.random();
    rand*=4;
    rand=Math.floor(rand)+1;
    backgroundAndSound(rand);
    computer+=rand;
    user="";
    userLen=0;
}



function check()
{
    if(computer.length==userLen)
    {
        if(computer==user)
        {
            setTimeout(function() {
                startNewLevel();
            }, 1000);
        }
        else
        {
            deactivateButtons();

            $("h1").text("Game Over. Press Any Key to Restart");
            var audio=new Audio("./wrong.mp3");
            audio.play();

            $(document).keypress(function(){
                $(document).off();
                activateButtons();
                
                setTimeout(function() {
                    startNewLevel();
                }, 1000);
            });

            level=0;
            computer="";
            user="";
            userLen=0;
        }
    }
    else
    {
        if(computer[userLen-1]!=user[userLen-1])
        {
            deactivateButtons();
            $(document).keypress(function(){
                $(document).off();
                activateButtons();
                
                setTimeout(function() {
                    startNewLevel();
                }, 1000);
            });

            $("h1").text("Game Over. Press Any Key to Restart");
            var audio=new Audio("./wrong.mp3");
            audio.play();

            level=0;
            computer="";
            user="";
            userLen=0;
        }
    }
}



function backgroundAndSound(ID)
{    
    switch (ID)
    {
        case "#greenID":
        case 1:
            $("#greenID").addClass("modifyBackground");
            var audio=new Audio("./green.mp3");
            audio.play();
            setTimeout(function() {
                $("#greenID").removeClass("modifyBackground");
            }, 100);
            break;
        case "#redID":
        case 2:
            $("#redID").addClass("modifyBackground");
            var audio=new Audio("./red.mp3");
            audio.play();
            setTimeout(function() {
                $("#redID").removeClass("modifyBackground");
            }, 100);
            break;
        case "#yellowID":
        case 3:
            $("#yellowID").addClass("modifyBackground");
            var audio=new Audio("./yellow.mp3");
            audio.play();
            setTimeout(function() {
                $("#yellowID").removeClass("modifyBackground");
            }, 100);
            break;
        case "#blueID":
        case 4:
            $("#blueID").addClass("modifyBackground");
            var audio=new Audio("./blue.mp3");
            audio.play();
            setTimeout(function() {
                $("#blueID").removeClass("modifyBackground");
            }, 100);
            break;
    }
}




function activateButtons()
{
    $("#greenID").click(function(){
        backgroundAndSound("#greenID");
        user+=1;
        userLen++;
        check();
    });

    $("#redID").click(function(){
        backgroundAndSound("#redID");
        user+=2;
        userLen++;
        check();
    });

    $("#yellowID").click(function(){
        backgroundAndSound("#yellowID");
        user+=3;
        userLen++;
        check();
    });

    $("#blueID").click(function(){
        backgroundAndSound("#blueID");
        user+=4;
        userLen++;
        check();
    });
}

function deactivateButtons()
{
    $("#greenID").off();
    $("#redID").off();
    $("#yellowID").off();
    $("#blueID").off();
}