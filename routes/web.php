<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::get('register', 'HomeController@register')->name('register');

Auth::routes(['verify' => true]);
Route::get('/', function () {
    return view('welcome');
    
});
Route::group(['middleware' => 'auth'], function () {

    Route::get('/', 'HomeController@index');
    Route::get('home', 'HomeController@index');
    Route::get('logout', 'Auth\LoginController@logout');

    
    Route::get('payment-initiate', ['as' => 'Payment', 'uses' => 'RazorpayController@getView']);

    // for Initiate the order
    Route::post('/payment-initiate-request','RazorpayController@Initiate');
    
    // for Payment RazorpayController
    Route::post('/payment-complete','RazorpayController@Complete');
});






