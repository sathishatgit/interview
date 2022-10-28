alert(`Dear User:-
        Single Click on C Remove One Data,If You Want To Remove Whole Data Please Click Double Time On C
                                     
                                     Thanks For Choosing Our Site
                                            Happy Learning`);
function fun(x)
{
    if(x!='c')
    document.getElementById("show").value+=x;
    else
    document.getElementById("show").value='';
    console.log(typeof(document.getElementById("show").value));
}
function remove()
{
    document.getElementById("show").value=((document.getElementById("show").value).slice(0,-1));
}
function total(val)
{
    return new Function('return ' + val)();
}
function sum(x)
{
    try{
    let a=total(document.getElementById("show").value)
    console.log(typeof(a));
    document.getElementById("show").value=a;
    }
    catch(e)
    {
    alert("Check Your Input");
    }
}
function plusminus()
{
        document.getElementById("show").value*=-1;
}