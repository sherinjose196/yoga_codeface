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
                <th>Author</th>
                <th>Title</th>
                <th>Url</th>
                <th>Text</th>
                <th>Points</th>
                <th>Action</th>
               
            </tr>
        </thead>
        <tbody>
            <tr>
                @foreach($items as $item)
                <tr>
                 
                  
                  <td>{{$item->author}}</td>
                  <td>{{$item->title}} </td>
                  <td>{{$item->url}} </td>
                  <td>{{$item->text}} </td>
                  <td>{{$item->points}} </td>
                  <td>
				<a class="btnsedit" data-tooltip="Edit" data-id="{{$item->id}}" href="{{URL::route('ViewItem',$item->id)}}" title="Edit"><i class=" edi pad fa fa-edit"></i>View</a>
                  
                               
             </td>
                </tr>
				
               @endforeach
            </tr>
         
        </tbody>
        {{$items->links()}}
    </table>
@endsection
@section('footer')

<script>
	$(document).ready(function() {
    $('#example').DataTable();
} );
	</script>
@endsection