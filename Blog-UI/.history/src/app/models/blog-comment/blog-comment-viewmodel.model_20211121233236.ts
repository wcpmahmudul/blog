export class BlogCommentViewModelCreate {

  constructor(
    public blogCommentId: number,
    public blogId: number,
    public content: string,
    public parentBlogCommentId?: number,
  ) { }
}
