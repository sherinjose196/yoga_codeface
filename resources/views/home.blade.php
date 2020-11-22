@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    @if($user->role == 'admin')
<div class="col-md-12">
          <a href="{{ URL::route('Users') }}"><span class="btn btn-sm btn-info m-b-1 style="float:right;><i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Users
</span></a>


@else
<div class="col-md-12">
          <a href="{{ URL::route('AddItem') }}"><span class="btn btn-sm btn-info m-b-1 style="float:right;><i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Add Item
</span></a>
</br>
<div class="col-md-12">
          <a href="{{ URL::route('Items') }}"><span class="btn btn-sm btn-info m-b-1 new style="float:right;><i class="fa fa-arrow-circle-left" aria-hidden="true"></i>  Items
</span></a>
@endif
                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
