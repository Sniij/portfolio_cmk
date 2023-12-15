$(document).ready(function() {

    var markdownFiles = ["content/introduce.md","content/dowajoyak.md", "content/portfolio.md", "content/petching.md"];
    var targetElements = ["#mark-introduce","#modal-dowajoyak", "#modal-portfolio", "#modal-petching"];

    for (var i = 0; i < markdownFiles.length; i++) {
        $.ajax({
            url: markdownFiles[i],
            dataType: "text",
            success: (function(i) {
                return function(data) {
                    var htmlContent = marked(data);
                    $(targetElements[i]).html(htmlContent);
                }
            })(i)
        });
    }   
});


$(document).ready(function() {
    document.getElementsByClassName("bg-video")[0].playbackRate = 0.8;
});


$(document).ready(function() {
    document.addEventListener("DOMContentLoaded", function() {
        if (window.location.hash === "#modal_portfolio") {
          const modalPortfolio = document.querySelector("#modal_portfolio");
          const bootstrapModal = new bootstrap.Modal(modalPortfolio);
          bootstrapModal.show();
        } else if(window.location.hash === "#modal_dowajoyak"){
          const modalDowajoyak = document.querySelector("#modal_dowajoyak");
          const bootstrapModal = new bootstrap.Modal(modalDowajoyak);
          bootstrapModal.show();
        }	else if(window.location.hash === "#modal_petching"){
          const modalPetching = document.querySelector("#modal_petching");
          const bootstrapModal = new bootstrap.Modal(modalPetching);
          bootstrapModal.show();
        }
      });
      document.getElementById("modalPortfolio").addEventListener("click", function(){
          window.location.hash = "#modal_portfolio";
      });
      document.getElementById("modalDowajoyak").addEventListener("click", function(){
          window.location.hash = "#modal_dowajoyak";
      });
      document.getElementById("modalPetching").addEventListener("click", function(){
          window.location.hash = "#modal_petching";
      });
      
      document.getElementById("modalDowajoyakClose").addEventListener("click", function () {
          history.replaceState(null,null,'generic.html');
          bootstrapModal.showdown();
      });
      document.getElementById("modalPortfolioClose").addEventListener("click", function () {
          history.replaceState(null,null,'generic.html');
          bootstrapModal.showdown();
      });
      document.getElementById("modalPetchingClose").addEventListener("click", function () {
          history.replaceState(null,null,'generic.html');
          bootstrapModal.showdown();
      });
});