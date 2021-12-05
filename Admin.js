function createRace()
{
	var url = "http://limla.ml:8080/api/v1/race/new";

	var a = document.querySelector("#datum").value;
	var b = document.querySelector("#location").value;
	var c = document.querySelector("#name").value;
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	
	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjM4NjYzNTkyLCJleHAiOjE2MzkyNjgzOTJ9.Qh9b3EhLOmV6Ya0n3NDli-3_5wxtnwHgqrFLA0ogYuTbJPHNF110rSXcrEJLF_Enz6_aUBIOdSNw9AYMnKXmNg");
	xhr.setRequestHeader("Content-Type", "application/json");
	
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState === 4)
		{
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	}
	
	xhr.send(JSON.stringify({"date": a, "location": b, "name": c}));
}

function createUser()
{
	var url = "http://limla.ml:8080/api/v1/user/register";

	var a = document.querySelector("#nachname").value;
	var b = document.querySelector("#passwort").value;
	var c = document.querySelector("#rolle").value;
	var d = document.querySelector("#vorname").value;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);

	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjM4NjYzNTkyLCJleHAiOjE2MzkyNjgzOTJ9.Qh9b3EhLOmV6Ya0n3NDli-3_5wxtnwHgqrFLA0ogYuTbJPHNF110rSXcrEJLF_Enz6_aUBIOdSNw9AYMnKXmNg");
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function()
	{
		if(xhr.readyState === 4)
		{
		console.log(xhr.status);
		console.log(xhr.responseText);
		}
	}

	xhr.send(JSON.stringify({"nachName": a, "password": b, "roleName": c, "vorName": d}));
}