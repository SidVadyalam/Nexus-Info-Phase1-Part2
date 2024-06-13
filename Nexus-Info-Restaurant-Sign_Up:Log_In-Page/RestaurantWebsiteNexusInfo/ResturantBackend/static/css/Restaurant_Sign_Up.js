FNameLabel = document.querySelector(".First-Name").getElementsByTagName('label')[0]
FNameInput = document.querySelector(".First-Name").getElementsByTagName('input')[0]
FNameDIV = document.querySelector(".First-Name")
LNameLabel = document.querySelector(".Last-Name").getElementsByTagName('label')[0]
LNameInput = document.querySelector(".Last-Name").getElementsByTagName('input')[0]
LNameDIV = document.querySelector(".Last-Name")
UsrEmailLabel = document.querySelector(".Email").getElementsByTagName('label')[0]
UsrEmailInput = document.querySelector(".Email").getElementsByTagName('input')[0]
UsrEmailDIV = document.querySelector(".Email")
PhoneNumLabel = document.querySelector(".Phone").getElementsByTagName('label')[0]
PhoneNumInput = document.querySelector(".Phone").getElementsByTagName('input')[0]
PhoneNumDIV = document.querySelector(".Phone")
UsrNameLabel = document.querySelector(".Username").getElementsByTagName('label')[0]
UsrNameInput = document.querySelector(".Username").getElementsByTagName('input')[0]
UsrNameDIV = document.querySelector(".Username")
PswrdLabel = document.querySelector(".New-Password").getElementsByTagName('label')[0]
PswrdInput = document.querySelector(".New-Password").getElementsByTagName('input')[0]
PswrdDIV = document.querySelector(".New-Password")
CPswrdLabel = document.querySelector(".Confirm-Password").getElementsByTagName('label')[0]
CPswrdInput = document.querySelector(".Confirm-Password").getElementsByTagName('input')[0]
CPswrdDIV = document.querySelector(".Confirm-Password")
Bckgrnd = document.querySelector(".Background")
Sign_Up = document.querySelector(".Sign-Up-Box")

FNameInput.addEventListener("blur", function(a){
	if (check_name_validity(FNameInput.value)){
		FNameLabel.classList.remove("Wrong-Answer");
		FNameDIV.classList.remove("Wrong-Answer-Name-Div");
		adjust_height()

	} else {
		FNameLabel.classList.add("Wrong-Answer");
		FNameDIV.classList.add("Wrong-Answer-Name-Div");
		adjust_height()

	}
})



LNameInput.addEventListener("blur", function(a){
	if (check_name_validity(LNameInput.value)){
		LNameLabel.classList.remove("Wrong-Answer");
		LNameDIV.classList.remove("Wrong-Answer-Name-Div");
		adjust_height()

	} else {
		LNameLabel.classList.add("Wrong-Answer");
		LNameDIV.classList.add("Wrong-Answer-Name-Div");
		adjust_height()

	}
})


UsrEmailInput.addEventListener("blur", function(a){
	if (UsrEmailInput.value.includes("@")){
		UsrEmailLabel.classList.remove("Wrong-Answer");
		UsrEmailDIV.classList.remove("Wrong-Answer-Email-Div");
		adjust_height()

	} else {
		UsrEmailLabel.classList.add("Wrong-Answer");
		UsrEmailDIV.classList.add("Wrong-Answer-Email-Div");
		adjust_height()

	}
})


PhoneNumInput.addEventListener("blur", function(a){
	if (check_phone_validity(PhoneNumInput.value)){
		PhoneNumLabel.classList.remove("Wrong-Answer");
		PhoneNumDIV.classList.remove("Wrong-Answer-Phone-Div");
		adjust_height()

	} else {
		PhoneNumLabel.classList.add("Wrong-Answer");
		PhoneNumDIV.classList.add("Wrong-Answer-Phone-Div");
		adjust_height()

	}
})


UsrNameInput.addEventListener("blur", function(a){ 
	//console.log(UsernameInput.value.length)
	if (check_username_validity(UsrNameInput.value)){
		UsrNameLabel.classList.remove("Wrong-Answer");
		UsrNameDIV.classList.remove("Wrong-Answer-Username-Div");
		adjust_height()
	} else{
		UsrNameLabel.classList.add("Wrong-Answer");
		UsrNameDIV.classList.add("Wrong-Answer-Username-Div");
		adjust_height()
	}
})


PswrdInput.addEventListener("blur", function(a){ 
	//console.log(PasswordInput.value.length)
	if (PswrdInput.value.length < 8){
		PswrdLabel.classList.add("Wrong-Answer");
		PswrdDIV.classList.add("Wrong-Answer-Password-Div");
		adjust_height()

	} else{
		PswrdLabel.classList.remove("Wrong-Answer");
		PswrdDIV.classList.remove("Wrong-Answer-Password-Div");
		adjust_height()

	}
})


CPswrdInput.addEventListener("blur", function(a){ 
	//console.log(PasswordInput.value.length)
	if (!(PswrdInput.value === CPswrdInput.value)){
		CPswrdLabel.classList.add("Wrong-Answer");
		CPswrdDIV.classList.add("Wrong-Answer-Confirm-Password-Div");
		adjust_height()

	} else{
		CPswrdLabel.classList.remove("Wrong-Answer");
		CPswrdDIV.classList.remove("Wrong-Answer-Confirm-Password-Div");
		adjust_height()

	}
})

window.addEventListener('resize', adjust_height);


function check_username_validity(word){
	for (let i of word){
		if (!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.".includes(i)))
			return false
	}
	return true
}


function check_phone_validity(number){
	for (let j of number){
		if (!("1234567890(-)".includes(j))){
			return false
		}
		return true
	}
}


function check_name_validity(name){
	for (let k of name){
		if (!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(k))){
			return false
		}
		return true
	}
}


function adjust_height(){
	Bckgrnd.style.minHeight = `${Sign_Up.offsetHeight}px`;
}