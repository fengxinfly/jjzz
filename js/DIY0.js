
function loadProductAll() {
	var postData = "";
	requestPostFront("/flowController/queryProductAll",postData,function (resultData){
			$("#productSelectId").empty();
			var productList = resultData.data;
			var str = '<option value="0">请选择套餐</option>';
			if (productList!=null && productList.length){
				for (var i=0;i<productList.length;i++){
					var product = productList[i];
					str +='<option value="'+product.id+'">'+product.productName+'</option>';
				}
			}
			$("#productSelectId").append(str);
		}
	)
}
function createCase() {
	$("#SpanA").hide();
	$("#SpanB").show();
	var postData = $("#createCaseForm").serialize();
	requestPostFront("/flowController/createCaseAllMaterial",postData,function (resultData){
			alert(resultData.msg);
			if(resultData.msg=='成功'){
				window.location.href = "DIY1.html?case_id="+resultData.id;
			}else {
				$("#SpanA").show();
				$("#SpanB").hide();
			}
		}
	)
}