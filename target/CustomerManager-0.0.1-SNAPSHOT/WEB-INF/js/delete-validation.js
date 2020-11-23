function deleteUserRequest(link){
    if(show_confirm()){
     window.location = "delete?id="+link;
     this.hide(); 
    }
    else{
     this.hide();  
    }
}
function show_confirm()
{
  return confirm("Are you sure you want to do this?");
}