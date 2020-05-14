const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let EmergencyContactSchema = new Schema({
    Name: String,
    Relationship: String,
    Phone: String,
    Email: String,
});

let DependentSchema = new Schema({
    FirstName: String,
    MiddleName: String,
    Relationship: String,
    Email: String,
    DOB: Date,
});

let AddressSchema = new Schema({
    Country: String,
    AddressLine1: String,
    AddressLine2: String,
    ExtraAddress: String,
    City: String,
    State: String,
    PIN: String,
    District: String,
    Type: String,
});

let PreviousEmploymentSchema = new Schema({
    EmployerName: String,
    EmployerType: String,
    Designation: String,
    StartDate: Date,
    EndDate: Date,
    Tenure: String,
});

let SchoolingSchema = new Schema({
    SchoolingCertificate: String,
    InstituteName: String,
    Board: String,
    PassingYear: String,
    Percentage: String,
    Grade: String,
});

let HigherEducationSchema = new Schema({
    QualificationType: String,
    Course: String,
    CourseType: String,
    CollegeName: String,
    UniversityName: String,
    CourseTenure: String,
    CourseStatus: String,
    Percentage: String,
    CGPA: String,
    StartDate: Date,
    EndDate: Date,
});

let CertificationSchema = new Schema({
    CertificationName: String,
    Completion: Date,
    Duration: String,
});

let userSchema = new Schema(
    {
        FirstName: String,
        MiddleName: String,
        LastName: String,
        EmployeeID: String,
        JobTitle: String,
        JoiningDate: Date,
        Manager: String,
        PersonalFirstName: String,
        PersonalMiddleName: String,
        PersonalLastName: String,
        Salutation: String,
        PersonalEmail: String,
        Mobile: String,
        UpdatedBy: String,
        EmergencyContacts: [EmergencyContactSchema],
        Dependents: [DependentSchema],
        Addresses: [AddressSchema],
        PreviousEmployments: [PreviousEmploymentSchema],
        Schooling: [SchoolingSchema],
        HigherEducation: [HigherEducationSchema],
        Certifications: [CertificationSchema],
    },
    { timestamps: true }
);

module.exports = userSchema;
