const btnSortition = document.getElementById('btnSortition');
const onClickBtnSortition = () => {
    let list = [];
    const checkboxs = document.getElementsByTagName('input[type=checkbox]');
    checkboxs.forEach(element => {
        
    });
    $('input[type=checkbox]').each(() => {
        if ($(this).is(':checked')) {
            const name = $(this).parent().parent().find('td').eq(1).text();
            const position = $(this).parent().parent().find('td').eq(2).text();
            const importance = $(this).parent().parent().find('td').eq(3).text();
            const player = {
                name: name,
                position: position,
                importance: importance
            }
            list.push(player);
        }
    });
};
btnSortition.addEventListener('click', onClickBtnSortition);


const checkboxs = document.getElementsByTagName('input[type=checkbox]');
checkboxs.addEventListener('change', () => {
    let check = 0;
    checkboxs.forEach(element => {
        if (element.checked) check++;
    });

    const countSelected = document.getElementById('countSelected');
    countSelected.innerHTML = countSelected;
});
