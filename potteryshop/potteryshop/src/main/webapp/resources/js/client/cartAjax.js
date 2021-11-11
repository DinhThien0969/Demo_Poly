calculateOrder()
function changeQuanity(id,value,price)
	{
		$.ajax({
			type: "GET",		
			url: "http://localhost:8080/potteryshop/api/gio-hang/changSanPhamQuanity?id="+id+"&value="+value,
			success: function(result){
				calculatePrice(id,value,price);
				calculateOrder();
				console.log("sucess");	
			},
			error : function(e){
				alert("Error: ",e);
				console.log("Error" , e );
			}
		});
	}

function deleteFromCart(id)
{
	$.ajax({
		type: "GET",		
		url: "http://localhost:8080/potteryshop/api/gio-hang/deleteFromCart?id="+id,
		success: function(result){
		    var element = document.getElementById("item"+id);
			element.parentNode.removeChild(element);
			calculateOrder();
		},
		error : function(e){
			alert("Error: ",e);
			console.log("Error" , e );
		}
	});
}
function deleteFromCartNew(id)
{
	$.ajax({
		type: "GET",		
		url: "http://localhost:8080/potteryshop/api/gio-hang/deleteFromCartNew?id="+id,
		success: function(result){
		    var element = document.getElementById("itemNew"+id);
			element.parentNode.removeChild(element);
			calculateOrder();
		},
		error : function(e){
			alert("Error: ",e);
			console.log("Error" , e );
		}
	});
}

function calculatePrice(id,value,price)
{
	var element = document.getElementById("item"+id+"_total");

	element.innerHTML = value * price;
}
function parseNumber(strg) {
    var strg = strg || "";
    var decimal = '.';
    strg = strg.replace(/[^0-9$.,]/g, '');
    if(strg.indexOf(',') > strg.indexOf('.')) decimal = ',';
    if((strg.match(new RegExp("\\" + decimal,"g")) || []).length > 1) decimal="";
    if (decimal != "" && (strg.length - strg.indexOf(decimal) - 1 == 3) && strg.indexOf("0" + decimal)!==0) decimal = "";
    strg = strg.replace(new RegExp("[^0-9$" + decimal + "]","g"), "");
    strg = strg.replace(',', '.');
    return parseFloat(strg);
}

function changeQuanityNew(id,value,price)
	{
		$.ajax({
			type: "GET",		
			url: "http://localhost:8080/potteryshop/api/gio-hang/changSanPhamQuanityNew?id="+id+"&value="+value,
			success: function(result){
				calculatePrice(id,value,price);
				calculateOrder();
				console.log("sucess"+id,value,price);	
			},
			error : function(e){
				alert("Error: ",e);
				console.log("Error" , e );
			}
		});
	}

function calculateOrder()
{
	var element = document.getElementsByClassName("total");
	var res = 0;
	for (i = 0; i < element.length; i++) {
		res = res + parseNumber(element[i].textContent);
	}
	var element2 = document.getElementById("ordertotal");
	resConvert = accounting.formatMoney(res);
	element2.innerHTML = resConvert;
}
