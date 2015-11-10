function onClick(): void {
    let myVar: any = (<HTMLInputElement>document.getElementById('userNumber')).value;
    /*let myVar: string = myInput.value;*/

    if (isNaN(myVar)) {

        document.getElementById('display').innerHTML = '<label for="">The input type is invalid. Please re-enter again!</label>';
    } else {
        document.getElementById('display').innerHTML = '<label for="">Thanks! '+myVar+' is your favorite number.</label>';
    }

}
