<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Models\Board_Leader;
use App\Models\News;
use App\Models\Activity;
use App\Models\PostImage;
use App\Models\Admin;
use App\Models\Teams;
use App\Models\Promo;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup', function(){
    $input = request() -> all();
    $required = array('account', 'password', 'username');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    $token = ADMIN::store($input);
    return response() -> json(['success' => True, 'message' => $token], 200);
});

Route::post('/login', function(){
    $input = request() -> all();
    $required = array('account', 'password');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);
    $id = ADMIN::getlogin($input);
    if(!$id)
        return  response() -> json(['success' => False, 'message' => 'Wrong account or password'], 403);
    $content = ADMIN::find($id);
    $token = ADMIN::genToken($input['account']);
    $content->token = $token;
    $content->timestamps = true;
    $content->save();
    return response() -> json(['success' => True, 'message' => $token], 200);
});

Route::post('/ct', function(){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::get('/banner/latest', function () {
    $latestRecords = DB::table('news')
    ->orderBy('created_at', 'desc')
    ->take(2)
    ->union(function ($query) {
        $query
            ->from('activity')
            ->orderBy('created_at', 'desc')
            ->take(2);
    })
    ->get();
    
    $result = [];
    $result['news'] = $latestRecords[0];
    $result['activity'] = $latestRecords[1];
    unset($result['news']->content);
    if ($result['news']) $result['news']->image = explode( ';', $result['news']->image )[0];
    unset($result['activity']->content);
    if ($result['news']) $result['activity']->image = explode( ';', $result['activity']->image )[0];
    
    return $response = response() -> json(['success' => True, 'message' => '','data' => $result], 200);
});

//---- Board Leader Control ----//
Route::get('/board/leader',function (){
    $row = DB::table('board_leader') -> first();
    return $response = response() -> json(['success' => True, 'message' => '','data' => $row], 200);
});

Route::put('/board/leader',function (){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = BOARD_LEADER::find(1);
    if ($content)
    {
        $content->timestamps = true;
        if (array_key_exists('content', $input)) $content->content = $input['content'];
        $content->save();
    }
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

//----- News Control ----//
Route::get('/news/list/cat/{id}',function ($id){
    $row = NEWS::getByCategoryId($id);
    if (!$row)
        return response() -> json(['success' => False, 'message' => 'News Category not found.'], 404);
    foreach ($row as &$value) {
        $value->content = str_replace("\\\\\\\"", '!~!~!', $value->content);
        $value->content = str_replace("\\\"", '"', trim($value->content, "\\\""));
        $value->content = str_replace("!~!~!", '\"', $value->content);
        $value->content = json_decode($value->content, true);
        unset($value->category);
    }
    return response() -> json(['success' => True, 'message' => '','data' => $row], 200);
});

Route::post('/news/create',function (){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $required = array('category', 'title', 'content');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    $row = NEWS::store($input);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::put('/news/{id}',function ($id){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = NEWS::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'News not found.'], 404);
    $content->timestamps = true;
    if (array_key_exists('category', $input)) $content->category = $input['category'];
    if (array_key_exists('title', $input)) $content->title = $input['title'];
    // if (array_key_exists('content', $input)) $content->content = NEWS::json_encode_sql($input['content']);
    if (array_key_exists('content', $input)) $content->content = ($input['content']);
    if (array_key_exists('link', $input)) $content->link = $input['link'];
    if (array_key_exists('link_alt', $input)) $content->link_alt = $input['link_alt'];
    if (array_key_exists('ord', $input)) $content->ord = $input['ord'];
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::delete('/news/{id}/{token}',function ($id, $token){
    $token = ADMIN::validToken($token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $row = NEWS::deleteById($id);
    if (!$row)
        return response() -> json(['success' => False, 'message' => 'News not found.'], 200);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

//----- activity Control ----//
Route::get('/activity/list/cat/{id}',function ($id){
    $row = ACTIVITY::getByCategoryId($id);
    if (!$row)
        return response() -> json(['success' => False, 'message' => 'Activity Category not found.'], 404);
    foreach ($row as &$value) {
        // $value->content = str_replace("'", '"', trim($value->content, "\\\""));
        // $value->content = json_decode($value->content, true);
        $value->content = str_replace("\\\\\\\" ", '!~!~!', $value->content);
        $value->content = str_replace("\\\"", '"', trim($value->content, "\\\""));
        $value->content = str_replace("!~!~!", '\"', $value->content);
        $value->content = json_decode($value->content, true);
        unset($value->category);
    }
    return response() -> json(['success' => True, 'message' => '','data' => $row], 200);
});

Route::post('/activity/create',function (){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $required = array('category', 'title', 'content');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    $row = ACTIVITY::store($input);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::put('/activity/{id}',function ($id){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = ACTIVITY::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Activity not found.'], 404);
    $content->timestamps = true;
    if (array_key_exists('category', $input)) $content->category = $input['category'];
    if (array_key_exists('title', $input)) $content->title = $input['title'];
    if (array_key_exists('content', $input)) $content->content = ($input['content']);
    if (array_key_exists('ord', $input)) $content->ord = $input['ord'];
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::delete('/activity/{id}/{token}',function ($id, $token){
    $token = ADMIN::validToken($token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $row = ACTIVITY::deleteById($id);
    if (!$row)
        return response() -> json(['success' => False, 'message' => 'Activity not found.'], 200);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

//----- Team Member Control ----//
Route::get('/teams/list',function (){
    $row = TEAMS::getList();
    return response() -> json(['success' => True, 'message' => '','data' => $row], 200);
});

Route::post('/teams/create',function (){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $required = array('role', 'name', 'title');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    $row = TEAMS::store($input);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::put('/teams/{id}',function ($id){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = TEAMS::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'News not found.'], 404);
    $content->timestamps = true;
    if (array_key_exists('role', $input)) $content->role = $input['role'];
    if (array_key_exists('title', $input)) $content->title = $input['title'];
    if (array_key_exists('name', $input)) $content->name = $input['name'];
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::delete('/teams/{id}/{token}',function ($id, $token){
    $token = ADMIN::validToken($token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $row = TEAMS::deleteById($id);
    if (!$row)
        return response() -> json(['success' => False, 'message' => 'Team member not found.'], 200);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

//----- Promo Control ----//
Route::get('/promo/list',function (){
    $row = PROMO::getList();
    return response() -> json(['success' => True, 'message' => '','data' => $row], 200);
});

Route::post('/promo/create',function (){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $required = array('year', 'name', 'title');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    $row = PROMO::store($input);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::put('/promo/{id}',function ($id){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = PROMO::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Target not found.'], 404);
    $content->timestamps = true;
    if (array_key_exists('year', $input)) $content->role = $input['year'];
    if (array_key_exists('title', $input)) $content->title = $input['title'];
    if (array_key_exists('name', $input)) $content->name = $input['name'];
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::delete('/promo/{id}/{token}',function ($id, $token){
    $token = ADMIN::validToken($token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $row = PROMO::deleteById($id);
    if (!$row)
        return response() -> json(['success' => False, 'message' => 'Target not found.'], 200);
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

//----- Images Control ----//
Route::post('/board/{id}/store-image', function(Request $request, $id){
    $token = ADMIN::validToken(request() -> token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = BOARD_LEADER::find(1);
    $content->timestamps = true;
    $filename = PostImage::store($request, 3);
    if (!$filename)
        return response() -> json(['success' => False, 'message' => 'Image upload failed'], 400);
    $content->timestamps = true;
    $content->image = $filename;
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::post('/activity/{id}/store-image', function(Request $request, $id){
    $token = ADMIN::validToken(request() -> token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = ACTIVITY::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Activity not found.'], 404);
    $filename = PostImage::store($request, 2);
    if (!$filename)
        return response() -> json(['success' => False, 'message' => 'Image upload failed'], 400);
    $content->timestamps = true;
    $content->image = $content->image.$filename.';';    
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::post('/news/{id}/store-image', function(Request $request, $id){
    $token = ADMIN::validToken(request() -> token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = NEWS::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'News not found.'], 404);
    $filename = PostImage::store($request, 1);
    if (!$filename)
        return response() -> json(['success' => False, 'message' => 'Image upload failed'], 400);
    $content->timestamps = true;
    $content->image = $filename.';';
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::post('/teams/{id}/store-image', function(Request $request, $id){
    $token = ADMIN::validToken(request() -> token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = TEAMS::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Activity not found.'], 404);
    $content->timestamps = true;
    $filename = PostImage::store($request, 4);
    if (!$filename)
        return response() -> json(['success' => False, 'message' => 'team member photo upload failed'], 400);
    $content->timestamps = true;
    $content->image = $filename;
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::post('/promo/{id}/store-image', function(Request $request, $id){
    $token = ADMIN::validToken(request() -> token);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = PROMO::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Activity not found.'], 404);
    $content->timestamps = true;
    $filename = PostImage::store($request, 4);
    if (!$filename)
        return response() -> json(['success' => False, 'message' => 'team member photo upload failed'], 400);
    $content->timestamps = true;
    $content->image = $filename;
    $content->save();
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::post('/activity/{id}/delete-image', function($id){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = ACTIVITY::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Activity not found.'], 404);
    $required = array('filename');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::post('/news/{id}/delete-image', function($id){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = NEWS::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Activity not found.'], 404);
    $required = array('filename');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::post('/teams/{id}/delete-image', function($id){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = TEAMS::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Teams member not found.'], 404);
    $required = array('filename');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});

Route::post('/promo/{id}/delete-image', function($id){
    $input = request() -> all();
    $token = ADMIN::checkToken($input);
    if(!$token)
        return $response = response() -> json(['success' => False, 'message' => 'Invalid Token'], 403);
    $content = PROMO::find($id);
    if (!$content)
        return response() -> json(['success' => False, 'message' => 'Activity not found.'], 404);
    $required = array('filename');
    if (count(array_intersect_key(array_flip($required), $input)) != count($required))
        return response() -> json(['success' => False, 'message' => 'Missing required column.'], 400);    
    return response() -> json(['success' => True, 'message' => '', 'token' => $token], 200);
});