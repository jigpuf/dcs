import React from "react";

const JSDateObject = () => {
  const dateCreationMethods = [
    {
      type: "Current Date and Time",
      syntax: "new Date()",
      example: "let currentDate=new Date(); ",
      explanation:
        "Creates a `Date` object representing the current date and time.",
    },
    {
      type: "Timestamp or Date String",
      syntax: "new Date(value)",
      example: "let exactDate =new Date(1637091600000);",
      explanation:
        "Creates a `Date` object based on the provided numeric timestamp (1637091600000 in this example).",
    },
    {
      type: "Specific Components",
      syntax: "new Date(year, month, day, hour, minute, second, millisecond)",
      example: "let janDate = new Date(2023, 0, 1);",
      explanation:
        "Creates a `Date` object with the specified components (year: 2023, month: January, day: 1). Note that the month is zero-based (0 for January, 1 for February, etc.).",
    },
  ];
  const renderDateCreationMethods = dateCreationMethods.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.explanation}</td>
      </tr>
    );
  });
  const dateGettingSettingMethods = [
    {
      type: "Starting Code",
      syntax: [
        "new Date()",
        "new Date(year, month, day, hour, minute, second, millisecond);",
      ],
      code: [
        "let currentDate = new Date();",
        "let specificDate = new Date(2023, 3, 4, 12, 30, 2, 0);",
      ],
      explanation: [
        "Create a new date object representing the current date and time",
        "Create a new date object with specific components",
      ],
    },
    {
      type: "Getting and setting date components",
      syntax: [
        "getFullYear()",
        "getMonth()",
        "getDate()",
        "getHours()",
        "getMinutes()",
        "getSeconds()",
        "getDay",
        "getMilliseconds()",
        "setFullYear(year)",
        "setMonth(month)",
        "setDate(date)",
        "setMinutes(minutes)",
        "setDate(date)",
        "setHours(hours)",
        "setMinutes(minutes)",
        "setSeconds(seconds)",
        "setMilliseconds(milliseconds)",
      ],
      code: [
        "let year = currentDate.getFullYear();",
        "let month = currentDate.getMonth();",
        "let day = currentDate.getDate();",
        "currentDate.setFullYear(year);",
        "currentDate.setMonth(month);",
        "currentDate.setDate(day);",
      ],
      explanation: [
        "Get the year (4 digits) of a date object",
        "Get the month (0-11) of a date object (0 represents January)",
        "Get the day of the month (1-31) of a date object. Similar methods are available for getting hours, minutes, seconds, and milliseconds",
        "Set the year of a date object",
        "Set the month of a date object",
        "Set the day of the month of a date object",
        "Similar methods are available for setting hours, minutes, seconds, and milliseconds",
      ],
    },
    {
      type: "Adding or subtracting time intervals",
      syntax: [""],
      code: [
        "const numberOfDaysToAdd = 5;",
        "const futureDate = new Date(currentDate);",
        "futureDate.setDate(currentDate.getDate() + numberOfDaysToAdd);",
      ],
      explanation: [
        "Set up how many days to add",
        "Create new date object with the value uf currentDate",
        "Use set date method on the future date and get date method on the current date so you can add 5 days",
        "This will give you 5 days from now",
        "You could change months, year etc. by using a different setter, and you could use a date other than current date if you wanted a different reference date",
        "In each case, we create a new Date object based on the current date (currentDate). Then, we use the appropriate setDate(), setMonth(), or setFullYear() method to add or subtract the desired number of days, months, or years.",
        "Note that the setDate() method modifies the date directly, while setMonth() and setFullYear() can adjust the month and year accordingly, taking into account the number of days in each month and leap years.",
        "After performing the addition or subtraction, the new date is stored in a separate variable (futureDate, pastDate, futureMonth, pastMonth, futureYear, pastYear in the example above).",
        "Remember that JavaScript's Date object represents dates in the local time zone of the browser or server where the code is executed. If you need to work with different time zones or perform more complex date calculations, you may consider using a library like Moment.js or the built-in Intl.DateTimeFormat API.",
      ],
    },
    {
      type: "Formatting and parsing dates",
      syntax: [""],
      code: [
        "const dateString = '2021-09-15T12:30:00';",
        "const date = new Date(dateString);",
        "const formattedDate = date.toDateString();",
        "const formattedTime = date.toTimeString();",
        "const formattedLocaleDate = date.toLocaleDateString();",
        "const formattedLocaleTime = date.toLocaleTimeString();",
        "const formattedISOString = date.toISOString();",
      ],
      explanation: [
        "console.log(formattedDate); // Output: Wed Sep 15 2021",
        "console.log(formattedTime); // Output: 12:30:00 GMT+0530 (IST)",
        "console.log(formattedLocaleDate);// Output: 9/15/2021",
        "console.log(formattedLocaleTime);// Output: 12:30:00 PM",
        "console.log(formattedISOString); // Output: 2021-09-15T07:00:00.000Z",
      ],
    },
  ];
  const renderDateGettingSettingMethods = dateGettingSettingMethods.map(
    (item) => {
      const renderSyntax = item.syntax.map((syntax) => {
        return <li>{syntax}</li>;
      });
      const renderCode = item.code.map((code) => {
        return <li>{code}</li>;
      });
      const renderExplanation = item.explanation.map((explanation) => {
        return <li>{explanation}</li>;
      });
      return (
        <tr>
          <td>{item.type}</td>
          <td>
            <ol>{renderSyntax}</ol>
          </td>
          <td>
            <ol>{renderCode}</ol>
          </td>
          <td>
            <ol>{renderExplanation}</ol>
          </td>
        </tr>
      );
    }
  );
  return (
    <div>
      <h1>Date Object</h1>
      <p>
        In JavaScript, the Date object is a built-in object that represents a
        specific point in time. It provides methods for creating, manipulating,
        and formatting dates.
      </p>
      <h2>Creating a Date Object</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Explanation</th>
        </tr>
        {renderDateCreationMethods}
      </table>
      <h2>Manipulating a Date Object</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Code</th>
          <th>Explanation</th>
        </tr>
        {renderDateGettingSettingMethods}
      </table>
    </div>
  );
};
export default JSDateObject;
