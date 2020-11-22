@extends('layouts.app')

 
@section('content')
<div class="col-md-12">
          <a href="{{ URL::route('Items') }}"><span class="btn btn-sm btn-info m-b-1 style="float:right;><i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
</span></a>
<div class="about-section">
  <h1>{{$item->title}}</h1>
  <p>{{$item->author}}</p>
  <p>{{$item->text}}</p>
</div>

<div class="row">
  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>{{$item->author}}</h2>
        <p class="title"></p>
        <p>Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.</p>
        <p></p>
        <p><button class="button">ReadMore</button></p>
      </div>
    </div>
  </div>

  
  </div>

@endsection
@section('footer')


@endsection