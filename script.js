function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');

    //What happens when you click cancel:
    if (question === null){
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '' //Add Img
    }

    //What happens when you click ok without a response:
    if (!question.trim()){
        alert('Please enter a valid question!')
        return
    }
}