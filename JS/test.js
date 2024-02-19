// var x = 5;
// function handle_paragraph_onclick(element_id, value) {
//     console.log(value);
//     is_booked = boolian;

//     console.log(is_booked);


//     if( is_booked == 'false')
//     {
//         console.log(get_element_inner_text(element_id));
//         make_background_green(element_id);
//         is_booked = 'true';
//     }

    
//     console.log(get_element_inner_text(element_id));
//     make_background_green(element_id);

//     var element = get_element_function(element_id);
//     element.removeAttribute("onclick");

// }

var initial_seat=0;
var available_seat=40;
// function count_seat(x){
//     var totalseat =x+1;
// }


function handle_onclick_on_seat(element_id){

    if(initial_seat < 4){
        console.log(get_element_function(element_id));
    make_background_green(element_id);
    var element = get_element_function(element_id);
    element.removeAttribute("onclick");

    initial_seat++;
    available_seat--;
    console.log(initial_seat, available_seat);
    }
    // console.log(get_element_function(element_id));
    // make_background_green(element_id);
    // var element = get_element_function(element_id);
    // element.removeAttribute("onclick");
    // seat=seat+1;
    // return seat;
    // initial_seat++;
    // console.log(initial_seat);
}

// console.log(initial_seat);


function get_element_function(element_id) {
    const get_element = document.getElementById(element_id);
    return get_element;
}

function get_element_inner_text(element_id) {
    const get_element = get_element_function(element_id);
    const element_text = get_element.innerText;
    return element_text;
}


function make_background_green(element_id) {
    const get_element = get_element_function(element_id);
    get_element.style.backgroundColor = 'rgb(23, 227, 43)';
}


get_number('selected_seats');
function get_number(element_id){
    let element_innertext =get_element_inner_text(element_id);
    console.log(element_innertext);
    console.log(typeof element_innertext)
    let number = parseInt(element_innertext);
    console.log(number);
    console.log(typeof number);
    return number;
}
set_innertext('selected_seats',5)


function set_innertext(element_id,value){
    let get_element = get_element_function(element_id);
    get_element.innerText=value;
}

get_number('selected_seats');

function update_value (element_id, value){

}
remove_class('seat_1');
function remove_class(element_id){
    let get_element = get_element_function(element_id);
    get_element.classList.remove('hidden');
}

function get_input_value(element_id){
    let input_value = document.getElementById(element_id).value;
    // console.log(input_value);
    console.log(input_value);
    // return input_value;
}

// get_input_value('cupon_submit_button');

// let sit_prefix_string = "ABCDEFGHIJ"
// let sit_prefix_array = sit_prefix_string.split('');
// console.log(sit_prefix_array);

// for (let prifix = 0; prifix < 5; prifix++) {
//     const a = 'a'+ prifix;
//     console.log(a);
// }