function sendemail(event) {
    const fullName =document.getElementsByName("fullname")[0].value;
    const email=document.getElementsByName("email")[0].value;
    const comment=document.getElementById("comment").value;
    const link =document.createElement("a")
    link.href="mailto:maseresharediet@gmail.com?subject="+fullName+"&body="+comment
    link.target="_blank"
    link.click()
}
document.getElementById("submit").addEventListener("click",sendemail);



