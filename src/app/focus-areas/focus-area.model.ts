export class FocusArea {
  private readonly _title: string;
  private readonly _description: string;
  private readonly _imagePath: string;
  private readonly _focusAreaPath: string;


  constructor(title: string, description: string, imagePath: string, focusAreaPath: string) {
    this._title = title;
    this._description = description;
    this._imagePath = imagePath;
    this._focusAreaPath = focusAreaPath;
  }

  get focusAreaPath(): string {
    return this._focusAreaPath;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get imagePath(): string {
    return this._imagePath;
  }
}
