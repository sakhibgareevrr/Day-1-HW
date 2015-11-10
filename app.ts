function onClick(): void {
    let myVar: any = (<HTMLInputElement>document.getElementById('userNumber')).value;
    /*let myVar: string = myInput.value;*/

    let value: number = parseFloat(myVar);

    if (isNaN(value)) {

        document.getElementById('display').innerHTML = '<label for="">The input type is invalid. Please re-enter again!</label>';
    } else {
        document.getElementById('display').innerHTML = '<label for="">Thanks! '+myVar+' is your favorite number.</label>';
    }

}
