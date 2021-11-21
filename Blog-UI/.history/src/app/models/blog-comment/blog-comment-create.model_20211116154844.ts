export class BlogCommentCreate {

  constructor(
    public blogCommentId: number,
    public blogId: string,
    public content: string,
    public applicationUserId: number,
  ) { }
}
