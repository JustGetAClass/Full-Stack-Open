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

	return blogs.find((blog) => blog.likes === highest);
};

module.exports = {
	dummy,
	totalLikes,
    favoriteBlog
};
