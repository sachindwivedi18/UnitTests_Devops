$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/automate/withme/Features/FirstFeature.feature");
formatter.feature({
  "name": "Testing Online Fruits and Veggies APP",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Unittests"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User lauches the App",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automate.withme.stepdefs.FirstFeature_Stepdefs.User_lauches_the_App()"
});
formatter.embedding("image/png", "embedded0.png", "Vlaid crdentials");
formatter.write("Success Login");
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.scenario({
  "name": "Vlaid crdentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Unittests"
    },
    {
      "name": "@ValidCred"
    }
  ]
});
formatter.step({
  "name": "User gives right \"Online_User\" as Username and \"Online_User\" as Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automate.withme.stepdefs.FirstFeature_Stepdefs.User_gives_right_credentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automate.withme.stepdefs.FirstFeature_Stepdefs.User_should_see_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User lauches the App",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automate.withme.stepdefs.FirstFeature_Stepdefs.User_lauches_the_App()"
});
formatter.embedding("image/png", "embedded1.png", "Invalid Credentials");
formatter.write("Success Login");
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Unittests"
    },
    {
      "name": "@InValidCred"
    }
  ]
});
formatter.step({
  "name": "User gives invalid credentials \"automate\" as Username and \"withme\" as Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automate.withme.stepdefs.FirstFeature_Stepdefs.User_gives_invalid_credentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User should see Error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automate.withme.stepdefs.FirstFeature_Stepdefs.User_should_see_Error_smessage()"
});
formatter.result({
  "status": "passed"
});
});