
document.getElementById('search').addEventListener('click',function(){
    const input=document.getElementById('input').value;
    const api="https://api.lyrics.ovh/suggest/"+input
    fetch(api)
    .then(res=>res.json())
    .then(data=>showSearchItem(data))

})
function showSearchItem(data) {
    document.getElementById('contain').innerHTML='';

    for (let i = 0; i < 10; i++) {
        const element =data.data[i]
        // console.log(element);
        
        let divHTML = document.createElement('div');
        divHTML.innerHTML=`
                            <div class="search-result col-md-8 mx-auto py-4">
                                <div class="single-result row align-items-center my-3 p-3">
                                    <div class="col-md-9">
                                        <h3 class="lyrics-name" id="sname${i}">Purple Noon</h3>
                                        <p class="author lead">Album by <span id="title${i}">Washed Out</span></p>
                                    </div>
                                    <div class="col-md-3 text-md-right text-center">
                                    <button class="btn btn-success" onclick="lyrics1('${data.data[i].title}','${data.data[i].artist.name}')">Get Lyrics</button>
                                    </div>
                                </div>
                            </div>
                        `
        let contain=document.getElementById('contain');
        contain.appendChild(divHTML);
        
        const id='sname'+i;
        const tittle='title'+i;
        document.getElementById(id).innerText=element.title
        document.getElementById(tittle).innerText=element.artist.name
        
                
                
    }

}
function lyrics1(title,name) {
    let lyr=`https://api.lyrics.ovh/v1/+${name}/${title}`
    fetch(lyr)
    .then(res=>res.json())
    .then(_data=>function(_data){
        console.log(data.lyrics)
        let divHTML = document.createElement('div');
        divHTML.innerHTML=`
                            <h1><strong>${title}</strong></h1>
                            <br>
                            <p>
                            ${_data.lyrics}
                            </p>
                            `
        let contain=document.getElementById('lyrics');
        contain.appendChild(divHTML);

     })
}