// api.unsplhttpsash.com/search/photos/?query=${value}&per_page=20&client_id=YOUR_ACCESS_KEY
 const API = "OMvqIlGG65FKqIgtNviV-mDnBVgWHPQjZLwiD3Ov0io";


import { navbar } from "../components/navbar.js";
let nav = document.getElementById('navbar')
nav.innerHTML = navbar();
import {searchImages, append} from "./fetch.js"

let search = (e) =>{
    
    if(e.key=== "Enter"){
        
        let value = document.getElementById('query').value;
        searchImages(API, value).then((data) =>{
            console.log(data)
             let container = document.getElementById('container')
             container.innerHTML= null;
            append(data.results, container)
            // let value = document.getElementById('query').value="";

        });
    }
};
document.getElementById('query').addEventListener("keydown", search)


let categories = document.getElementById("categories").children;


function cSearch(){
    // console.log(this.id);
    searchImages(API, this.id).then((data) =>{
         console.log(data)
         let container = document.getElementById('container')
         container.innerHTML= null;
        append(data.results, container)
    });

}
for(let el of categories){
    el.addEventListener('click', cSearch)
}





