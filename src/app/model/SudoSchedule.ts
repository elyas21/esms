export class SudoSchedule {
  constructor(
    public classType: string,
    public start: string,
    public end: string,
    public day: number,
    public section: string,
    public version: string
  ) {}
  public set sstart(time) {
    this.start = this.start;
  }
  public set send(time) {
    this.end = this.start;
  }
}
