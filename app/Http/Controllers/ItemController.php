<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;
use Auth;
use Validator;
use Illuminate\Support\Facades\Redirect;
class ItemController extends Controller
{
    public function postManage(Request $request){

        $itemData = Validator::make($request->all(),[
            'author' => 'required',
           
            'text' => 'required',   
        ]);

     if($itemData->fails())
      {
        return response(['status'=>false,'message'=>$itemData->messages()->first()],200);
      }

      $item =  Item::create([
            'author' => $request->input('author'),
            'title' => $request->input('title'),
            'url' => $request->input('url'),
            'text' =>$request->input('text'),
            'points' =>$request->input('points'),
            'user_id' =>Auth::user()->id,
            'parent_id' =>$request->input('parent'),
        ]);

      return Redirect::route('Items');
    }
}
