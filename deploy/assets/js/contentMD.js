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
