class PostDto {
  constructor(user_id, title, content, image_url) {
    this.user_id = user_id;
    this.title = title;
    this.content = content;
    this.image_url = image_url;
  }
}

export default PostDto;
