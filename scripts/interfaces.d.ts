
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
  sentences:string[];
  author:string;
  publishedDate:Date;
}

interface IBlogProps {
  model: IBlogModel;
  key:number;
}

interface IBlogsProps {
  model: IBlogModel[];
}
