

const inputs=document.querySelectorAll('input');
console.log(inputs);

function handleUpdate(e)
{

    const val=this.value;
    const sizingValue = this.getAttribute('data-sizing')??"";

    //THIS DATASET IS IMPORTANT IT HELPS YOU GET CUSTOM ATTRIBUTES IN AN OBJECT 
    console.log(this.dataset);
    const valuePlusUnit=`${val}${sizingValue}`;
    console.log("--",this.name);
    //idea is you change the css variables by using this.name (what changed) and to what (valuePlusUnit)
    document.documentElement.style.setProperty(`--${this.name}`,valuePlusUnit)
    

}

inputs.forEach(input=> input.addEventListener('change',handleUpdate))


inputs.forEach(input=> input.addEventListener('moveover',handleUpdate))