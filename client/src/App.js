import "./App.css";

function App() {
  let calculateResult = (
    engMarks,
    telMarks,
    hindiMarks,
    mathsMarks,
    sciMarks,
    socMarks,
    studentName,
    passFn,
    failFn
  ) => {
    let passMarks = 35;
    if (
      engMarks >= passMarks &&
      telMarks >= passMarks &&
      hindiMarks >= passMarks &&
      mathsMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks
    ) {
      passFn();
    } else {
      failFn();
    }
  };

  calculateResult(
    55,
    55,
    55,
    55,
    55,
    56,
    "Rohit Sharma",
    () => {
      console.log("student passed  in tenth");
    },
    () => {
      console.log("student failed in tenth");
    }
  );

  let kohliFirstName = "virat";
  let kohliLastName = "Kohli";
  let kohliEngMarks = 81;
  let kohliTelMarks = 81;
  let kohliHindiMarks = 81;
  let kohliMathsMarks = 81;
  let kohliSciMarks = 81;
  let kohliSocMarks = 81;

  let dhoniTenthDetails = {
    firstName: "MS",
    lastName: "Dhoni",
    engMarks: 81,
    telMarks: 82,
    hindiMarks: 83,
    mathsMarks: 84,
    sciMarks: 85,
    socMarks: 86,
  };

  let {
    firstName,
    lastName,
    engMarks,
    telMarks,
    hindiMarks,
    mathsMarks,
    sciMarks,
    socMarks,
  } = dhoniTenthDetails;

  console.log(firstName, lastName);

  let rohitTenthDetails = {
    firstName: "Rohit",
    lastName: "Sharma",
    engMarks: 91,
    telMarks: 92,
    hindiMarks: 93,
    mathsMarks: 94,
    sciMarks: 95,
    socMarks: 96,
  };

  console.log(rohitTenthDetails.socMarks);
  console.log(rohitTenthDetails["socMarks"]);

  let hardhikTenthDetails = {
    firstName: "Hardhik",
    lastName: "Pandya",
    engMarks: 71,
    telMarks: 72,
    hindiMarks: 73,
    mathsMarks: 74,
    sciMarks: 75,
    socMarks: 76,
  };
  console.log(hardhikTenthDetails.firstName);
  console.log(hardhikTenthDetails["firstName"]);



  let suryaTenthDetails = ["Surya", "kumar", 61, 62, 63, 64, 65, 65];

  let [fn, , eng, tel, hin, maths, sci, soc] = suryaTenthDetails;

  console.log(fn, eng, tel, hin, maths, sci, soc);

  
  console.log(suryaTenthDetails[0]);
  console.log(suryaTenthDetails[1]);
  console.log(suryaTenthDetails[6]);
  

  let cricketersArr = [
    dhoniTenthDetails,
    rohitTenthDetails,
    hardhikTenthDetails,
  ];

  console.log(cricketersArr);

  return (
    <div className="App">
      <h1>Callback Functions , Arrays, Objects and Destructuring</h1>
    </div>
  );
}

export default App;
