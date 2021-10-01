export interface SudoEvent {
    id: string;
    classType: string;
    location: string;
    startTime: string;
    endTime: string;
    end: Time;
    start: Time;
    classroomId: string;
    driveUrl: string;
    version: string;
    day: number;
    section: string;
    school: string;
    teacher: string;
    classYearMap: number;
  }
  export interface Time {
    dateTime: string;
    timeZone: string;
  }
  