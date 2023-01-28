var header=document.getElementById("main-header")
header.style.borderBottom="solid 2px black"
var item=document.querySelector('h2')
item.style.color="green"
item.style.fontFamily="bold"
var items=document.getElementsByClassName("list-group-item")
items[2].style.background="green"
for(var i=0;i<items.length;i++)
{
    items[i].style.fontFamily="bold"
}
