Academic Records JSON Repository
Introduction

Welcome to the Academic Records JSON Repository! This repository contains academic records in JSON format for a group of students. The JSON file follows a specific schema to organize and present the data effectively.
Repository Structure

    academic_records.json: This file contains the academic records of students in JSON format. It follows a structured schema to represent various fields such as Roll No., Student Name, and marks in different subjects.

JSON Schema

json

{
  "users": [
    {
      "Roll No.": int,
      "Student Name :": string,
      "Standard": string,
      "Marathi": int,
      "Hindi": int,
      "English": int,
      "Maths": int,
      "Science": int,
      "History": int,
      "Total Marks": int
    }
  ]
}

    Roll No.: Unique identifier for each student.
    Student Name: Name of the student.
    Standard: Academic standard/class of the student.
    Marathi, Hindi, English, Maths, Science, History: Marks obtained by the student in respective subjects.
    Total Marks: Total marks obtained by the student.

Usage

Users can access the academic_records.json file to retrieve academic information about the students. The data can be used for various purposes such as analysis, visualization, or integration with other systems.
Contributing

Contributions to improve the dataset or its documentation are welcome! Feel free to submit pull requests or open issues for any suggestions or improvements.
License

This dataset is provided under the MIT License.