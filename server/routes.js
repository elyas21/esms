const AutCon = require('./controllers/autCon');
const School = require('./routes/manageSchool');
const Director = require('./routes/manageDirector');
const Student = require('./routes/manageStudent');
const Course = require('./routes/manageCourse');
const Grade = require('./routes/manageGrade');
const Section = require('./routes/manageSection');
const Parent = require('./routes/manageParent');
const Payment = require('./routes/managePayment');
const Teacher = require('./routes/manageTeacher');
const TSCA = require('./routes/manageTeacherCouresSection');
const Registra = require('./routes/manageRegistra');
const Finace = require('./routes/manageFinace');
const CourseGradeing = require('./routes/manageCouresGrade');
const ClassYear = require('./routes/manageClassYear');
const Semister = require('./routes/manageSemisterMap');
const Attendance = require('./routes/manageAttendance');
// const isAuthenticated = require("./polices/isAuthenticated");
// const allowOnly = require("./polices/role");

module.exports = app => {
  app.post('/api/login', AutCon.login);
  app.post(
    '/api/register',
    // isAuthenticated,
    // allowOnly(config.type.admin),
    AutCon.register
  );

  app.get('/api/school/getAll', School.getAll);
  app.get('/api/school/get-one/:schoolId', School.getOne);
  app.post('/api/school/add', School.add);
  app.post('/api/school/update', School.update);
  app.delete('/api/school/remove', School.remove);

  app.get('/api/director/getAll', Director.getAll);
  app.post('/api/director/add', Director.add);
  app.post('/api/director/update', Director.update);
  app.delete('/api/director/remove', Director.remove);

  app.get(
    '/api/attendance/get-all-by/:school/:ClassYear/:section/:month/:day',
    Attendance.getAttendaceBySectionDayClassYear
  );
  app.post('/api/attendance/update', Attendance.update);
  app.get('/api/attendance/get-all-by/:school/:section/:student/:month', Attendance.getAllByMonth);

  // /api/attendance/get-all-by/school-0/2/undefined/3/7
  app.get('/api/class-year/getAll', ClassYear.getAll);
  app.get('/api/class-year/get-all-by-school/:school', ClassYear.getAllBySchool);
  app.post('/api/class-year/add', ClassYear.add);
  app.post('/api/class-year/update', ClassYear.update);
  app.delete('/api/class-year/remove', ClassYear.remove);

  app.get('/api/semister/getAll', Semister.getAll);
  app.get('/api/semister/get-all-by-school/:school', Semister.getAllBySchool);
  app.post('/api/semister/add', Semister.add);
  app.post('/api/semister/update', Semister.update);
  app.delete('/api/semister/remove', Semister.remove);

  app.get('/api/student/get-all-by-school-pg/:school/:pageSize/:page', Student.getAllBySchool);
  app.get('/api/student/get-all-by-school-section/:school/:section', Student.getAllBySchoolSection);
  app.get('/api/student/get-one-by-school/:school/:student', Student.getOneBySchool);

  app.get(
    '/api/student/get-one-by-school-classYear/:school/:currentClassYear/:student',
    Student.getOneBySchoolClassYear
  );

  app.get(
    '/api/student/get-all-by-school/:school/:grade/:lastClassYear',
    Student.getCandidateBySchoolGradeClassYear
  );
  app.get(
    '/api/student/get-all-registerd-by-grade-school/:school/:grade/:currentClassYear',
    Student.getallRegisterdStudentsByGradeClassYear
  );
  app.get('/api/student/get-one/:studentId', Student.getOne);
  app.post('/api/student/add', Student.add);
  app.post('/api/student/assignToSection', Student.assignToSection);
  app.post('/api/student/removeFromSection', Student.removeFromSection);
  app.post('/api/student/update', Student.update);
  app.delete('/api/student/remove', Student.remove);
  app.get('/api/student/getAll', Student.getAll);

  app.get('/api/course-gradeing/get-all-by-school/:school', CourseGradeing.getAllBySchool);
  app.get(
    '/api/course-gradeing/get-all-by-school-section/:school/:section',
    CourseGradeing.getAllBySchoolSection
  );
  app.get(
    '/api/course-gradeing/get-one-by-school/:school/:couresGradeingId',
    CourseGradeing.getOneBySchool
  );
  app.get(
    '/api/course-gradeing/get-all-student-by-school/:school/:lecture/:course/:section',
    CourseGradeing.getAllStuGradeingBySchoolCourseLecture
  );
  app.get(
    '/api/course-gradeing/get-all-student-by-school-term/:school/:lecture/:course/:section/:term',
    CourseGradeing.getAllStuGradeingBySchoolCourseLectureTerm
  );
  app.get(
    '/api/course-gradeing/get-grade-by-school-term-classYear-id/:school/:student/:classYear/:term',
    CourseGradeing.getGradeBySchoolStuClassYearTerm
  );
  app.get(
    '/api/course-gradeing/get-all-student-by-school-section-term-course/:school/:section/:course/:term',
    CourseGradeing.getGradeBySchoolSectionTermCourse
  );

  app.get('/api/course-gradeing/get-one/:couresGradeingId', CourseGradeing.getOne);
  app.post('/api/course-gradeing/add', CourseGradeing.add);
  app.post('/api/course-gradeing/update', CourseGradeing.update);
  app.delete('/api/course-gradeing/remove', CourseGradeing.remove);
  app.get('/api/course-gradeing/getAll', CourseGradeing.getAll);

  app.get('/api/course/get-all-by-school/:school', Course.getAllBySchool);
  app.get('/api/course/get-all-by-school-section/:school/:section', Course.getAllBySchoolSection);
  app.get('/api/course/get-one-by-school/:school/:courseId', Course.getOneBySchool);
  app.get('/api/course/getAll', Course.getAll);
  app.get('/api/course/get-one/:courseId', Course.getOne);
  app.post('/api/course/add', Course.add);
  app.post('/api/course/update', Course.update);
  app.delete('/api/course/remove', Course.remove);

  app.get('/api/grade/get-all-by-school/:school', Grade.getAllBySchool);
  app.get('/api/grade/get-all-by-school/:school/:grade', Grade.getAllBySchoolGrade);
  app.get('/api/grade/get-all-course-by-school-grade/:school/:grade', Grade.getCourseList);

  app.get('/api/grade/get-one-by-school-grade/:school/:gradeId', Grade.getOneBySchoolGrade);
  // app.get("/api/grade/get-all-by-school-course/:grade" , Grade.getCourse)
  app.post('/api/grade/ass-course-grade', Grade.assignCourse);
  app.delete('/api/grade/remove-course-grade/:gradeId/:courseId', Grade.removeAssignCourse);
  app.get('/api/grade/getAll', Grade.getAll);
  app.get('/api/grade/get-one/:gradeId', Grade.getOne);
  app.post('/api/grade/add', Grade.add);
  app.post('/api/grade/update', Grade.update);
  app.delete('/api/grade/remove/:gradeId', Grade.remove);

  app.get('/api/section/get-all-by-school/:school', Section.getAllBySchool);
  // app.get("/api/section/get-all-by-school/:school/:classYear", Section.getAllBySchoolClassYear);
  app.get('/api/section/get-all-by-school/:school/:classYear', Section.getAllBySchoolClassYear);
  app.get('/api/section/get-one-by-school/:school/:section', Section.getOneBySchool);
  app.get('/api/section/get-all-by-school-grade/:school/:grade', Section.getAllBySchoolGrade);
  app.get(
    '/api/section/get-all-by-school/:school/:grade/:classYear',
    Section.getAllBySchoolGradeClassYear
  );
  app.get(
    '/api/section/get-one-by-school/:school/:section/:classYear',
    Section.getOneBySchoolGradeClassYear
  );
  app.get('/api/section/getAll', Section.getAll);
  app.get('/api/section/get-one/:sectionId', Section.getOne);
  app.post('/api/section/add', Section.add);
  app.post('/api/section/update', Section.update);
  app.delete('/api/section/remove', Section.remove);

  app.get('/api/parent/getAll', Parent.getAll);
  app.get('/api/parent/get-one/:parentId', Parent.getOne);
  app.post('/api/parent/add', Parent.add);
  app.post('/api/parent/update', Parent.update);
  app.delete('/api/parent/remove', Parent.remove);

  app.get('/api/payment/getAll', Payment.getAll);
  app.get('/api/payment/get-one/:paymentId', Payment.getOne);
  app.post('/api/payment/add', Payment.add);
  app.post('/api/payment/update', Payment.update);
  app.delete('/api/payment/remove', Payment.remove);

  app.get('/api/registara/getAll', Registra.getAll);
  app.get('/api/registara/get-one/:registraId', Registra.getOne);
  app.post('/api/registara/add', Registra.add);
  app.post('/api/registara/update', Registra.update);
  app.delete('/api/registara/remove/:registraId', Registra.remove);

  app.get('/api/finace/getAll', Finace.getAll);
  app.get('/api/finace/get-one/:finaceId', Finace.getOne);
  app.post('/api/finace/add', Finace.add);
  app.post('/api/finace/update', Finace.update);
  app.delete('/api/finace/remove/:finaceId', Finace.remove);

  app.get('/api/lecture/get-all-by-school/:school', Teacher.getAllBySchool);
  app.get('/api/lecture/get-one-by-school/:school/:lecture', Teacher.getOneBySchool);
  app.get('/api/lecture/getAll', Teacher.getAll);
  app.get('/api/lecture/get-one/:teacherId', Teacher.getOne);
  app.post('/api/lecture/add', Teacher.add);
  app.post('/api/lecture/update', Teacher.update);
  app.delete('/api/lecture/remove/:teacherId', Teacher.remove);

  app.get(
    '/api/teacher-section-coures-ass/get-all-by-school-section/:school/:section',
    TSCA.getAllBySchoolSection
  );
  app.get(
    '/api/teacher-section-coures-ass/get-all-by-school-section-by-lecture/:school/:lecture',
    TSCA.getAllBySchoolSectionByLecture
  );
  app.get('/api/teacher-section-coures-ass/getAll', TSCA.getAll);
  app.get(
    '/api/teacher-section-coures-ass/get-all-courses-by-school-section-by-lecture/:school/:lecture/:section',
    TSCA.getAllCoursesByLectureSection
  );

  app.get('/api/teacher-section-coures-ass/get-one/:tscId', TSCA.getOne);
  app.post('/api/teacher-section-coures-ass/add', TSCA.add);
  app.post('/api/teacher-section-coures-ass/update', TSCA.update);
  app.delete('/api/teacher-section-coures-ass/remove', TSCA.remove);
  app.post('/api/teacher-section-coures-ass/add-course', TSCA.assignCourse);
  app.all('/api/*', (req, res) => {
    res.status(404).send('api not Found');
  });
};
