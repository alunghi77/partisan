namespace Partisan.Models {

  export class Index implements IIndexModel {
    public contentType: string;
    public header: string;

    constructor(
      header: string,
      contentType: string
      ) {
      this.contentType = contentType || "aboutus"
      this.header = header || "No header has been set."
    }
  }
}
