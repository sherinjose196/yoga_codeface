@extends('layouts.app')
<style>
	input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
@section('content')
		<div class="container">
		  <form method="POST" action="{{ route('updateUser') }}">
		                        @csrf

		    <label for="fname">Title</label>
		    <input type="text" id="fname" name="title" value="{{$user->title}}" placeholder="Your name..">

		    <label for="lname">Author</label>
		    <input type="text" id="lname" name="author" value="{{$user->author}}" placeholder="Your last name..">

		    <label for="lname">Url</label>
		    <input type="text" id="lname" name="url" value="{{$user->url}}" placeholder="Your last name..">

		    <label for="subject">Text</label>
		     <input type="hidden" name="item_id" value="{{$user->id}}">
		    <textarea id="subject" name="text" placeholder="Write something.." style="height:200px">{{$user->text}}</textarea>

		    <input type="submit" value="Submit">

		  </form>
		</div>
@endsection