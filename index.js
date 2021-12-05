function einloggen()
{
	var url = "http://limla.ml:8080/api/v1/user/login";

	var a = document.querySelector("#vorname").value;
	var b = document.querySelector("#nachname").value;
	var c = document.querySelector("#passwort").value;
	
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
	
	xhr.send(JSON.stringify({"nachName": b, "password": c, "vorName": a}));
    alert("Button funktioniert");
}