interface IStudent {
    studentId: number;
    firstName: string;
    lastName: string;
    grade: string;
    schoolName: string;
}

interface IEnrollmentHistory {
    entryDate: string;
    exitDate: string;
    exitReason: string;
}

interface IAssignmentHistory {
    assignmentName: string;
    dueDate: string;
    maxScore: number;
    completionDate: string;
    scoreEarned: number;
}