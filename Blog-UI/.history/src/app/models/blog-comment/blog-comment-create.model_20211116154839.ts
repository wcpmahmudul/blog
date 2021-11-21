export class BlogCommentCreate {

  constructor(
    public blogCommentId: number,
    public title: string,
    public content: string,
    public applicationUserId: number,
  ) { }
}
