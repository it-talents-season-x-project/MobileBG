$(function() {
let $flags = $('#flags');
let flagsList = JSON.parse("[[\"0~GPS система за проследяване\",\"0~Автоматичен контрол на стабилността\",\"0~Адаптивни предни светлини\",\"0~Антиблокираща система\",\"0~Въздушни възглавници - Задни\",\"0~Въздушни възглавници - Предни\",\"0~Въздушни възглавници - Странични\",\"0~Ел. разпределяне на спирачното усилие\",\"0~Електронна програма за стабилизиране\",\"0~Контрол на налягането на гумите\",\"0~Парктроник\",\"0~Система ISOFIX\",\"0~Система за динамична устойчивост\",\"0~Система за защита от пробуксуване\",\"0~Система за изсушаване на накладките\",\"0~Система за контрол на дистанцията\",\"0~Система за контрол на спускането\",\"0~Система за подпомагане на спирането\"],[\"0~Auto Start Stop function\",\"0~Bluetooth \\\\ handsfree система\",\"0~DVD, TV\",\"0~Steptronic, Tiptronic\",\"0~USB, audio\\\\video, IN\\\\AUX изводи\",\"0~Адаптивно въздушно окачване\",\"0~Безключово палене \",\"0~Блокаж на диференциала\",\"0~Бордкомпютър\",\"0~Бързи \\\\ бавни скорости\",\"0~Датчик за светлина\",\"0~Ел. Огледала\",\"0~Ел. Стъкла\",\"0~Ел. регулиране на окачването\",\"0~Ел. регулиране на седалките\",\"0~Ел. усилвател на волана\",\"0~Климатик\",\"0~Климатроник\",\"0~Мултифункционален волан\",\"0~Навигация\",\"0~Отопление на волана\",\"0~Печка\",\"0~Подгряване на предното стъкло\",\"0~Подгряване на седалките\",\"0~Регулиране на волана\",\"0~Сензор за дъжд\",\"0~Серво усилвател на волана\",\"0~Система за измиване на фаровете\",\"0~Система за контрол на скоростта (автопилот)\",\"0~Стерео уредба\",\"0~Филтър за твърди частици\",\"0~Хладилна жабка\"],[\"0~4x4\",\"0~7 места\",\"0~Buy back\",\"0~Бартер\",\"0~Газова уредба\",\"0~Дълга база\",\"0~Капариран\\\\Продаден\",\"0~Катастрофирал\",\"0~Къса база\",\"0~Лизинг\",\"0~Метанова уредба\",\"0~На части\",\"0~Напълно обслужен\",\"0~Нов внос\",\"0~С право на дан.к-т\",\"0~С регистрация\",\"0~Сервизна книжка\",\"0~Тунинг\",\"0~2(3) Врати\",\"0~4(5) Врати\",\"0~LED фарове\",\"0~Ксенонови фарове\",\"0~Лети джанти\",\"0~Металик\",\"0~Отопляеми чистачки\",\"0~Панорамен люк\",\"0~Рейлинг на покрива\",\"0~Ролбари\",\"0~Спойлери\",\"0~Теглич\",\"0~Халогенни фарове\",\"0~Шибедах\"],[\"0~OFFROAD пакет\",\"0~Аларма\",\"0~Брониран\",\"0~Имобилайзер\",\"0~Каско\",\"0~Лебедка\",\"0~Подсилени стъкла\",\"0~Централно заключване\",\"0~Велурен салон\",\"0~Десен волан\",\"0~Кожен салон\",\"0~TAXI\",\"0~За хора с увреждания\",\"0~Катафалка\",\"0~Линейка\",\"0~Учебен\",\"0~Хладилен\",\"0~Хомологация N1\"]]");

        for (let i = 0; i < flagsList.length; i++) {
            let $div = $('<div></div>');
            for (let j = 0; j < flagsList[i].length; j++) {
                let label = flagsList[i][j].replace('0~', '');
                // let $checkbox = $('<label><input type="checkbox" class="car-flag" value="\' + flagsList[i] + \'">' + flagsList[i].replace('0~', '') + '</label>');
                let $checkbox = $('<label><input type="checkbox" class="car-flag" value="' + label + '">' + label + '</label>');
                $div.append($checkbox);
            }
            $flags.append($div);
        }
    });
