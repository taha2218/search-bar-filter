module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["#"]],
    "subject-full-stop": [2, "never"],
    "subject-max-length": [2, "always", 50], // Change 50 to your desired max length
    // Add other rules as needed
  },
  messages: {
    "type-enum": "Your commit message type must start with \"#\"",
    "subject-full-stop": "Remove the trailing full stop from the subject line",
    "subject-max-length": "Subject line should not exceed 50 characters", // Customize max length message
    // Customize other messages as needed
  },
}
