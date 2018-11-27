/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 13/12/2016       Mohit Sharma            Bug 66247 - Validation on submit button in ibps mobile form required
 * 07/05/2018       Gaurav Sharma           Bug 77543 - Events and webservice functionality not working in iform not getting output.
 */

function setValue(controlName, controlValue ){
   var objComp = document.getElementById(controlName);
    if(objComp==null|| objComp.classList.contains("iform-radio"))
    {
        objComp =  document.getElementsByName(controlName)[0];
    }
                
    if( objComp != null ){
        //Bug 76737 Start
        if(objComp.type=='text'||objComp.type=="textarea"){
            if(objComp.maxLength>-1){
                if(objComp.maxLength<controlValue.length)
                    controlValue=controlValue.substr(0,objComp.maxLength);
            }
            objComp.value=controlValue;
        }//Bug 76737 End
        if(objComp.type=='select-one' || objComp.type=='ComboBox' || objComp.type=='select-multiple')
        {   
            objComp.value=controlValue;   
        }
        else if(objComp.tagName=='LABEL')
        {
            objComp.innerHTML=controlValue;
        }
        else if(objComp.type=='radio')
        {
            jQuery("input[name="+controlName+"][value=" + controlValue + "]").attr('checked', 'checked');
        }
        else if(objComp.type=='checkbox')
        {
            if(controlValue.toLowerCase()=="true")
            {
                objComp.checked=true;
            }
            else
            {
                objComp.checked=false;
            }
        }
    }
}

//function setStyle( controlId, attributeName, attributeValue ){
//    if( attributeName.toLowerCase() == "backcolor")
//        jQuery("#"+controlId).css("background-color","#"+attributeValue);
//    else if( attributeName.toLowerCase() == "fontcolor")
//        jQuery("#"+controlId).css("color","#"+attributeValue);
//    else if( attributeName.toLowerCase() == "visible")
//    {
//        if( attributeValue.toLowerCase() == "true"){
//            jQuery("#"+controlId).css("display","inline");
//            jQuery("#"+controlId+"_label").css("display","inline");
//        }
//        else if( attributeValue.toLowerCase() == "false"){
//            jQuery("#"+controlId).css("display","none");
//            jQuery("#"+controlId+"_label").css("display","none");
//        }
//    }
//    else if( attributeName.toLowerCase() == "disable")
//    {
//        if( attributeValue.toLowerCase() == "true")
//            jQuery("#"+controlId).css("disabled","true");
//        else if( attributeValue.toLowerCase() == "false")
//            jQuery("#"+controlId).removeAttr("disabled");
//    }
//    else if( attributeName.toLowerCase() == "readonly")
//        jQuery("#"+controlId).attr('readonly','readonly');
//    else if( attributeName.toLowerCase() == "fontfamily")
//        jQuery("#"+controlId).css("font-family",attributeValue);
//    else if( attributeName.toLowerCase() == "fontweight")
//        jQuery("#"+controlId).css("font-weight",attributeValue);
//    else if( attributeName.toLowerCase() == "fontstyle")
//        jQuery("#"+controlId).css("font-style",attributeValue);
//    else if( attributeName.toLowerCase() == "fontsize")
//        jQuery("#"+controlId).css("font-size",attributeValue);
//}

function customValidation(op){
     switch (op) {
        case 'S':
            
            break;
        case 'I':
            
            break;
        case 'D':
           
            break;
        default:
            break;
    }
    
    return true;
}

function formLoad(){
}

function onRowClick(tableId,rowIndex){
    
}

function customListViewValidation(controlId,flag){
    return true;
}   

function listViewLoad(controlId){
    
}