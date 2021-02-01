console.log("adapter");
class Student {
  constructor(note) {
    this.note = note;
  }
  study() {
    return this.note * 1;
  }
}

class OutStandingStudent {
  constructor(note) {
    this.note = note;
  }
  practice() {
    return this.note + 4;
  }
}

class OutStandingStudentAdapter {
  constructor(outstandingStudent) {
    this.outstandingStudent = outstandingStudent;
  }
  practice() {
    return this.outstandingStudent.practice();
  }
}

const student = new OutStandingStudent(6);
const studentAdapter = new OutStandingStudentAdapter(student);
console.log(studentAdapter.practice());
