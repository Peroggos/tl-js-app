const api = 'https://gist.githubusercontent.com/Peroggos/d848c006730dcf17e86f4d50a43849c1/raw/151ada436e1ca9741ae0907ef39e3ad898b48286/gistfile1.json'
document.querySelector('#pus').oninput = function(){
    let val = this.value.trim();
    let elas = document.querySelectorAll('.pus li')
    if (val != ''){
      elas.forEach(function(elem){
       if(elem.innerText.search(val) == -1) {
        elem.classList.add('hide')
       }
       else{
        elem.classList.remove('hide');
       }
      });
    }
}