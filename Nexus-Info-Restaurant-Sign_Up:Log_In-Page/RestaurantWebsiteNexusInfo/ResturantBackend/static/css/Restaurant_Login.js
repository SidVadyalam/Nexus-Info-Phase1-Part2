UsrNameLabel = document.querySelector(".Username").getElementsByTagName('label')[0]
UsrNameInput = document.querySelector(".Username").getElementsByTagName('input')[0]
UsrNameDIV = document.querySelector(".Username")
PswrdLabel = document.querySelector(".Password").getElementsByTagName('label')[0]
PswrdInput = document.querySelector(".Password").getElementsByTagName('input')[0]
PswrdDIV = document.querySelector(".Password")


UsrNameInput.addEventListener("blur", function(a){ 
	//console.log(UsernameInput.value.length)
	if (check_username_validity(UsrNameInput.value)){
		UsrNameLabel.classList.remove("Wrong-Answer");
		UsrNameDIV.classList.remove("Wrong-Answer-Username-Div");

	} else{
		UsrNameLabel.classList.add("Wrong-Answer");
		UsrNameDIV.classList.add("Wrong-Answer-Username-Div");

	}
})


PswrdInput.addEventListener("blur", function(a){ 
	//console.log(PasswordInput.value.length)
	if (PswrdInput.value.length < 8){
		PswrdLabel.classList.add("Wrong-Answer");
		PswrdDIV.classList.add("Wrong-Answer-Password-Div");

	} else{
		PswrdLabel.classList.remove("Wrong-Answer");
		PswrdDIV.classList.remove("Wrong-Answer-Password-Div");
	}
})



function check_username_validity(word){
	for (let i of word){
		if (!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.".includes(i)))
			return false
	}
	return true
}