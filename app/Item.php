<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'id ',
        'author',
        'title',
        'url',
        'text',
        'points',
        'parent_id',
        'user_id',
        'created_by',
        'updated_by'
    ];
    protected $hidden = [
         'updated_at', 'created_at'
    ];
}
