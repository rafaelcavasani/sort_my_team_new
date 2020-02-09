const onClickBtnSortition = () => {
    let list = [];
    positions = {
        "Goleiro": 0,
        "Zagueiro": 1,
        "Lateral": 2,
        "Meio Campo": 3,
        "Atacante": 4
    };
    const checkboxs = document.getElementsByClassName('checkbox');
    for (let i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].checked) {
            const item = checkboxs[i].parentElement.parentElement;
            const name = item.children[1].innerText;
            const position = item.children[2].innerText;
            const importance = item.children[3].innerText;
            const player = {
                name: name,
                position: positions[position],
                importance: importance
            }
            list.push(player);
        }
    }
    checkPlayersToSort(list);
}

const checkboxChanged = (element) => {
    let checked = 0;
    const checkboxs = document.getElementsByClassName('checkbox');
    for (let i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].checked) 
            checked++;
    }
    if (checked == 0) {
        const checkAll = document.getElementById('checkall');
        checkAll.checked = false;
    }

    const countSelected = document.getElementById('countSelected');
    countSelected.innerHTML = checked;
}

const checkAll = () => {
    const checkbox = document.getElementById('checkall');
    const checkboxs = document.getElementsByClassName('checkbox');
    for (let i = 0; i < checkboxs.length; i++) {
        checkboxs[i].checked = checkbox.checked;
    }
    const countSelected = document.getElementById('countSelected');
    const checkboxsCount = document.getElementsByClassName('checkbox').length;
    if (checkbox.checked) countSelected.innerHTML = checkboxsCount;
    else countSelected.innerHTML = '0';
}

function checkPlayersToSort(list) {
    list.sort((a, b) => {
        if (a.position > b.position) return 1;
        if (a.position < b.position) return -1;
        return 0;
    });
    if (list.length < 6) {
        alert('Você deve selecionar ao menos 6 jogadores para realizar o sorteio.');
        return false;
    }
    if (list.length % 2 !== 0) {
        alert('Você deve selecionar um número par de jogadores.');
        return false;
    }
    goalkeepers = list.filter((a) => a.position == 0);
    if (goalkeepers.length != 2) {
        alert('Você deve selecionar 2 goleiros para realizar o sorteio.');
        return false;
    }
    window.location = '/';
}

(function() {
    
    const btnSortition = document.getElementById('btnSortition');
    btnSortition.addEventListener('click', onClickBtnSortition);

    const checkboxs = document.getElementsByClassName('checkbox');
    for (let i = 0; i < checkboxs.length; i++) {
        checkboxs[i].addEventListener('change', checkboxChanged);
    }

    const checkall = document.getElementById('checkall');
    checkall.addEventListener('change', checkAll);

})();