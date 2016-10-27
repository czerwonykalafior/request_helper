var url_call = {
    base_url: '',
    parameters: {}
};

// url_call.parameters.param constructor
function Paramet(name, value, type) {
    this.name = name;
    this.value = value;
    this.type = type
}


// make a url_call object, parse inpit to : base_url, parametrs {name, value, type}
function parse_text(input_url_call) {
    //console.log(input_url_call);
    var split_url = input_url_call.split('?');
    url_call.base_url = split_url[0];
    var params = split_url[1];
    params = params.split('&');

    for (var i in params) {
        params[i] = params[i].split('=');
        url_call.parameters[params[i][0]] = new Paramet(params[i][0], params[i][1], 'static');
    }
}

//parse_text('https://www.google.pl/search?q=html+input+text+width&oq=html+input+text+&aqs=chrome.1.69i57j0l5.3890j0j9&client=ubuntu&sourceid=chrome&ie=UTF-8#q=jquery%20checked%20selector');



$(function () {
    $('#parse').click(function () {
        $('#base_url').empty();
        $('#parameters').empty();
        $('#submit').show();

        //console.log(url_call);
        var input_field = $('#input_url').val();
        parse_text(input_field);

        $('#base_url').text(url_call.base_url);

        for (var property in url_call.parameters) {
            $('#parameters').append('<p><input type="checkbox" name="'+url_call.parameters[property].name+'">'+url_call.parameters[property].name+' = '+url_call.parameters[property].value+'</input></p>');
        };
    });

    $('#submit').click(function () {

        //get checked parameters
        var selected = [];
        $('#parameters input:checked').each(function() {
            selected.push($(this).attr('name'));
        });


        for (var i in selected){

            url_call.parameters[selected[i]].value = '<<+req_param_' + url_call.parameters[selected[i]].name + '+>>';
            url_call.parameters[selected[i]].type = 'variable';
            console.log(url_call.parameters[selected[i]])
        }

        var join_params = []
        for (var property in url_call.parameters) {
            join_params.push(url_call.parameters[property].name + '=' + url_call.parameters[property].value);


        }
        join_params = join_params.join('&');
        console.log(join_params);

        var reunion_url = '>>' + url_call.base_url + '?' + join_params + '<<';

        $('#checked').text(reunion_url);
    });
    $('#btn3').click(function () {
        $('#test3').val("DOLLY");
    });
});
