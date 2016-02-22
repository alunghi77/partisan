namespace Partisan.Models {
  export class Blog implements IBlogModel {
    public title:string;
    public imageUrl:string;
    public videoUrl:string;
    public sentences:string[];
    public author:string;
    public publishedDate:Date;
  }
}
