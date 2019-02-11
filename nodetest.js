	// Basic 1
	/*
	let StringToTest = process.argv[2];
	
	let testing = StringToTest.split(" ");
	console.log(testing.length);
	*/
	
	// Basic 2
	/*
	let AddToArray = process.argv[2];
	
	arraybasic = AddToArray.split(" ");
	
	let arrayl = arraybasic.length - 1;
	console.log(arraybasic[arrayl]);
	*/
	
	// Basic 3
	/*
	let testNum = process.argv[2];
	
	if(testNum % 2 == 0){
		console.log("Even");
	} else {
		console.log("Odd");
	}
	*/
	
	// Basic 4
	/*
	let name = process.argv[2];
	
	nametest = name.split(" ");
	console.log(nametest[1] + " " + nametest[0]);
	*/
	
	// Basic 5
	/*
	let reverse = process.argv[2];
	
	actualString = "";
	reverseString = reverse.split("");
	for(i=reverseString.length-1; i>-1; i--){
		actualString += reverseString[i];
	}
	
	console.log(actualString);
	*/
	
	// Basic 6
	/*
	let numbersIn = process.argv[2];
	let toprint = 0;
	let numbers = numbersIn.split(" ");
	
	for(i in numbers){
		if(i == 0){
			toprint = numbers[i];
		} else if (toprint > numbers[i]) {
			toprint = numbers[i];
		}
	}
	
	console.log(toprint);
	*/
	
	//Intermediate 1
	/*
	let inputString = process.argv[2];
	
	let testString = inputString.split(" ");
	
	improvedString = testString.filter(function(name, pos) {
		return testString.indexOf(name) == pos;
	})
	
	console.log(improvedString);
	*/
	
	//Intermediate 2
	/*
	let inputNumbers = process.argv[2];
	
	let testNumbers = inputNumbers.split("");
	
	let output = 0;
	
	output = (testNumbers.sort( 
		function(a,b){
			return b-a
		}
	));
	
	console.log(output.join(""));
	*/
	
	//Intermediate 3
	/*
	let inputEmail = process.argv[2];
	
	let testEmail = inputEmail.split("@");
	
	if((testEmail[0].length > 0) && (testEmail[1].endsWith(".com") || testEmail[1].endsWith(".co.uk"))){
		console.log("Valid Email");
	} else {
		console.log("Invalid Email");
	}
	*/
	
	//Intermediate 4
	/*
	let inputNumber = process.argv[2];
	let squarenum = Math.floor(Math.sqrt(inputNumber));
	
	var prime = inputNumber != 1;
	for(var i=2; i<squarenum+1; i++){
		if(inputNumber%i == 0){
			prime = false;
			break;
		}
		break;
	}
	
	console.log(prime);
	*/
	
	//Intermediate 6
	/*
	let inputString = process.argv[2];
	
	let testString = inputString.split("");
	
	let finalString = "";

	for(i = 0; i < testString.length; i++){
		if(testString[i] == testString[i-1]){
			finalString += testString[i];
		} else {
			if(i != 0){
				finalString += "-" + testString[i].toUpperCase();
			} else {
				finalString += testString[i].toUpperCase();
			}
		}
	}
	
	console.log(finalString);
	*/
	
	//Advanced 1
	itemsList = [
		{name:"necklace",weight:6,value:18},
		{name:"bracelet",weight:4,value:10},
		{name:"clock",weight:8,value:10},
		{name:"watch",weight:3,value:15}
	]
	
	let weightin = process.argv[2];
	
	let totalweight = 0;
	let actualweight = 0;
	let fullval = 0;
	
	let items = [];
	
	fill(weightin, itemsList);
	
	function fill (maxweight, itemsIn){
		while(totalweight < maxweight){
			console.log("Weight For Method: " + (maxweight - totalweight));
			addItem(maxweight - totalweight);
		}
		
		sack = {
			"capacity":maxweight,
			"items":items,
			"weight":actualweight,
			"value":fullval
		};
		console.log(sack);
	}
	
	function addItem (mWeight){
		let val = 0;
		for(i in itemsList){
			if(itemsList[i].weight <= mWeight){
				if(itemsList[i].value > val){
					totalweight += itemsList[i].weight;
					val = itemsList[i].value;
					itemToAdd = itemsList[i];
					fullval += val;
				}
			} 
		}
		if(val == 0){
			actualweight = totalweight;
			totalweight += mWeight;	
			console.log("Weight Added On: " + mWeight);
		} else {
			actualweight = totalweight;
			items.push(itemToAdd);
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	