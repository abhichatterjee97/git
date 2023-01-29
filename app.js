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
var itemlist=document.querySelector("#items")
itemlist.parentNode.style.background="yellow"
itemlist.parentElement.style.font="bold"
itemlist.children[2].style.background="blue"
console.log(itemlist.childNodes)
console.log(itemlist.firstChild)
itemlist.firstElementChild.style.color="black"

itemlist.lastElementChild.textContent="hello"
console.log(itemlist.lastChild)
console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling)
console.log(itemlist.previousSibling)
itemlist.previousElementSibling.style.color="green"
var newdiv=document.createElement("div")
newdiv.className="hello"
newdiv.id="hello1"
newdiv.setAttribute("title","hello div")
var newdivtext=document.createTextNode("hello world")
newdiv.appendChild(newdivtext)
var container=document.querySelector("header .container")
var h1=document.querySelector("header h1")
container.insertBefore(newdiv,h1)
var h=document.getElementById("header-title")
h.textContent="Hello world item lister"
var a=document.querySelector(".list-group")
a.firstChild.textContent="Hello world item 1"

