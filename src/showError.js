const showError = (err) => {
    if (err.message) {
        alert(err.message)
    } else {
        alert(err)
    }
}

export default showError;