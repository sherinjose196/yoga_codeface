<?php

namespace App\Http\Controllers;
use App\Item;
use Auth;
use App\User;
use Request;
use Validator;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    
   public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $data = Array();
          $data['user'] = User::where('id',Auth::user()->id)->first();

        return view('home')->with($data);;
    }
    public function getView($id = 0)
    {
        $view = '';
        
        $data = Array();

        switch(Request::segment(1)) 
        {

            case 'add_item':
              

              $data['parents'] = Item::select('author','id')->get();

                $view = 'add_item';
            break;

            case 'items':
            
            $data['items'] = Item::where('user_id',Auth::user()->id)->paginate(10);

            $view = 'items';
            break;

          case 'view_item':
            
            $data['item'] = Item::where('id',$id)->first();
           
            $view = 'item_view';
            break;

           case 'users':
            
            $data['users'] = User::join('items','users.id','=','items.user_id')->where('role','=','user')->paginate(15);

            $view = 'users';
            break;

            case 'edit_user':
            
            $data['user'] = User::join('items','users.id','=','items.user_id')->where('users.id',$id)->first();
           
            $view = 'edit_user';
            break;
        }

      return view($view)->with($data);
    }

}
