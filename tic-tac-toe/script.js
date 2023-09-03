$(".edit-1").click(function () {
  $(".section-edit-1").show();
});
$(".btn-border").click(function () {
  $(".section-edit-1").hide();
  $(".section-edit-2").hide();
});
$(".edit-2").click(function () {
  $(".section-edit-2").show();
});
$(".btn-confirm-1").click(function () {
  p1 = document.querySelector(".input-1 input").value;
  $(".player-1 h3").html(p1);
  $(".section-edit-1").hide();
});
$(".btn-confirm-2").click(function () {
  p2 = document.querySelector(".input-2 input").value;
  $(".player-2 h3").html(p2);
  $(".section-edit-2").hide();
  $(".section-new-game a").text("Start Game");
});
var p1;var p2;
var players=[{"name":"","symbol":"X"},{"name":"","symbol":"O"}];
var grid=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
$(".btn-start").click(function(){
    $(".section-game p").text("It's your turn "+p1);
    $(".section-game").show();
    players[0].name=p1;
    players[1].name=p2;
    var i=1;
            $(".element").click(function(){
                if(i%2==1){
                $(this).html("<h1>X</h1>");
                $(this).css("background-color","#8b3eea")
                $(this).css("color","#fff");
                    var classList=$(this).attr("class");
                    var x=classList[29];
                    var y=classList[31];
                    grid[x-1][y-1]=1;
                    if(gameOver("X")==true){
                        $(".section-won").show();
                        $(".div-won h1").text("Game Over");
                        $(".section-new-game a").text("Start New Game");
                    }
                    if(checkWinners("X",x-1,y-1)==true){
                        $(".section-won").show();
                        $(".div-won h1").text("You Won , "+p1);
                        $(".section-new-game a").text("Start New Game");
                    }
                    $(".section-game p").text("It's your turn "+p2);
                    $(this).addClass("disabled");
                
            }
            else if(i%2==0){
                    $(this).html("<h1>O</h1>");
                    $(this).css("background-color","#8b3eea")
                    $(this).css("color","#fff");
                var classList=$(this).attr("class");
                    var x=classList[29];
                    var y=classList[31];
                    grid[x-1][y-1]=0;
                if(gameOver("O")==true){
                    $(".section-won").show();
                        $(".div-won h1").text("Game Over");
                        $(".section-new-game a").text("Start New Game");
                    }
                 if(checkWinners("O",x-1,y-1)==true){
                        $(".section-won").show();
                        $(".div-won h1").text("You Won , "+p2);
                        $(".section-new-game a").text("Start New Game");
                    }
                $(".section-game p").text("It's your turn "+p1);
                 $(this).addClass("disabled");
            }
                i++;
                $(".section-new-game a").click(function(){
                  window.location.reload();
                })
        })
})

function gameOver(ch){
  if(ch=='X')var a=1;
    if(ch=='O')var a=0;
   for(var i=0;i<3;i++){
      for(var j=0;j<3;j++)
{
        if(grid[i][j]!=a && grid[i][j]==-1)return false;
}
   }
    return true;
}

function checkWinners(ch,x,y){
  if(ch=='X')var a=1;
    if(ch=='O')var a=0;
var flag3=false;
  if(x==y || x==3-y-1)flag3= checkMid(a);

    var flag1=false;
    var flag2=false
  for(var i=0;i<3;i++){
    if(grid[i][y]!=a || grid[i][y]==-1){
      flag1=false;
      break;
    }
    else if(grid[i][y]==a && grid[i][y]!=-1)flag1=true;
  }
  for(var i=0;i<3;i++){
    if(grid[x][i]!=a || grid[x][i]==-1){flag2=false;
      break;
    }
    else if(grid[x][i]==a && grid[x][i]!=-1)flag2=true;
  }
    return flag1 || flag2 || flag3;
}
function checkMid(a){
  var flag1=false;
  var flag2=false;
  for(var i=0;i<3;i++){
    if(grid[i][i]!=a || grid[i][i]==-1){
      flag1=false;
      break;
    }
    else if(grid[i][i]==a)flag1=true;
  }
  
  for(var i=0;i<3;i++){
      if(grid[i][3-i-1]!=a || grid[i][3-i-1]==-1){
        flag2=false;
        break;
      }
      else if(grid[i][3-i-1]==a)flag2=true;
  }
  return flag1 || flag2;
}