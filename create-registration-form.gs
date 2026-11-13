/**
 * Creates the "Freedom Cricket Academy - Registration" Google Form.
 * 1. Go to https://script.google.com -> New project -> paste this file.
 * 2. Select createRegistrationForm and click Run (authorize when asked).
 * 3. Copy the "Share link" from the Execution log into REGISTRATION_URL in script.js.
 */
function createRegistrationForm() {
  const form = FormApp.create('Freedom Cricket Academy - Registration');
  form.setDescription('Register for coaching at Freedom Cricket Academy.');
  form.setConfirmationMessage('Thank you for registering! We will contact you soon.');

  form.addTextItem().setTitle('Name').setRequired(true);
  form.addDateItem().setTitle('DOB').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Gender')
    .setChoiceValues(['Male', 'Female', 'Other']).setRequired(true);
  form.addTextItem().setTitle('Phone Number').setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .setHelpText('Enter a valid 10-digit phone number').requireTextMatchesPattern('^[0-9]{10}$').build());
  form.addTextItem().setTitle('Email ID').setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .setHelpText('Enter a valid email').requireTextIsEmail().build());
  form.addParagraphTextItem().setTitle('Address').setRequired(true);

  Logger.log('Share link: ' + form.getPublishedUrl());
  Logger.log('Edit link: ' + form.getEditUrl());
}
