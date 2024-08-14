(()=>{"use strict";const e="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPiAgICA8cGF0aCBmaWxsPSJyZ2IoNTgsIDQsIDMyKSIgZD0iTSA2IDMgQyA0LjM1NTAzMDIgMyAzIDQuMzU1MDMwMiAzIDYgTCAzIDE4IEMgMyAxOS42NDQ5NyA0LjM1NTAzMDIgMjEgNiAyMSBMIDE4IDIxIEMgMTkuNjQ0OTcgMjEgMjEgMTkuNjQ0OTcgMjEgMTggTCAyMSA2IEMgMjEgNC4zNTUwMzAyIDE5LjY0NDk3IDMgMTggMyBMIDYgMyB6IE0gMTIgNyBMIDE0IDcgQyAxNCA4LjAwNSAxNS40NzEgOSAxNiA5IEwgMTYgMTEgQyAxNS4zOTUgMTEgMTQuNjY4IDEwLjczNDE1NiAxNCAxMC4yODUxNTYgTCAxNCAxNCBDIDE0IDE1LjY1NCAxMi42NTQgMTcgMTEgMTcgQyA5LjM0NiAxNyA4IDE1LjY1NCA4IDE0IEMgOCAxMi4zNDYgOS4zNDYgMTEgMTEgMTEgTCAxMSAxMyBDIDEwLjQ0OCAxMyAxMCAxMy40NDkgMTAgMTQgQyAxMCAxNC41NTEgMTAuNDQ4IDE1IDExIDE1IEMgMTEuNTUyIDE1IDEyIDE0LjU1MSAxMiAxNCBMIDEyIDcgeiIvPjwvc3ZnPg==",t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1OHB4IiBoZWlnaHQ9IjU4cHgiPgo8cGF0aCBmaWxsPSJyZ2IoNTgsIDQsIDMyKSIgZD0iTTMyLDEwYzEyLjEzMSwwLDIyLDkuODY5LDIyLDIycy05Ljg2OSwyMi0yMiwyMnMtMjItOS44NjktMjItMjJTMTkuODY5LDEwLDMyLDEweiBNNDMuNzk4LDI3LjU1MQljMS4wNTUtMC43NjIsMS45NzEtMS43MTIsMi42OTUtMi43OTRjLTEuNDcyLDAuNjY5LTMuMTAxLDAuODUtMy4xMDEsMC44NXMxLjkwMi0xLjEwMSwyLjM3My0yLjk4NgljLTEuMDQyLDAuNjE4LTIuMTk4LDEuMDY4LTMuNDI4LDEuMzFjLTAuOTg1LTEuMDQ5LTIuMzg3LTEuNzA1LTMuOTQtMS43MDVjLTIuOTgxLDAtNS4zOTgsMi40MTgtNS4zOTgsNS4zOTgJYzAsMC40MjMsMC4xNCwxLjIyOSwwLjE0LDEuMjI5cy02LjUxNCwwLjAzOS0xMS4xMjYtNS42NDFjMCwwLTAuNzEsMC45NDktMC43MywyLjcxNWMtMC4wMzQsMi45OTMsMi40LDQuNDkyLDIuNCw0LjQ5MglzLTEuMjI0LDAuMDMzLTIuNDQ1LTAuNjc1YzAuMTA5LDQuNjM2LDQuMzMsNS4zNiw0LjMzLDUuMzZzLTEuMzYzLDAuMjYyLTIuNDM4LDAuMDkzYzAuNjg3LDIuMTQ0LDIuNjgxLDMuNzA2LDUuMDQyLDMuNzQ5CWMtMS44NDcsMS40NDgtNC4xNzQsMi4zMTEtNi43MDQsMi4zMTFjLTAuNDM1LDAtMC44NjUtMC4wMjUtMS4yODgtMC4wNzZjMS4yNTMsMS4zNTcsNS4yMjYsMi40MjUsOC4yNzUsMi40MjUJYzkuOTI5LDAsMTUuMzU3LTguMjI1LDE1LjM1Ny0xNS4zNThDNDMuODEzLDI4LjAxNSw0My44MDgsMjcuNzgzLDQzLjc5OCwyNy41NTF6Ii8+PC9zdmc+",n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPiAgICA8cGF0aCAgZmlsbD0icmdiKDU4LCA0LCAzMikiIGQ9Ik0gOCAzIEMgNS4yMzkgMyAzIDUuMjM5IDMgOCBMIDMgMTYgQyAzIDE4Ljc2MSA1LjIzOSAyMSA4IDIxIEwgMTYgMjEgQyAxOC43NjEgMjEgMjEgMTguNzYxIDIxIDE2IEwgMjEgOCBDIDIxIDUuMjM5IDE4Ljc2MSAzIDE2IDMgTCA4IDMgeiBNIDE4IDUgQyAxOC41NTIgNSAxOSA1LjQ0OCAxOSA2IEMgMTkgNi41NTIgMTguNTUyIDcgMTggNyBDIDE3LjQ0OCA3IDE3IDYuNTUyIDE3IDYgQyAxNyA1LjQ0OCAxNy40NDggNSAxOCA1IHogTSAxMiA3IEMgMTQuNzYxIDcgMTcgOS4yMzkgMTcgMTIgQyAxNyAxNC43NjEgMTQuNzYxIDE3IDEyIDE3IEMgOS4yMzkgMTcgNyAxNC43NjEgNyAxMiBDIDcgOS4yMzkgOS4yMzkgNyAxMiA3IHogTSAxMiA5IEEgMyAzIDAgMCAwIDkgMTIgQSAzIDMgMCAwIDAgMTIgMTUgQSAzIDMgMCAwIDAgMTUgMTIgQSAzIDMgMCAwIDAgMTIgOSB6Ii8+PC9zdmc+",a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPiAgICA8cGF0aCBmaWxsPSJyZ2IoNTgsIDQsIDMyKSIgZD0iTTEyLDJDNi40NzcsMiwyLDYuNDc3LDIsMTJjMCw1LjAxMywzLjY5Myw5LjE1Myw4LjUwNSw5Ljg3NlYxNC42NUg4LjAzMXYtMi42MjloMi40NzR2LTEuNzQ5IGMwLTIuODk2LDEuNDExLTQuMTY3LDMuODE4LTQuMTY3YzEuMTUzLDAsMS43NjIsMC4wODUsMi4wNTEsMC4xMjR2Mi4yOTRoLTEuNjQyYy0xLjAyMiwwLTEuMzc5LDAuOTY5LTEuMzc5LDIuMDYxdjEuNDM3aDIuOTk1IGwtMC40MDYsMi42MjloLTIuNTg4djcuMjQ3QzE4LjIzNSwyMS4yMzYsMjIsMTcuMDYyLDIyLDEyQzIyLDYuNDc3LDE3LjUyMywyLDEyLDJ6Ii8+PC9zdmc+";function i(){var i=document.querySelector("#content"),c=document.createElement("footer"),o=document.createElement("div"),r=document.createElement("div"),d=document.createElement("ul"),s=document.createElement("li"),M=document.createElement("li"),u=document.createElement("li"),m=document.createElement("div"),l=document.createElement("div"),g=document.createElement("img"),p=document.createElement("img"),I=document.createElement("img"),D=document.createElement("img");c.className="footer",o.className="footer-container",r.className="location",s.className="name title",s.textContent="Modern Restaruant",M.innerHTML="678 Market Street <br>San Francisco, CA",u.textContent="415-678-9435",m.className="social",l.className="social-icons",g.src=a,p.src=t,I.src=n,D.src=e,i.append(c),c.append(o),o.append(r),r.append(d),d.append(s),d.append(M),d.append(u),o.append(m),m.append(l),l.append(g),l.append(p),l.append(I),l.append(D)}function c(){var e=document.querySelector("#content"),t=document.createElement("section"),n=document.createElement("section"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("h1"),o=document.createElement("div"),r=document.createElement("p"),d=document.createElement("p"),s=document.createElement("p");e.innerHTML="",t.setAttribute("id","hero"),n.setAttribute("id","story"),n.className="welcome",a.className="home",i.className="story",c.className="title",c.textContent="Modern Restaurant",o.className="story-text",r.textContent="Modern Restaurant and our casual, communal space Community Table, opened in October of 2021. The Cafeteria is anchored around a large table that opens to the Garden, where we offer seasonal outdoor seating amongst the flower beds and their pollinators.",d.textContent="Open Monday through Sunday to guests, highlighting our work with whole grains, preservation and butchery through breakfast, lunch and Community Table by Modern Restaurant — a family style dinner.",s.textContent="Reservations for Modern Restaurant and Community Table by Modern Restaurant can be made online. All sales are final and reservations cannot be canceled.  New reservations are released one month at a time on the 15th of the month prior.",e.append(t),e.append(n),t.append(a),n.append(i),i.append(c),i.append(o),o.append(r),o.append(d),o.append(s),window.scrollTo(0,0)}const o=JSON.parse('{"lunch":[{"dish":"Pork Croquettes","description":"Bechamel, Bonito, Chives","price":"30"},{"dish":"Pork Ramen","description":"Pork Belly, Pork Shoulder, Slow Poached Egg","price":"22"},{"dish":"Crispy Lamb Ribs","description":"Chilli Yogurt, Tingly Salt, Cilantro","price":"34"},{"dish":"Stripped Bass","description":"Stripped Bass, Green Pistachio Mole, Shallot, Fava Beans, Watercress","price":"42"},{"dish":"Bluefin Crudo","description":"Bluefin Tuna, Heart of Palm Juice, Pico de Gallo","price":"30"},{"dish":"Little Gem Salad","description":"Pepita Vinaigrette, Avocado, Sungold Tomato","price":"20"}],"dinner":[{"dish":"Bone Marrow Pasta","description":"Mud crab, pinstriped peanuts, sour koji butter","price":"120"},{"dish":"Wild Abalone","description":"wild abalone, young octopus, raw scallops, seaweed, aged vinegar","price":"60"},{"dish":"Smoked Eel","description":"sea eel, sea cucumber, walnuts, cod roe, ","price":"50"},{"dish":"Confit Pig Jowl","description":"Maitake, Southern squid, hispi sunchokes, salami, garum","price":"140"},{"dish":"Grilled Wagyu Skirt Stake","description":"Green Peppercor, Perilla, Tare","price":"120"},{"dish":"Smoked Prime Ribe","description":"Au Jus, Horseradish - Subject to availability","price":"140"}],"brunch":[{"dish":"Avocado Toast","description":"Sourdough Bread, Avocado, Baby Arugula, Tomato, and Pickled Onion","price":"20"},{"dish":"Breakfast Poutine","description":"French Fries, Scrambled Eggs, Cheese, Pork Sausage, Peppers, Onions, Sour Cream, Pico de Gallo.","price":"30"},{"dish":"BB Sliders","description":"Country Biscuits, Gravy, Jack Cheese, Scrambled Eggs - Bacon, Sausage, or Ham","price":"25"},{"dish":"Shrimp Bruschetta","description":"Sautéed Shrimp, Cherry Tomatoes, Basil, Feta, Shallots, White Wine. Rosemary Sourdough Bread","price":"140"},{"dish":"Chicken & Waffles","description":"Country Fried Chicken, Waffles, Gravy, Syrup","price":"120"}],"drinks":[{"dish":"NSFW Spritz","description":"Sour Vodka, Passionfruit, Vanilla, Bubbles","price":"21"},{"dish":"Middle School Crush","description":"Midori, Svol Aquavit, Aloe Vera Liquer, Sugarcane, Lime","price":"25"},{"dish":"Spicy Margarita","description":"Codigo Blanco, Dry Curacao, Gochujang, Lime","price":"21"},{"dish":"Tamari Old Fashioned","description":"Old Forester Bourbon, Black Sugar, Tamari, Bitters","price":"25"},{"dish":"Doctor\'s Order","description":"Carrot, Ginger, Lemon, Honey","price":"21"},{"dish":"Lager Orion","description":"Okinawa","price":"18"},{"dish":"IPA Goose Island","description":"Chicago","price":"14"}]}');function r(e,t){var n=document.querySelector(".menus-container"),a=document.querySelector(".menu-content");n.classList.contains("collapsed")&&(n.classList.remove("collapsed"),window.scrollBy({top:E,left:0,behavior:"smooth"})),n.addEventListener("transitionend",(function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"lunch";e.preventDefault();var n=document.querySelector(".menu-content");n.innerHTML="",n.classList.add("display");var a=document.createElement("h2");a.classList.add("menu-title"),a.textContent=t,n.append(a),o[t].forEach((function(e){var t=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");t.classList.add("menu-item"),a.classList.add("dish-name"),i.classList.add("dish-description"),c.classList.add("dish-price"),a.textContent=e.dish,i.textContent=e.description,c.textContent=e.price,t.append(a),t.append(i),t.append(c),n.append(t)}))}(e,t)})),n.classList.contains("expand")?(a.classList.remove("display"),n.classList.remove("expand"),setTimeout((function(){n.classList.add("expand"),a.classList.add("display")}),1e3)):n.classList.add("expand")}var d,s,M,u,m,l,g,p,I,D,N,E=null;document.addEventListener("DOMContentLoaded",(function(){E=null===E?window.innerHeight+.1*window.innerHeight:document.querySelector(".menu").scrollHeight+document.querySelector(".option-bar").scrollHeight,document.querySelector(".menu-content")})),d=document.querySelector(".nav"),s=document.createElement("button"),M=document.createElement("span"),u=document.createElement("span"),m=document.createElement("span"),d.append(s),s.append(M),s.append(u),s.append(m),s.className="btn-nav",M.className="icon-bar up",u.className="icon-bar middle",m.className="icon-bar down",function(){var e=document.querySelector(".nav-content"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("button"),o=document.createElement("button"),r=document.createElement("button"),d=document.createElement("div"),s=document.createElement("ul"),M=document.createElement("li"),u=document.createElement("li"),m=document.createElement("div"),l=document.createElement("div"),g=document.createElement("img"),p=document.createElement("img"),I=document.createElement("img"),D=document.createElement("img");t.className="title",n.className="nav-item",a.className="nav-item",i.className="nav-item",c.textContent="Home",o.textContent="Menu",r.textContent="About",d.className="location",m.className="social",l.className="social-icons",t.textContent="Modern Restaurant",r.setAttribute("id","aboutBtn"),c.setAttribute("id","homeBtn"),o.setAttribute("id","menuBtn"),M.innerHTML="678 Market Street <br/>San Francisco, CA",u.textContent="415-678-9435",g.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiPiAgICA8cGF0aCBmaWxsPSJyZ2JhKDIzMCwgMTk1LCAxMTQsIDEpIiBkPSJNMTIsMkM2LjQ3NywyLDIsNi40NzcsMiwxMmMwLDUuMDEzLDMuNjkzLDkuMTUzLDguNTA1LDkuODc2VjE0LjY1SDguMDMxdi0yLjYyOWgyLjQ3NHYtMS43NDkgYzAtMi44OTYsMS40MTEtNC4xNjcsMy44MTgtNC4xNjdjMS4xNTMsMCwxLjc2MiwwLjA4NSwyLjA1MSwwLjEyNHYyLjI5NGgtMS42NDJjLTEuMDIyLDAtMS4zNzksMC45NjktMS4zNzksMi4wNjF2MS40MzdoMi45OTUgbC0wLjQwNiwyLjYyOWgtMi41ODh2Ny4yNDdDMTguMjM1LDIxLjIzNiwyMiwxNy4wNjIsMjIsMTJDMjIsNi40NzcsMTcuNTIzLDIsMTIsMnoiLz48L3N2Zz4=",p.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPiAgIDxwYXRoIGZpbGw9InJnYmEoMjMwLCAxOTUsIDExNCwgMSkiIGQ9Ik0zMiwxMGMxMi4xMzEsMCwyMiw5Ljg2OSwyMiwyMnMtOS44NjksMjItMjIsMjJzLTIyLTkuODY5LTIyLTIyUzE5Ljg2OSwxMCwzMiwxMHogTTQzLjc5OCwyNy41NTEJYzEuMDU1LTAuNzYyLDEuOTcxLTEuNzEyLDIuNjk1LTIuNzk0Yy0xLjQ3MiwwLjY2OS0zLjEwMSwwLjg1LTMuMTAxLDAuODVzMS45MDItMS4xMDEsMi4zNzMtMi45ODYJYy0xLjA0MiwwLjYxOC0yLjE5OCwxLjA2OC0zLjQyOCwxLjMxYy0wLjk4NS0xLjA0OS0yLjM4Ny0xLjcwNS0zLjk0LTEuNzA1Yy0yLjk4MSwwLTUuMzk4LDIuNDE4LTUuMzk4LDUuMzk4CWMwLDAuNDIzLDAuMTQsMS4yMjksMC4xNCwxLjIyOXMtNi41MTQsMC4wMzktMTEuMTI2LTUuNjQxYzAsMC0wLjcxLDAuOTQ5LTAuNzMsMi43MTVjLTAuMDM0LDIuOTkzLDIuNCw0LjQ5MiwyLjQsNC40OTIJcy0xLjIyNCwwLjAzMy0yLjQ0NS0wLjY3NWMwLjEwOSw0LjYzNiw0LjMzLDUuMzYsNC4zMyw1LjM2cy0xLjM2MywwLjI2Mi0yLjQzOCwwLjA5M2MwLjY4NywyLjE0NCwyLjY4MSwzLjcwNiw1LjA0MiwzLjc0OQljLTEuODQ3LDEuNDQ4LTQuMTc0LDIuMzExLTYuNzA0LDIuMzExYy0wLjQzNSwwLTAuODY1LTAuMDI1LTEuMjg4LTAuMDc2YzEuMjUzLDEuMzU3LDUuMjI2LDIuNDI1LDguMjc1LDIuNDI1CWM5LjkyOSwwLDE1LjM1Ny04LjIyNSwxNS4zNTctMTUuMzU4QzQzLjgxMywyOC4wMTUsNDMuODA4LDI3Ljc4Myw0My43OTgsMjcuNTUxeiIvPjwvc3ZnPg==",I.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPiAgICA8cGF0aCBmaWxsPSJyZ2JhKDIzMCwgMTk1LCAxMTQsIDEpIiBkPSJNIDggMyBDIDUuMjM5IDMgMyA1LjIzOSAzIDggTCAzIDE2IEMgMyAxOC43NjEgNS4yMzkgMjEgOCAyMSBMIDE2IDIxIEMgMTguNzYxIDIxIDIxIDE4Ljc2MSAyMSAxNiBMIDIxIDggQyAyMSA1LjIzOSAxOC43NjEgMyAxNiAzIEwgOCAzIHogTSAxOCA1IEMgMTguNTUyIDUgMTkgNS40NDggMTkgNiBDIDE5IDYuNTUyIDE4LjU1MiA3IDE4IDcgQyAxNy40NDggNyAxNyA2LjU1MiAxNyA2IEMgMTcgNS40NDggMTcuNDQ4IDUgMTggNSB6IE0gMTIgNyBDIDE0Ljc2MSA3IDE3IDkuMjM5IDE3IDEyIEMgMTcgMTQuNzYxIDE0Ljc2MSAxNyAxMiAxNyBDIDkuMjM5IDE3IDcgMTQuNzYxIDcgMTIgQyA3IDkuMjM5IDkuMjM5IDcgMTIgNyB6IE0gMTIgOSBBIDMgMyAwIDAgMCA5IDEyIEEgMyAzIDAgMCAwIDEyIDE1IEEgMyAzIDAgMCAwIDE1IDEyIEEgMyAzIDAgMCAwIDEyIDkgeiIvPjwvc3ZnPg==",D.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPiAgPHBhdGggZmlsbD0icmdiYSgyMzAsIDE5NSwgMTE0LCAxKSIgZD0iTSA2IDMgQyA0LjM1NTAzMDIgMyAzIDQuMzU1MDMwMiAzIDYgTCAzIDE4IEMgMyAxOS42NDQ5NyA0LjM1NTAzMDIgMjEgNiAyMSBMIDE4IDIxIEMgMTkuNjQ0OTcgMjEgMjEgMTkuNjQ0OTcgMjEgMTggTCAyMSA2IEMgMjEgNC4zNTUwMzAyIDE5LjY0NDk3IDMgMTggMyBMIDYgMyB6IE0gMTIgNyBMIDE0IDcgQyAxNCA4LjAwNSAxNS40NzEgOSAxNiA5IEwgMTYgMTEgQyAxNS4zOTUgMTEgMTQuNjY4IDEwLjczNDE1NiAxNCAxMC4yODUxNTYgTCAxNCAxNCBDIDE0IDE1LjY1NCAxMi42NTQgMTcgMTEgMTcgQyA5LjM0NiAxNyA4IDE1LjY1NCA4IDE0IEMgOCAxMi4zNDYgOS4zNDYgMTEgMTEgMTEgTCAxMSAxMyBDIDEwLjQ0OCAxMyAxMCAxMy40NDkgMTAgMTQgQyAxMCAxNC41NTEgMTAuNDQ4IDE1IDExIDE1IEMgMTEuNTUyIDE1IDEyIDE0LjU1MSAxMiAxNCBMIDEyIDcgeiIvPjwvc3ZnPg==",e.append(t),e.append(n),e.append(a),e.append(i),n.append(c),a.append(o),i.append(r),e.append(d),d.append(s),s.append(M),s.append(u),e.append(m),m.append(l),l.append(g),l.append(p),l.append(I),l.append(D)}(),l=document.querySelector("#homeBtn"),g=document.querySelector("#menuBtn"),p=document.querySelector("#aboutBtn"),I=document.querySelector(".btn-nav"),D=document.querySelector(".nav-content"),N=function(e){e.preventDefault(),D.classList.contains("initial")&&(D.classList.add("showNav"),D.classList.remove("initial")),D.classList.toggle("hideNav"),D.classList.toggle("showNav"),D.classList.remove("hidden"),I.classList.toggle("animated")},l.addEventListener("click",(function(){c(),i()})),g.addEventListener("click",(function(){var e,t,n,a,c,o,d,s,M,u,m,l,g,p,I,D,N,E,y,L,A,j;e=document.querySelector("#content"),t=document.createElement("section"),n=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),d=document.createElement("h1"),s=document.createElement("p"),M=document.createElement("p"),u=document.createElement("p"),m=document.createElement("div"),l=document.createElement("a"),g=document.createElement("a"),p=document.createElement("a"),I=document.createElement("a"),D=document.createElement("div"),N=document.createElement("div"),E=document.createElement("div"),e.innerHTML="",t.className="menu",n.className="menu-left",c.className="left-content",a.className="menu-right",m.className="option-bar",l.className="option-item",l.setAttribute("id","lunch"),l.textContent="Lunch",g.className="option-item",g.setAttribute("id","dinner"),g.textContent="Dinner",p.className="option-item",p.setAttribute("id","brunch"),p.textContent="Brunch",I.className="option-item",I.setAttribute("id","drinks"),I.textContent="Drinks",d.textContent="Menu",s.textContent="Modern Restaurant is a progression of rare and beautiful ingredients where texture, flavour and harmony is paramount.",M.textContent="Continually inspired by nature, the creative process for chef Sofia Moderna begins in working closely with the farmers, fishermen, producers and artisans who cultivate bespoke produce exclusively for Modern Restaurant. ",u.textContent="For each dish, the growth of every element and the selection of every ceramic piece is carefully considered and crafted for its role in the dining experience.",D.className="menus",N.className="menus-container collapsed",E.className="menu-content",e.append(t),t.append(n),t.append(a),n.append(c),c.append(d),c.append(o),o.append(s),o.append(M),o.append(u),e.append(m),m.append(l),m.append(g),m.append(p),m.append(I),e.append(D),D.append(N),N.append(E),y=document.querySelector("#lunch"),L=document.querySelector("#dinner"),A=document.querySelector("#brunch"),j=document.querySelector("#drinks"),y.addEventListener("click",(function(e){return r(0,"lunch")})),L.addEventListener("click",(function(e){return r(0,"dinner")})),A.addEventListener("click",(function(e){return r(0,"brunch")})),j.addEventListener("click",(function(e){return r(0,"drinks")})),window.scrollTo(0,0),i()})),p.addEventListener("click",(function(){var e,t,n,a,c,o,r,d,s,M,u;e=document.querySelector("#content"),t=document.createElement("div"),e.innerHTML="",t.className="about",e.append(t),n=t,a=document.createElement("section"),c=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),d=document.createElement("h1"),s=document.createElement("p"),M=document.createElement("p"),u=document.createElement("p"),a.setAttribute("id","our-story"),c.className="about-left",o.className="about-right",r.className="section-content",d.textContent="Our Story",s.textContent='Modern Restaurant aim is to celebrate people, places and "la joie de vivre". Located in the heart of San Francisco, Modern Restaurant brings a vibrant glamour to the dining scene. Striking views and elegant interiors meet warm and assured service.',M.textContent="Taking inspiration from modern world cuisines, Head Chef Moderna's menu is fresh, seasonal and produce-driven; sourcing the finest local ingredients and letting them speak for themselves.",u.textContent="Modern Restaurant continues to forge its way as an industry leader, by partnering with local Farms, we are afforded the rare opportunity to help shape the selection of those crops and are ever-grateful for their impact and influence on the restaurants.",n.append(a),a.append(c),a.append(o),o.append(r),r.append(d),r.append(s),r.append(M),r.append(u),function(e){var t=e,n=document.createElement("section"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),o=document.createElement("h2"),r=document.createElement("p"),d=document.createElement("p"),s=document.createElement("p");n.setAttribute("id","the-team"),a.className="team-left",i.className="team-right",c.className="section-content",o.textContent="Meet the Team",r.textContent="Our team is a carefully curated ensemble of culinary artisans, each bringing their unique expertise and dedication to the table.",d.textContent="Every member of our team shares a common goal: to create an extraordinary dining experience that lingers in your memory. We are united by our love for the art of fine dining and our commitment to maintaining the highest standards in everything we do. We believe that our team's passion, skill, and dedication are the true ingredients of our success.",s.textContent="Our front-of-house team is committed to providing impeccable service that matches the quality of our cuisine. From the moment you step through our doors, our service team ensures a seamless, memorable experience, attending to every detail with grace and professionalism.",t.append(n),n.append(a),n.append(i),a.append(c),c.append(o),c.append(r),c.append(d),c.append(s)}(t),function(e){var t=e,n=document.createElement("section"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("h1"),o=document.createElement("h3"),r=document.createElement("h3"),d=document.createElement("div"),s=document.createElement("div"),M=document.createElement("div"),u=document.createElement("p"),m=document.createElement("p"),l=document.createElement("p"),g=document.createElement("p"),p=document.createElement("p"),I=document.createElement("p"),D=document.createElement("p"),N=document.createElement("p"),E=document.createElement("br");n.setAttribute("id","info"),a.className="details",i.className="story",c.className="title",d.className="story-text",s.className="about-location",M.className="about-hours",c.textContent="Modern Restaurant",o.textContent="Location",r.textContent="Hours",u.textContent="678 Market Street",m.textContent="San Francisco, CA",l.textContent="415-678-6435",g.textContent="Monday to Friday",g.className="days",p.textContent="5 pm to 10 pm",p.className="hours",I.textContent="Saturday and Sunday",I.className="days",D.textContent="11 am to 2 pm",D.className="hours",N.textContent="5 pm to 11 pm",N.className="hours",t.append(n),n.append(a),a.append(i),i.append(c),i.append(d),d.append(s),s.append(o),s.append(u),s.append(m),s.append(l),d.append(M),M.append(r),M.append(g),M.append(p),M.append(I),M.append(D),M.append(E),E.insertAdjacentText("afterend","and"),M.append(N)}(t),window.scrollTo(0,0),i()})),I.addEventListener("click",(function(e){return N(e)})),l.addEventListener("click",(function(e){return N(e)})),g.addEventListener("click",(function(e){return N(e)})),p.addEventListener("click",(function(e){return N(e)})),c(),i()})();