namespace Partisan.Models {
  export class Blog implements IBlogModel {
    public title:string;
    public imageUrl:string;
    public videoUrl:string;
    public content:string;
    public authour:string;
    public publishedDate:Date;
  }
}
