// Script que contém uma função que ajuda a validar uma idade de usuário
function age(year_birthday, month_birthday, day_birthday) {
    var d = new Date,
        current_year = d.getFullYear(),
        current_month = d.getMonth() + 1,
        current_day = d.getDate(),

        year_birthday = +year_birthday,
        month_birthday = +month_birthday,
        day_birthday = +day_birthday,

        how_many_years = current_year - year_birthday;

    if (current_month < month_birthday || current_month == month_birthday && current_day < day_birthday) {
        how_many_years--;
    }

    return how_many_years < 0 ? 0 : how_many_years;
}



console.log(age(1980, 12, 11)); //  33

console.log(age(2011, 2, 15));  // 2

console.log(age(1993, 31, 5));  // 20


