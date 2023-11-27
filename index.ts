type Lecture = {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string;
  contacts: number;
};

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: string[] = [];
  _lecturers: Lecture[] = []; // Name, surname, position, company, experience, courses, contacts

  constructor(area: string[], lectures: Lecture[]) {
    this._areas = area;
    this._lecturers = lectures;
  }

  get areas(): string[] {
    return this._areas;
  }

  get lecturers(): Lecture[] {
    return this._lecturers;
  }

  addArea(area: string): number {
    return this._areas.push(area);
  }

  removeArea(area: string): string[] {
    return this._areas.filter((el: string) => el !== area);
  }

  addLecture(el: Lecture): number {
    return this._lecturers.push(el);
  }

  removeLecture(name: String): Lecture[] {
    return this._lecturers.filter((el) => el.name !== name);
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: string[] = [];
  _name: string;

  constructor(name: string, levels: string[]) {
    this._name = name;
    this._levels = levels;
  }

  get name(): string {
    return this._name;
  }

  get levels(): string[] {
    return this._levels;
  }

  addLevels(level: string): number {
    return this._levels.push(level);
  }

  removeLevel(level: string): string[] {
    return this._levels.filter((el) => el !== level);
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  _groups: string[];
  _name: string;

  constructor(name: string, groups: string[]) {
    this._name = name;
    this._groups = groups;
  }

  get name(): string {
    return this._name;
  }

  get groups(): string[] {
    return this._groups;
  }

  addGroup(group: string): number {
    return this._groups.push(group);
  }

  removeGroup(group: string): string[] {
    return this._groups.filter((el) => el !== group);
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area: string;
  _status: false;
  _students: any = []; // Modify the array so that it has a valid toSorted method*

  constructor(_area: string, students: string[]) {
    this._area = _area;
    this._students = students;
  }

  get area(): string {
    return this._area;
  }

  get status(): boolean {
    return this._status;
  }

  set status(status: boolean) {
    this.status = status;
  }

  addStudent(student: string): number {
    return this._students.push(student);
  }

  removeStudent(student: string): string[] {
    return this._students.filter((el) => el !== student);
  }

  showPerformance() {
    const sortedStudents = this._students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: number[] = []; // workName: mark
  _visits: string[] = []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  set grade(value: number) {
    this._grades.push(value);
  }

  set visit(value: string) {
    this._visits.push(value);
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) /
      gradeValues.length;
    const attendancePercentage: number =
      (this._visits.filter((present: string) => present).length /
        this._visits.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
