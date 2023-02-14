/* Les valeurs aleatoires */

let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;

while (a1==a2 || a1==a3 || a1==a4 || a2==a3 || a2==a4 || a3==a4)
{
 a1 = Math.floor(Math.random() * 20) + 1;
 a2 = Math.floor(Math.random() * 20) + 1;
 a3 = Math.floor(Math.random() * 20) + 1;
 a4 = Math.floor(Math.random() * 20) + 1;
}


/* Declaration des variables */

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



/* Les evenements */

jouer.onclick = function () {
  for(let i=0; i<supp.length; i++)
  {
    supp[i].value="";
  }
  

  if (monscore<2000)
  {
      texte.innerHTML = '<span id="alerte"><br>Oups! Vous ne pouvez plus vous payer une nouvelle partie</span>'
  }
  else
  {  
    labelle.innerHTML="Entrez vos 4 suppositions: ";
    labelle.style.color ="black";

    resultat.style.opacity = "0"
    resultat.style.transform = "rotateY(-360deg) scale(0)";

    soumettre.style.transform = "scale(1)";
    monscore -= 2000;
    score.textContent = monscore +" FC";

    game.style.transform = "scale(1)";
  }
  return false;

}



soumettre.onclick = function() {

  /* S'il y a des valeurs egales */
  if (parseInt(supp[0].value)==parseInt(supp[1].value) || parseInt(supp[0].value)==parseInt(supp[2].value) || parseInt(supp[0].value)==parseInt(supp[3].value) || parseInt(supp[1].value)==parseInt(supp[2].value) || parseInt(supp[1].value)==parseInt(supp[3].value) || parseInt(supp[2].value)==parseInt(supp[3].value))
  {
    labelle.innerHTML="Les valeurs doivent être toutes différentes!";
    labelle.style.color ="red";
  }
  else
  {
    resultat.style.opacity = "1"
    resultat.style.transform = "rotateY(0deg) scale(1)";

    /* Verification des entrees */
    let test=0;
    for(let i=0; i<supp.length; i++)
    {
      if(parseInt(supp[i].value)===a1 || parseInt(supp[i].value)===a2 || parseInt(supp[i].value)===a3 || parseInt(supp[i].value)===a4)
        {
          test++;
        }
    }


/* Resultats et lots*/

if (test==4)
  {
    monscore += 1000000;
    score.textContent = monscore +" FC";
    resultat.innerHTML = '<p id="reussite">Ffélicitations! Vous venez de gagner <strong>1 000 000 de FC</strong> !<br>Vous avez deviné correctement tous les 4 nombres choisis.</p>';
  }
else if (test==3)
  {
    monscore += 100000;
    score.textContent = monscore +" FC";
    resultat.innerHTML = '<p id="reussite">Bravo! Vous avez gagné <strong>100 000 FC</strong> pour avoir deviné correctement 3 nombres.</p>';
  }
else if (test==2)
  {
    monscore += 10000;
    score.textContent = monscore +" FC";
    resultat.innerHTML = '<p id="reussite">Bravo! Vous avez gagné <strong>10 000 FC</strong> pour avoir deviné correctement 2 nombres.</p>';
  }
  else if (test==1)
  {
    monscore += 1000;
    score.textContent = monscore +" FC";
    resultat.innerHTML = '<p id="reussite">Vous avez gagné <strong>1 000 FC</strong> pour avoir deviné correctement 1 nombre parmi les 4.!</p>';
  }
else
  {
    score.textContent = monscore +" FC";
    resultat.innerHTML = '<p>Oups! Vous n’avez deviné aucun des nombres gagnants.<br>  Vous pouvez toujours retenter votre chance.</p>';
  }

  soumettre.style.transform = "scale(0)";
}
test =0;

 return false;

}
