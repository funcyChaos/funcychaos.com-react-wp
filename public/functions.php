<?php

add_action('after_setup_theme', function(){
	add_theme_support('post-thumbnails');
});

add_action('init', function(){
	register_post_type('projects', [
		'public'				=> true,
		'label'					=> 'Projects',
		'menu_position'	=> 5,
		'supports'			=> ['title', 'editor', 'excerpt', 'thumbnail'],
		'show_in_rest'	=> true,
		'rewrite' 			=> ['slug' => 'projects','with_front' => false],
	]);
});