
var priceList = document.getElementById("priceList");
//var subtotalArea = document.getElementById("subtotal");
var total= document.getElementById("total");
var gInput = document.getElementById("gInput");
var bInput = document.getElementById("bInput");
var cInput = document.getElementById("cInput");
var gInputSub = document.getElementById("gInputSub");
var bInputSub = document.getElementById("bInputSub");
var cInputSub = document.getElementById("cInputSub");
    //  var bButton =  formElement.bButton.value;
    //  var cButton = formElement.cButton.value;
  gInput.addEventListener("input", function(event){
 gInputSub.value = event.target.value * 5;
 grandTotal();
    });
  bInput.addEventListener("input", function(event){
    bInputSub.value = event.target.value * 7;
 grandTotal();

    });
 cInput.addEventListener("input", function(event){
  cInputSub.value = event.target.value * 11;
  grandTotal();
     
 });
function grandTotal(){
  var gTotal= parseInt(gInputSub.value);
  var bTotal= parseInt(bInputSub.value);
  var cTotal= parseInt(cInputSub.value);
total.value = gTotal + bTotal +cTotal;

}
//      function equ(button){
      
//        if(formElement.button = gButton){
//          formElement.subtotal =gButton.value += gButton.value;
//        }if else(forElement.button = bButton){
//           formElement.subtotal=bButton.value += bButton.value;
//       }else{
//         subtotal = cButton.value += cButton.value;
      
//        }
       
//        }
//          return subtotal;
//        }
      
    
      
    
     

     
       
// }


  
//  //}else if(formElement.button.bButton ){
//    // formElement.bButton.value + formElement.bButton.value;
// //}else{
//         //formElements.cButton.value + formElements.cButton.value;
  //  }
//})    
