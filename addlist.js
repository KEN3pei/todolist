const addlist = document.getElementById("addList");

addlist.onmouseover = () => {
    const style = addlist.style;
    style.backgroundColor = 'black';
    style.color = 'white';
    style.cursor = 'pointer';
}

addlist.onmouseout = () => {
    const style = addlist.style;
    style.backgroundColor = '#e8e8e8';
    style.color = 'black';
}
addlist.onclick = () => {
    const lstyle = listform.style;
    lstyle.display = 'block';
}

$(document).on('click', '.addcard', e => {
    const formStyle = e.target.nextElementSibling.style;
    formStyle.display = "block";
    addCardstyle = e.target.style;
    addCardstyle.display = "none";
});
$(document).on('mouseover', '.addcard', e => {
    const cardStyle = e.target.style;
    cardStyle.backgroundColor = "#adadad";
});
$(document).on('mouseout', '.addcard', e => {
    const cardStyle = e.target.style;
    cardStyle.backgroundColor = "#e8e8e8";
});
$(document).on('mouseover', '.task', e => {
    const cardStyle = e.target.style;
    cardStyle.backgroundColor = "#adadad";
});
$(document).on('mouseout', '.task', e => {
    const cardStyle = e.target.style;
    cardStyle.backgroundColor = "#fff";
});