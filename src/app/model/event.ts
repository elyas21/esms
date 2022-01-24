export interface SudoEvent {
  id: string | null;
  classType: string | null;
  location: string | null;
  startTime: string | null;
  endTime: string | null;
  end: Time | null;
  start: Time | null;
  classroomId: string | null;
  driveUrl: string | null;
  version: string | null;
  day: number | null;
  section: string | null;
  school: string | null;
  teacher: string | null;
  classYearMap: number | null;
}
export interface Time {
  dateTime: string;
  timeZone: string;
}


export interface Event {
  id: string | null;
  classType: string | null;
  location: string | null;
  startTime: string | null;
  endTime: string | null;
  end:  string | null;
  start:   string |  null;
  classroomId: string | null;
  driveUrl: string | null;
  day: number | null;
  section: string | null;
  school: string | null;
  teacher: string | null;
  classYearMap: number | null;
}