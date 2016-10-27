Request composer:
-----------------

### INPUT: 
fn=Krak%C3%B3w&fc=50.06465%7C19.94498&fcc=PL&tn=opole&tc=50.675107%7C17.921298&tcc=PL&db=23%2F10%2F2016


choose static inputs:

* fn:kfn:krakow
* fc:50.06465|19.94498
* fcc:PL  # MARKED AS STATIC
* tn:opole
* tc:50.675107|17.921298
* tcc:PL  # MARKED AS STATIC
* db:23/10/2016

(vaules of non-static parameters will be replaces with '<<+req_param_{name_of_the_parameter}+>>')

### OUTPUT:
 fn=<<+req_param_fn+>>&fc=<<+req_param_fc+>>&fcc=PL&tn=<<+req_param_fcc+>>&tc=<<+req_param_tc+>>&tcc=PL&db=<<+req_param_tcc+>>

variables names: (table)
* req_param_fn
* req_param_fc
* req_param_fcc
* req_param_tc
* req_param_tcc


Compare Parameters:
-----------------------

### INPUT_1: (source)
fn=Krak%C3%B3w&fc=50.06465%7C19.94498&fcc=PL&tn=opole&tc=50.675107%7C17.921298&tcc=PL&db=23%2F10%2F2016

### INPUT_2_: (kapow)
fn=Krak%C3%B3w&fc=50.06465%7C19.98&fcc=PL&tn=opole&tc=50.67%7C17.921298&db=23%2F10%2F2016

### OUTPUT:

Missing parametes:

* tcc=PL

Different values in parameters:

* source : fc=50.06465%7C19.94498 ; kapow: fc=50.06465%7C19.98 (difference should be highlighted ) table