const getToday = async (symbol: string) => {
    const urlToday = `https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`;
  
    try {
      const response = await fetch(urlToday);
  
      if (!response.ok) {
        throw new Error(`Error fetching stock data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Hier kannst du die Struktur der Daten überprüfen und sicherstellen, dass sie die gewünschten Informationen enthält.
      if (data && data["historicalData"]) {
        return data["historicalData"]; // Rückgabe der historischen Daten
      } else {
        throw new Error("Unexpected data structure");
      }
  
    } catch (e) {
      console.error("Error fetching stock data:", e);
      throw e; // Fehler weitergeben
    }
  };

  export {getToday}