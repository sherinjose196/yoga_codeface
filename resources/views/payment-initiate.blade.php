<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Payment</title>
        
        <!-- Add stylesheet -->
        <link href="{{asset('css/style.css')}}" rel="stylesheet">
        <style>
        body{
    color: #2f2d2d;
    font-family: 'Open Sans', sans-serif !important;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: .25px;
    overflow: hidden;
    overflow-y: auto;
    -webkit-font-smoothing: antialiased;
    background-color: #fafbfe}
*, *:after, *:before {
    outline: none !important;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box }
.clear-fix,.clear-fix:before,.clear-fix:after,.container:before,.container:after,.row:before,.row:after,.centered:before,.centered:after{
    content: "";
    display: table;
    clear: both }
html,body,div,span,h1,h2,h3,h4,h5,h6,p,a,img,b,ul,li,form,label,nav,section,menu{border: 0;margin: 0;padding: 0;vertical-align: baseline}
article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display: block}
a{cursor: pointer;text-decoration: none}
.container{
    width: 100%;
    max-width: 1090px;
    margin: 0 auto;
    float: none !important}
/* Input */

input:focus{border-color: #2000cc}
label{
    color: #2f2d2d;
    cursor: pointer;
    max-width: 100%;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5}
form label{
    float: left;
    font-size: 13px;
    text-align: left;
    margin-bottom: 8px}

/* Button */
button{
    display: inline-block;
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    padding: 7.5px 15px;
    vertical-align: middle;
    text-align: center;
    background-color: #7512e7;
    border: none;
    border-radius: 4px;
    cursor: pointer}

/* Body */
.row,.login-card,.login-card-body{
    width: 100%;
    float: left}


/* Login */
.login-container{
    max-width: 475px;
    text-align: center;
    padding: 70px 15px 30px}
.login-card{
    overflow: hidden;
    margin-bottom: 30px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15)}
.login-card-body{padding: 35px}
.login-title-container{width: 75%}
        </style>
    </head>
    <body>
        <div class="container login-container">
            <div class="login-card">
                <div class="login-card-body">
                    <form action="{{url('/payment-initiate-request')}}" method="POST">
                        <div class="row">
                            <input type="hidden" value="{{csrf_token()}}" name="_token" />
                            <label for="name">Name</label> : 
                            <input type="text" class="form-control" id="name"  name="name">
                        </div></br>
                        <div class="row">
                            <label for="email">Email</label> : 
                            <input type="text" class="form-control" id="email" name="email">
                        </div></br>
                        <div class="row">
                            <label for="contactNumber">Contact Number</label> : 
                            <input type="text" class="form-control" id="contactNumber" name="contactNumber">
                        </div></br>
                        <div class="row">
                            <label for="address">Address</label> : 
                            <input type="text" class="form-control" id="address" name="address">
                        </div></br>
                        <div class="row">
                            <label for="amount">Amount</label> : 
                            <input type="text" class="form-control" id="amount" name="amount">
                        </div></br>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>                    
                </div>
            </div>
        </div>
    </body>
</html>