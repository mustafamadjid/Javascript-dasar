let formElement = (document.querySelector("form[name=commentForm").onsubmit =
  function (event) {
    const commenList = document.getElementById("commentList");
    const comment = document.getElementById("comment").value;
    const from = document.getElementById("from").value;

    const commentItem = document.createElement("p");
    commentItem.textContent = `${comment} - ${from}`;
    commenList.appendChild(commentItem);

    event.preventDefault();

    document.querySelector("form[name=commentForm]").reset();
    document.getElementById("submitBtn").disabled = true;
  });
