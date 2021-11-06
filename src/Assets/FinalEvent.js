export default function FinalEvent() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://djacmdev.pythonanywhere.com/api/events/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return (
        <div>

        </div>
    )
}