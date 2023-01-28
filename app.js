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
var li=document.getElementsByTagName("li")
for(var i=0;i<li.length;i++)
{
    li[i].style.color="yellow"
}
var item2=document.querySelector(".list-group-item:nth-child(2)")
item2.style.background="green"
var item3=document.querySelector(".list-group-item:nth-child(3)")
item3.style.display="none"
var items2=document.querySelectorAll(".list-group-item")
items2[1].style.color="green"
var odd=document.querySelectorAll("li:nth-child(odd)")
for(var i=0;i<odd.length;i++)
{
    items2[i].style.background="green"
}
