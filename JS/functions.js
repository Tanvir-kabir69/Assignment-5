var selected_seat = 0;
var available_seat = 40;
var total_price = 0;
var input_cupon_code;

var first_cupon = get_element_inner_text('first_cupon_code');
var second_cupon = get_element_inner_text('second_cupon_code');
console.log(typeof first_cupon);
console.log(typeof second_cupon);

var mobile_number;

document.getElementById('cupon_submit_button').disabled = true;
document.getElementById('confirm_button').disabled = true;

function handle_onclick_on_seat(element_id) {


    if (selected_seat < 4) {
        // console.log(get_element_function(element_id));
        make_background_green(element_id);

        selected_seat++;
        available_seat--;
        total_price = total_price + 550;

        set_innertext('available_seats', available_seat);

        if (selected_seat == 1) {

            add_class('seat_selecting_warning');

            set_innertext('selected_seats', selected_seat);
            set_innertext('seat_1_name', element_id);
            remove_class('seat_1');
            set_innertext('total_price', total_price);

            document.getElementById('mobile_submit_button').addEventListener('click', function (selected_seat) {
                mobile_number = document.getElementById('mobile_submit_area').value;
                if ((selected_seat != 0) && (mobile_number != '')) {
                    document.getElementById('confirm_button').disabled = false;
                    make_background_green('confirm_button');
                }
            })


        }
        if (selected_seat == 2) {
            set_innertext('selected_seats', selected_seat);
            set_innertext('seat_2_name', element_id);
            remove_class('seat_2');
            set_innertext('total_price', total_price);
        }
        if (selected_seat == 3) {
            set_innertext('selected_seats', selected_seat);
            set_innertext('seat_3_name', element_id);
            remove_class('seat_3');
            set_innertext('total_price', total_price);
        }
        if (selected_seat == 4) {
            set_innertext('selected_seats', selected_seat);
            set_innertext('seat_4_name', element_id);
            remove_class('seat_4');
            set_innertext('total_price', total_price);

            document.getElementById('cupon_submit_button').disabled = false;
            make_background_green('cupon_submit_button');
            
        }


        var element = get_element_function(element_id);
        element.removeAttribute("onclick");


    }

    else{
        remove_class('seat_excidding_warning');
    }

}



function handle_cupon_code_onclick(element_id) {
    input_cupon_code = document.getElementById(element_id).value;
    console.log(typeof input_cupon_code);

    console.log(input_cupon_code);
    console.log(first_cupon);
    console.log(second_cupon);
    console.log(total_price);

    var discount;
    var grand_total;

    if (input_cupon_code === first_cupon) {
        discount = total_price * 0.15;
        grand_total = total_price - discount;

        console.log(discount);
        console.log(grand_total);

        add_class('cupon_submit_div');

        set_innertext('discount_price', discount);
        remove_class('discount_div');

        set_innertext('grand_total', grand_total);
        remove_class('grand_total_div');

       
    }

    if (input_cupon_code === second_cupon) {
        discount = total_price * 0.2;
        grand_total = total_price - discount;

        console.log(discount);
        console.log(grand_total);

        add_class('cupon_submit_div');

        set_innertext('discount_price', discount);
        remove_class('discount_div');

        set_innertext('grand_total', grand_total);
        remove_class('grand_total_div');
    }

    // else{
    //     remove_class('invalid_cupon_warning');
    // }


}


function handle_confirmation_onclick(){
    remove_class('confirmation_page');
    // let tag = document.getElementsByTagName('header');
    // let tag =document.getElementById('header_tag');
    // add_class(tag);
    // tag.classList.add('hidden');
    // console.log(tag);
}

function handle_submission_onclick(){
    add_class('confirmation_page');
}




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

function get_number(element_id) {
    let element_innertext = get_element_inner_text(element_id);
    let number = parseInt(element_innertext);
    return number;
}

function set_innertext(element_id, value) {
    let get_element = get_element_function(element_id);
    get_element.innerText = value;
}

function remove_class(element_id) {
    let get_element = get_element_function(element_id);
    get_element.classList.remove('hidden');
}

function add_class(element_id) {
    let get_element = get_element_function(element_id);
    get_element.classList.add('hidden');
}