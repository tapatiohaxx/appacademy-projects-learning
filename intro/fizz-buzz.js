function fizzBuzz(num){
	    for(let i = 0; i <= num; ++i)
		        if(i % 3 == 0 && i  % 5 ==0)
			            console.log("fizzbuzz \n");
			else if(i % 5 == 0 )
				console.log("buzz \n");
			else if(i % 3 ==0)
				console.log("fizz \n");
			else
				console.log(i);
			

}

fizzBuzz(20);
