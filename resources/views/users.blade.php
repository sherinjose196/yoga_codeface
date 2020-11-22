@extends('layouts.app')

 <style>
table, th, td {
  border: 1px solid black;
}
</style>
@section('content')
<table id="example" class="cell-border" style="width:80%;margin-left: 150px" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Item Title</th>
                <th>Action</th>
               
            </tr>
        </thead>
        <tbody>
            <tr>
                @foreach($users as $user)
                <tr>
                 
                  
                  <td>{{$user->name}}</td>
                  <td>{{$user->email}} </td>
                  <td>{{$user->title}} </td>
                  
                  <td>
				<a class="btnsedit" data-tooltip="Edit" data-id="{{$user->id}}" href="{{URL::route('EditUser',$user->id)}}" title="Edit"><i class=" edi pad fa fa-edit"></i>Edit</a>
          <form method="POST" action="{{ route('deleteUser') }}">
            @csrf
            <input type="hidden" name="item_id" value="{{$user->id}}">
             <button type="submit" class="btn btn-primary">Delete</button>
            
          </form>
   
                               
             </td>
                </tr>
				
               @endforeach
            </tr>
         
        </tbody>
        
    </table>
    <div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
               Are you sure?.
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
               <form id="deleteModalForm" method="POST" action="{{ route('deleteUser') }}">
                   @csrf
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>

                <button type="submit" id="fff" class="btn btn-primary">
                                    {{ __('Delete') }}
                                </button>
                <form>
            </div>
        </div>
    </div>
</div>
@endsection
@section('footer')

<script>
	$(document).ready(function() {

    $('#example').DataTable();
} );
  
	</script>
@endsection