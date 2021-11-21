export class BlogCommentCreate {

  constructor(
    public blogId: number,
    public title: string,
    public content: string,
    public applicationUserId: number,
  ) { }
}
