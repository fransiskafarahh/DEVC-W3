//Month Arrays -----------------------------------------------------------
var namaa = ["Alderaan","Yavin IV","Hoth","dagobah"]
var rotation =["24","24","23","23"]
var orbital = ["364","4818","549","341"];
var diameter = ["12500", "10200", "7200","8900"];
var climate = ["temperate","temperate, tropical","frozen","murky"]
var gravity = ["1 standard","1 standard", "1,1 standard","N/A"]
var terrain =["grasslands, mountains", "jungle, rainforests", "Tundra","swap,jungles"]
var surface = ["40", "8", "100","8"]
var population =["2000000000","1000","unknown",]
//Static content ---------------------------------------------------------
document.write("<table border='1' width='200'>")
document.write("<tr><th>#</th><th>Name</th><th>rotation</th><th>orbital</th><th>diameter</th><th>climate</th><th>gravity</th><th>terrain</th><th>surface water</th><th>population</th></tr>");
//Dynamic content --------------------------------------------------------
for(var i=0; i<4;i++)
{
	document.write("<tr><td>" + (i+1) + "</td><td>" + namaa[i] + "</td><td>"+ rotation[i] + "</td><td>"+ orbital[i] + "</td><td>"+ diameter[i] + "</td><td>"+ climate[i] + "</td><td>"+ gravity[i] + "</td><td>" + terrain[i] +"</td><td>"+ surface[i] + "</td><td>"+ population[i] + "</td></tr>");
}
//Static content  --------------------------------------------------------
document.write("</table>")