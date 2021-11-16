//demo.js

let i =0 ;
function doSomeBigJob(){
	if(i < 100000){
		i = i + 1;
		postMessage(i);
	}
	setTimeout(doSomeBigJob(), 1500);
}//Web workers will not allow to access any DOM elements, only Ur logic could be included in it..

doSomeBigJob();