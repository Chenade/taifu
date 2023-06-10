<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Teams extends Model
{
    use HasFactory;

    protected $table = 'teams';
    
    public $timestamps = true;

    protected $guarded = [];

    public static function store($request)
    {
        $content = new teams;
        $content->name = $request['name'];
        $content->title = $request['title'];
        $content->role = $request['role'];
        $content->name = $request['name'];
        $content->save();
    }

    public static function getList()
    {
        return  DB::table('teams') -> select(['id', 'role', 'name', 'title', 'image']) -> where('del', 0) -> get();
    }

    public static function getElementById($id)
    {
        return DB::table('teams') -> where('id', $id) -> where('del', 0) -> orderBy('ord', 'DESC') -> get();
    }

    public static function deleteById($id)
    {
        $row = DB::table('teams') -> where('id', $id) -> first();
        if (!$row)
            return NULL;
        $input = [];
        $input['del'] = 1;
        DB::table('teams')-> where('id', $id)-> update($input);

        return true;
    }
}
