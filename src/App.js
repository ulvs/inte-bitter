import React, { useState, useEffect } from 'react';
import './styles.css';

const drinks = [
  "Whiskey", "Vodka", "Rum", "Gin", "Tequila", "Cognac", "Brandy", "Champagne",
  "Riesling", "Chardonnay", "Pinot Noir", "Merlot", "Shiraz", "Cabernet Sauvignon",
  "Zinfandel", "Moscato", "Prosecco", "Sauvignon Blanc", "Sangria", "Caipirinha",
  "Margarita", "Mojito", "Old Fashioned", "Martini", "Cosmopolitan", "Long Island Iced Tea",
  "Mai Tai", "Daiquiri", "Pina Colada", "Moscow Mule", "Whiskey Sour", "Tequila Sunrise",
  "Gin Fizz", "Paloma", "Manhattan", "Sidecar", "Mint Julep", "Sazerac", "White Russian",
  "Black Russian", "Americano", "Tom Collins", "Rum Punch", "Bloody Mary", "Bellini",
  "Gin Tonic", "Screwdriver", "Fuzzy Navel", "French 75", "Aperol Spritz", "Bacardi",
  "Baileys", "Amaretto", "Triple Sec", "Cointreau", "Grand Marnier", "Midori", 
  "Blue Curaçao", "Malibu", "Peach Schnapps", "Southern Comfort", "Drambuie",
  "St. Germain", "Luxardo Maraschino", "Lillet Blanc", "Patrón", "Don Julio",
  "Hennessy", "Jack Daniels", "Smirnoff", "Tanqueray", "Beefeater", "Bombay Sapphire",
  "Captain Morgan", "Johnnie Walker", "Chivas Regal", "Glenfiddich", "Macallan", 
  "Belvedere", "Grey Goose", "Stolichnaya", "Ketel One", "Bulleit Bourbon", 
  "Evan Williams", "Maker's Mark", "Wild Turkey", "Fireball", "Alizé", "Rumchata",
  "Ginger Beer", "Soda Water", "Club Soda", "Tonic Water", "Lemonade", "Lime Juice", 
  "Grenadine", "Agave Syrup", "Orgeat Syrup", "Simple Syrup", "Fruit Punch", 
  "Cranberry Juice", "Pineapple Juice", "Orange Juice", "Apple Juice", "Grapefruit Juice", 
  "Coconut Cream", "Coconut Water", "Passionfruit Juice", "Pomegranate Juice", 
  "Aloe Vera Juice", "Sparkling Water", "Ginger Ale", "Lemon-Lime Soda", "Cola", 
  "Root Beer", "Dr. Pepper", "Red Bull", "Gatorade", "Monster Energy", "Coconut Milk", 
  "Almond Milk", "Soy Milk", "Heavy Cream", "Half-and-Half", "Egg White", "Limoncello", 
  "Licor 43", "Pimm's No. 1", "Mezcal", "Frangelico", "Irish Cream", "Irish Whiskey", 
  "Scotch Whisky", "Japanese Whisky", "Canadian Whisky", "Rye Whiskey", "Bourbon", 
  "Tennessee Whiskey", "Silver Tequila", "Gold Tequila", "Añejo Tequila", 
  "Reposado Tequila", "Extra Añejo Tequila", "Blanco Tequila", "Dark Rum", "Light Rum", 
  "Overproof Rum", "Gold Rum", "White Rum", "Aged Rum", "Navy Strength Rum", 
  "Eggnog", "Hot Buttered Rum", "Cider", "Hard Seltzer", "Mead", "Honey Wine", 
  "Plum Wine", "Sake", "Soju", "Shochu", "Arrack", "Kefir", "Kombucha", "Malt Beverage",
  // Garnityr (dekor och tillbehör för drinkar)
  "Citronzest", "Apelsinzest", "Limeklyfta", "Citronklyfta", "Apelsinskiva", 
  "Limeskiva", "Körsbär", "Cocktailkörsbär", "Olive", "Torkade apelsinskivor", 
  "Torkade citronskivor", "Citronskiva", "Ananasskiva", "Ananasblad", "Myntablad", 
  "Basilikablad", "Rosmarinkvist", "Timjankvist", "Sockerbit", "Sockerlag", 
  "Kanelstång", "Kanelpulver", "Muskot", "Riven choklad", "Kokosflingor", "Chilipeppar", 
  "Vaniljstång", "Kaffebönor", "Pepparkorn", "Socker", "Saltkant", "Krossad is", 
  "Cocktailparaply", "Hallon", "Jordgubbar", "Blåbär", "Svarta vinbär", "Granatäpplekärnor", 
  "Äppelskiva", "Päronskiva", "Vattenmelonbitar", "Citronmeliss", "Färska blommor", 
  "Gurkstavar", "Ingefära", "Maraschino Cherry", "Chokladspån", "Lavendel", "Torkade örter", 
  "Grillad frukt", "Kumquats", "Physalis", "Kanderad ingefära", "Pärlsocker", 
  "Äppelskiva", "Karamelliserad socker", "Frysta vindruvor", "Blodapelsinskiva", 
  "Torkad ananas", "Sugrör", "Bananblad", "Ananastrianglar", "Frysta bär"
];


function App() {
  const [randomDrink, setRandomDrink] = useState('');

  // Funktion för att välja en slumpmässig dryck
  useEffect(() => {
    const pickRandomDrink = () => {
      const randomIndex = Math.floor(Math.random() * drinks.length);
      setRandomDrink(drinks[randomIndex]);
    };
    pickRandomDrink(); // Kör vid första rendering
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="drink-name">{randomDrink}</h1>
        <p className="drink-tagline">Är inte en bitter...</p>
      </header>
    </div>
  );
}

export default App;
