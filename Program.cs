
int secrectNumber = 7;
int attempts = 3;
bool isWon =false;
Console.WriteLine("Guess the numer game! 1 nundi 10 madyalo oka number guess cheyali.");
for (int  i =1; i <= attempts; i++)
{
    Console.WriteLine("Attempt"+ i + ": guess cheyali");
    string input = Console.ReadLine();
    int guess = int.Parse(input);
    if (guess == secrectNumber)
    {
        Console.WriteLine("nuvu gelichavu!");
        isWon = true;
        break;
    }
    else
    {
        Console.WriteLine("tappu malli try chey");
    }
}
if (isWon)
{
    Console.WriteLine(" congratulations! Nuvu Gelichavu");
}
else
{
    Console.WriteLine("oops! 3 attemps ayipoyayi Game Over");
}
