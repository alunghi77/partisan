// Defines the interface of the properties of the Footer component
interface IFooterProps {
  twitterUrl : string;
  facebookUrl : string;
}

interface IIndexModel {
  header: string;
  // content:string;
  contentType:string;
}

interface IIndexProps {
  model:IIndexModel;
}

interface IAboutUsModel {
  header: string;
  content:string;
}

interface IAboutUsProps {
  model:IAboutUsModel;
}

interface IAppState{
  contentType:string;
}
