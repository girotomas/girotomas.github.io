
function getData(){
	try{
		var data = window.location.href.split('?')[1];
		data = JSON.parse(atob(data));
		return data;
	}
	catch(err){
		console.log(err);
		return {cart:{}};
	}
}
var data = getData();
console.log('data:', data);
function reload(){
	window.location.href = window.location.href.split('?')[0] +'?'+ encode(data);
}
function goTo(page){
	// page such as 'index.html'
	window.location.href = `./${page}?` + encode(data);
}
function encode(data){
	return btoa(JSON.stringify(data));
}
