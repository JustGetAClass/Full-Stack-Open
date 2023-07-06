const dummy = (blogs) => {
	return 1;
};

const totalLikes = (blogs) => {
	return blogs.reduce((total, blog) => total + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
	let highest = 0;
	blogs.forEach((blog) => {
		if (blog.likes > highest) {
			highest = blog.likes;
		}
	});

	const favorite = blogs.find((blog) => blog.likes === highest);

	return {
		title: favorite.title,
		author: favorite.author,
		likes: favorite.likes,
	};
};

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
};
