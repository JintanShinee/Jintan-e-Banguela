/*


*/

console.log( document);

const botaoTrailer = document.querySelector( ".botao-trailer");

const botãoFecharModal= document.querySelector(".fechar-modal");

const video = document.getElementById("video");

const modal = document.querySelector(".modal");

const linkDoVideo = video.src;

console.log(document.querySelector( ".botao-trailer"));

function alternarModal(){
    modal.classList.toggle("aberto")
}


botaoTrailer.addEventListener("click", () => {
    alternarModal();
    modal.classList.toggle("aberto");
    video.setAttribute("src", linkDoVideo)
});


botãoFecharModal.addEventListener("click", ()=> {
modal.classList.toggle("aberto");
video.setAttribute("src","");
});


