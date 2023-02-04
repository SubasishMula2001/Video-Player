var demo=function(x)
{
	"use strict"
	var input=x.target;
	var reader=new FileReader();
reader.onload=function()
{
    var filename=reader.result;
    var result=document.getElementById("result");
    result.src=filename;

};
reader.readAsDataURL(input.files[0]);
};