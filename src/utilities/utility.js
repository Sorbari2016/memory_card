// Create a template
class FormControl {
  constructor(label, type) {
    this.label = label;
    this.type = type;
  }
}

class Form {
  constructor(title) {
    this.title = title;
    this.controls = [];
  }

  addControl(label, type = "text") {
    if (!label) {
      throw new Error("Label is required");
    }

    let newControl = new FormControl(label, type);
    this.controls.push(newControl);
  }

  getControls() {
    return this.controls;
  }
}

// Create form properties
const generalInfo = new Form("General Information");
generalInfo.addControl("Name", "text");
generalInfo.addControl("Email", "email");
generalInfo.addControl("Phone", "text");

const educationalInfo = new Form("Educational Experience");
educationalInfo.addControl("School", "text");
educationalInfo.addControl("Degree", "text");
educationalInfo.addControl("Year of Completion", "date");

const experience = new Form("Work History | Professional Experience");
experience.addControl("Company", "text");
experience.addControl("Title", "text");
experience.addControl("Responsibilities", "textarea");
experience.addControl("Start Date", "date");
experience.addControl("End Date", "date");

// Create a method to make a string of words camelCase
const createCamelCase = (str) => {
  return str
    .trim() // Removes accidental spaces at the start or end
    .toLowerCase()
    .replace(/^[a-z]|\s+([a-z])/g, (match, group1) =>
      group1 ? group1.toUpperCase() : match.toLowerCase(),
    );
};

export { generalInfo, educationalInfo, experience, createCamelCase };
