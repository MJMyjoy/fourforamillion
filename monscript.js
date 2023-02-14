let a1 = 1;
let a2 = 2;
let a3 = 3;
let a4 = 5;
/*
while (a1==a2 || a1==a3 || a1==a4 || a2==a3 || a2==a4 || a3==a4)
{
 a1 = Math.floor(Math.random() * 20) + 1;
 a2 = Math.floor(Math.random() * 20) + 1;
 a3 = Math.floor(Math.random() * 20) + 1;
 a4 = Math.floor(Math.random() * 20) + 1;
}
*/
let score = document.getElementById("score");

let texte = document.getElementById("texte");
let game = document.getElementById("game");
let resultat = document.getElementById("resultat");

let jouer = document.getElementById("jouer");
let supp = document.querySelectorAll(".supp")
let soumettre = document.querySelector('.soumettre');
let labelle = document.querySelector('.labelle');

let monscore = 5000;

score.textContent = monscore +" FC";


jouer.onclick = function () {
  
  resultat.style.opacity = "0"
  resultat.style.transform = "rotateY(-360deg) scale(0)";

  if (monscore<2000)
  {
      texte.innerHTML = '<span id="alerte"><br>Oups! Vous ne pouvez plus vous payer une nouvelle partie</span>'
  }
  else{  

  soumettre.style.transform = "scale(1)";
  monscore -= 2000;
  score.textContent = monscore +" FC";

  game.style.transform = "scale(1)";
  }
}



soumettre.onclick = function () {
 
  resultat.style.opacity = "1"
  resultat.style.transform = "rotateY(0deg) scale(1)";

  if (parseInt(supp[0].value)==parseInt(supp[1].value) || parseInt(supp[0].value)==parseInt(supp[2].value) || parseInt(supp[0].value)==parseInt(supp[3].value) || parseInt(supp[1].value)==parseInt(supp[2].value) || parseInt(supp[1].value)==parseInt(supp[3].value) || parseInt(supp[2].value)==parseInt(supp[3].value))
  {
    labelle.innerHTML="Les valeurs doivent être différentes!";
    labelle.style.color ="red";
  }
else{
  let test=0;
if(parseInt(supp[0].value)===a1 || parseInt(supp[0].value)===a2 || parseInt(supp[0].value)===a3 || parseInt(supp[0].value)===a4)
  {
    test++;
  }
  
  if(parseInt(supp[1].value)===a1 || parseInt(supp[1].value)===a2 || parseInt(supp[1].value)===a3 || parseInt(supp[1].value)===a4)
  {
    test++;
  }

  if(parseInt(supp[2].value)===a1 || parseInt(supp[2].value)===a2 || parseInt(supp[2].value)===a3 || parseInt(supp[2].value)===a4)
  {
    test++;
  }

  if(parseInt(supp[3].value)===a1 || parseInt(supp[3].value)===a2 || parseInt(supp[3].value)===a3 || parseInt(supp[3].value)===a4)
  {
    test++;
  }




if (test==4)
{
  monscore+=1000000;
  score.textContent = monscore +" FC";
  resultat.innerHTML = '<p id="quatre">Ffélicitations! Vous venez de gagner <strong>1 000 000 de FC</strong> ! Vous avez deviné correctement tous les 4 nombres choisis.<br> Vous pouvez donc jouer encore, encore et encore !!</p>';
 
  }
else if (test==3)
{
  monscore+=100000;
  score.textContent = monscore +" FC";
  resultat.innerHTML = '<p id="troistests">Bravo! Vous avez gagné <strong>100 000 FC</strong> pour avoir deviné correctement 3 nombres.<br> Vous pouvez donc jouer encore et encore!</p>';

}
else if (test==2)
{
  monscore+=10000;
  score.textContent = monscore +" FC";
  resultat.innerHTML = '<p id="deuxtests">Bravo! Vous avez gagné <strong>10 000 FC</strong> pour avoir deviné correctement 2 nombres.<br> Vous pouvez donc jouer encore et encore!</p>';

}
else if (test==1)
{
  monscore+=1000;
  score.textContent = monscore +" FC";
  resultat.innerHTML = '<p id="untest">Bravo! Vous avez gagné <strong>100 000 FC</strong> pour avoir deviné correctement 1 nombre.!</p>';

}
else
{
  score.textContent = monscore +" FC";
  resultat.innerHTML = '<p>Oups! Vous n’avez deviné aucun des nombres gagnants.<br>  Vous pouvez toujours retenter votre chance.</p>'  
}
soumettre.style.transform = "scale(0)";
}
test =0;
return false;

}

