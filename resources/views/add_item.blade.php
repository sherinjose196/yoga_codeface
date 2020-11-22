@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Add Item') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('postManage') }}">
                        @csrf
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Author') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="author" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                
                                   
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Title') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="text" class="form-control"name="title" value="{{ old('email') }}">

                               
                                    
                                
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('url') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="text" class="form-control" name="url" >

                               
                                    
                                
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Text') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="text" class="form-control" name="text">
                            </div>
                        </div>
                      <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('points') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="text" class="form-control" name="points" >
                            </div>
                        </div>
                        @if($parents!=null)
                      <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Select Parent') }}</label>
                            
                            <div class="col-md-6">
                                <select name="parent" id="subs_for">
                                    <option value="">Select</option>
                                 @foreach($parents as $parent)
                                  <option value="{{$parent->id}}">{{$parent->author}}</option>
                                 @endforeach
                                
                                </select>
                            </div>
                           
                        </div>
                         @endif
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" id="fff" class="btn btn-primary">
                                    {{ __('Add Item') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

