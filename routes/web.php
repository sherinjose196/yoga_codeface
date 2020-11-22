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



Route::get('/home', 'HomeController@index')->name('home');
//Route::get('/add_item', 'HomeController@addItem')->name('add_items');
Route::get('add_item', ['as' => 'AddItem', 'uses' => 'HomeController@getView']);
Route::get('items', ['as' => 'Items', 'uses' => 'HomeController@getView']);

Route::post('post_data', ['as' => 'postManage', 'uses' => 'ItemController@postManage']);
Route::get('view_item/{token?}', ['as' => 'ViewItem', 'uses' => 'HomeController@getView']);
Route::get('users', ['as' => 'Users', 'uses' => 'HomeController@getView']);
Route::get('edit_user/{token?}', ['as' => 'EditUser', 'uses' => 'HomeController@getView']);
Route::post('update_user', ['as' => 'updateUser', 'uses' => 'UserController@updateuser']);

Route::post('delete_user', ['as' => 'deleteUser', 'uses' => 'UserController@deleteUser']);

