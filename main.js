
function validate()
{
	var username = document.getElementById('username').value;
	let selectRoblox = document.getElementById('Roblox');
	let formulaireValide=true;
	let f1 = document.getElementById('formulaire');
	let d1 = document.getElementById('mainDiv');
	let b1=document.getElementById('btn1');
    let selectRobux = document.getElementById('Roblox');
    let robuxValue = selectRobux[selectRobux.selectedIndex].value
    
    let index =selectRoblox.selectedIndex


	if (username=="")
	{
		alert("tape your username Roblox");
		formulaireValide=false;
	}
	
	if (index==-1 || index==0)
	{
		alert ("select Robux");
	    formulaireValide=false;
    }

    if (formulaireValide)
    {
		f1.remove();
		b1.remove();
		let newP = document.createElement('p');
		newP.classList.add('Robux')
        d1.append(newP);
        newP.textContent = 'ROBUX '+ 100;
        
      /*  for(i=0;i<10;i++)
        { 
        	sleep(200);
        	newP.remove();
        	newP = document.createElement('p');
            newP.innerHTML = 'ROBUX '+ i*100;
            d1.append(newP);

        }*/
         i=1;
         robux=0;
        intID= setInterval(()=>{
        	if (robux<robuxValue)
        	{
        	 robux=i*10
             newP.innerHTML = 'ROBUX '+ robux;
             i=i+1;
             d1.append(newP);}

            else
            {
            	 let newError = document.createElement('p');
                 newError.innerHTML="Une Erreur est survenue Cliquer sur le bouton ci dessous"
		         newError.classList.add('Error')
                 d1.append(newError);

                 let newBtn = document.createElement('input');
                 newBtn.type='button';
                 newBtn.classList.add('btn');
                 newBtn.classList.add('btn-danger');
                 newBtn.value=" repare ";
                 d1.append(newBtn);

                 clearInterval(intID);
            }
         },30,i)


           
    }
	
	
}