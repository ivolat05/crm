//= components/datepicker.min.js
//= components/jquery.timepicker.min.js
//= components/jquery.mCustomScrollbar.js


const meetEmpBtn = document.querySelectorAll('.meet__emp-btn');

meetEmpBtn.forEach((item) => {
    const meetEmp = document.querySelector('.meet__emp');
    const meetChangeEmployee = document.querySelector('.meet__change-employee');
    item.addEventListener('click', function () {

        meetEmp.classList.toggle('meet--active');
        meetChangeEmployee.classList.toggle('meet--active')


    });
});



//scroll
$(window).on("load", function () {
    $(".table__wrapp").mCustomScrollbar({
        axis: "x"
    });
});


//date
$('.filter__menu-input').datepicker();
$('.meet-date').datepicker();

//date
$('.meet-time').timepicker({
    timeFormat: 'H:mm',
    interval: 1,
    minTime: '0',
    maxTime: '23:59',
    startTime: '00:00',
});

// nav
const logoWrapp = document.querySelector('.logo__wrapp');
const burgerWrapp = document.querySelector('.burger__wrapp');
const navListInner = document.querySelectorAll('.nav__list-inner');
const headerActive = document.querySelector('.header-active');
const navClose = document.querySelector('.nav-close');
navClose.onclick = () => {
    logoWrapp.classList.remove('deactive');
    document.querySelector('body').classList.remove('stop');
}


window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
        burgerWrapp.onclick = () => {
            logoWrapp.classList.toggle('deactive');

            for (let i = 0; i < navListInner.length; i++) {
                navListInner[i].classList.toggle('nav-deactive');
            }
            headerActive.classList.toggle('header-deactive');
        }

    } else {
        burgerWrapp.onclick = () => {
            logoWrapp.classList.toggle('deactive');
            document.querySelector('body').classList.add('stop');
        }
    }
});


// open chat 
const message = document.querySelectorAll('.message');
const chat = document.querySelector('.chat-fon');
const chatNotific = document.querySelector('.chat-notific');
const chatNotificClose = document.querySelector('.chat-notific-close');
const chatClose = document.querySelector('.chat-close');
const notitfic = document.querySelectorAll('.allert');
chatNotificClose.onclick = () => {
    chatNotific.classList.remove('chat-fon-active');
    document.querySelector('body').classList.remove('stop')

}

chatClose.onclick = () => {
    chat.classList.remove('chat-fon-active');
    document.querySelector('body').classList.remove('stop')

}


message.forEach((item) => {
    item.addEventListener('click', function () {
        chat.classList.add('chat-fon-active');
        chatNotific.classList.remove('chat-fon-active');
        document.querySelector('body').classList.add('stop')
    });
});

notitfic.forEach((item) => {
    item.addEventListener('click', function () {
        chatNotific.classList.add('chat-fon-active');
        chat.classList.remove('chat-fon-active');
        document.querySelector('body').classList.add('stop')
    });
});

//table-row background-color
let tableCheckBox = document.querySelectorAll('.table__checkbox');
let tableRow = document.querySelectorAll('.table__row');

tableCheckBox.forEach((item) => {
    item.addEventListener('click', function () {
        for (let i = 0; i < tableCheckBox.length; i++) {
            if (tableCheckBox[i].checked == true) {
                tableRow[i].classList.add('table__row-checked');
            } else {
                tableRow[i].classList.remove('table__row-checked')
            }
        }

    });
});

//meet
let tableCorrect = document.querySelectorAll('.table__correct');
let meet = document.querySelector('.meet');
const meetClose = document.querySelector('.meet-close');


tableCorrect.forEach((item) => {
    item.addEventListener('click', function () {
        meet.classList.add('meet-active');
        document.querySelector('body').classList.add('stop');
    });
});

meetClose.onclick = () => {
    meet.classList.remove('meet-active');
    document.querySelector('body').classList.remove('stop');
};

// tabs

const tabsBtn = document.querySelectorAll('.directore__inner-list');
const tabsItem = document.querySelectorAll('.directory__tab');

tabsBtn.forEach((item) => {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove('direct__list-active')
        })

        tabsItem.forEach(function (item) {
            item.classList.remove('directory__tab--active')
        })
        currentBtn.classList.add('direct__list-active');
        currentTab.classList.add('directory__tab--active');
    });
});
//filter

const blockBurger = document.querySelector('.block__burger');
const filterMenu = document.querySelector('.filter__menu');

blockBurger.onclick = () => {
    filterMenu.classList.toggle('filter__menu-active')
}

// popup

const blockBtn = document.querySelector('.block__btn');
const fon = document.querySelector('.fon');
const closes = document.querySelector('.close')


blockBtn.onclick = () => {
    fon.classList.add('popup-active');
    document.querySelector('body').classList.add('stop');
}

closes.onclick = () => {
    fon.classList.remove('popup-active');
    document.querySelector('body').classList.remove('stop');
}





