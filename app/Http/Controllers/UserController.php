<?php

namespace App\Http\Controllers;

use Request;
use App\Item;
use Auth;
use Validator;
use Illuminate\Support\Facades\Redirect;
class UserController extends Controller
{

	public function updateuser(Request $request){

                $update = Item::find(Request::input('item_id'));
               
                $update->title =Request::input('title') ;
                $update->author =Request::input('author') ;
                $update->url =Request::input('url') ;
                $update->text =Request::input('text') ;

                $update->save() ;

                return Redirect::route('Items');
	}


     public function deleteUser(Request $request){

          $delete = Item::where('id', Request::input('item_id'))->delete();

           return Redirect::route('Users');
     }
}
