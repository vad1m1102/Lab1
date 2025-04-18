function CalculatePrice (): void
{
let total = 0;
const Size = document.getElementsByName("size") as NodeListOf<HTMLInputElement>;
Size.forEach((size) =>
{
if (size.checked)
{
if(size.value === "small") total+=10;
if(size.value === "large") total+=25;
}
});

 const toppings = document.getElementsByName("topping") as NodeListOf<HTMLInputElement>;
toppings.forEach((topping) =>
{
if(topping.checked)
{
switch(topping.value)
{
case "chocolate": total+=5; break;
case "caramel": total+=6; break;
case "berries": total+=10; break;
}
}
});

const Marshmellow = document.getElementById("marshmellow") as HTMLInputElement;
if(Marshmellow.checked)
{
total+=5;
}

const result = document.getElementById("result") as HTMLDivElement;
result.textContent = `Загальна вартість: ${total} грн`;
}





