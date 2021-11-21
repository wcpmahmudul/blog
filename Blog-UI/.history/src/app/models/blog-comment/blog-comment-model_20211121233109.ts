export class BlogComment {

  constructor(
    public blogCommentId: number,
    public blogId: number,
    public content: string,
    public username:string,
    public applicationUserId: nbum
    public parentBlogCommentId?: number,
  ) { }
}
