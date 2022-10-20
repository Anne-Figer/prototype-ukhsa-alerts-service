notifyClient
  .sendEmail("589b05b0-5cbb-4a1b-9fc6-23bd1e2fb2dd", 'annefiger@gmail.com', {
    personalisation: {
        'first_name': 'Anne',
        'application_number': '300241'
      },
    reference: "your_reference_here"
  })
  .then(response => console.log(response))
  .catch(err => console.error(err))