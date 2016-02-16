
interface IBasePageModel {
  header: string;
}

interface IBaseAppState{
  enabled:boolean;
}

interface IBlogModel {
  title:string;
  imageUrl:string;
  videoUrl:string;
  content:string;
  authour:string;
  publishedDate:Date;
}

interface IBlogCollectionModel {
  blogs:IBlogModel[];
}
