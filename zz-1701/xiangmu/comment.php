<?php
$data = array(
      array(
      "id" => 1,
      "sname" => '马晓华',
	  "content"  => '这件衣服不错，我很喜欢！',
	  "date"     => '2017-04-12 12:25',

      ),
      array(
		"id" => 2,
		"sname" => '马德华',
		"content"  => '我不去！',
		"date"     => '2016-04-24 02:25',
	),
      array(
		"id" => 3,
		"sname" => '马冬梅',
		"content"  => '你讨厌我吗？',
		"date"     => '2016-08-15 09:36',
	),
      array(
		"id" => 4,
		"sname" => '马云',
		"content"  => '梦想还是要有的，万一实现了呢！',
		"date"     => '2017-11-23 14:22',
	), 
	array(
		"id" => 5,
		"sname" => '马化腾',
		"content"  => '游戏玩的不够爽？',
		"date"     => '2017-11-23 21:19',
	),
	array(
		"id" => 6,
		"sname" => '马伊俐',
		"content"  => '且行且珍惜！',
		"date"     => '2017-09-11 14:35',
	),

);


  $data = array_chunk($data, 2);
  
  $page = $_GET['page'];
	echo json_encode($data[$page-1]);

?>