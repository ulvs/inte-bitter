import React from 'react';
import DrinkItem from './DrinkItem';

const drinks = [
  "Whiskey", "Vodka", "Rom", "Gin", "Tequila", "Cognac", "Brandy", "Champagne", 
  "Riesling", "Chardonnay", "Pinot Noir", "Merlot", "Shiraz", "Cabernet Sauvignon", 
  "Zinfandel", "Moscato", "Prosecco", "Sauvignon Blanc", "Sangria", "Caipirinha", 
  "Margarita", "Mojito", "Old Fashioned", "Martini", "Cosmopolitan", "Negroni", 
  "Long Island Iced Tea", "Mai Tai", "Daiquiri", "Pina Colada", "Moscow Mule", 
  "Whiskey Sour", "Tequila Sunrise", "Gin Fizz", "Paloma", "Manhattan", "Sidecar", 
  "Mint Julep", "Sazerac", "White Russian", "Black Russian", "Americano", "Tom Collins", 
  "Rum Punch", "Bloody Mary", "Bellini", "Gin Tonic", "Screwdriver", "Fuzzy Navel", 
  "French 75", "Aperol Spritz", "Bacardi", "Absinthe", "Baileys", "Jägermeister", 
  "Sambuca", "Kahlúa", "Amaretto", "Triple Sec", "Cointreau", "Grand Marnier", 
  "Midori", "Blue Curaçao", "Goldschläger", "Malibu", "Peach Schnapps", 
  "Southern Comfort", "Drambuie", "Chartreuse", "St. Germain", "Luxardo Maraschino", 
  "Campari (inte bitter!)", "Lillet Blanc", "Pernod", "Galliano", "Fireball", 
  "Patrón", "Don Julio", "Hennessy", "Jack Daniels", "Smirnoff", "Tanqueray", 
  "Beefeater", "Bombay Sapphire", "Bacardi 151", "Captain Morgan", "Johnnie Walker", 
  "Chivas Regal", "Glenfiddich", "Macallan", "Belvedere", "Grey Goose", "Stolichnaya", 
  "Ketel One", "Bulleit Bourbon", "Evan Williams", "Maker's Mark", "Wild Turkey"
];

const DrinkList = () => {
  return (
    <div className="drink-list">
      {drinks.map((drink, index) => (
        <DrinkItem key={index} name={drink} />
      ))}
    </div>
  );
};

export default DrinkList;
