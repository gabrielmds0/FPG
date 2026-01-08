import { useState, useEffect } from 'react';

// ID da planilha e GID da aba centralizada
const SPREADSHEET_ID = '1MCmHqHMDHV4RT1EFL8LLaLeqnpKCWGVvwiCmBA9WVhs';
const SHEET_GID = '1233126093'; // GID da aba centralizada
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${SHEET_GID}`;

// Configuração: linha alvo (ajuste conforme necessário)
// Linha 9 de Email = índice 10 no array
const TARGET_ROW_INDEX = 10;

// Índices das colunas (baseado no header: Produto, Data, Local, Checkout, Lote, Path, STATUS)
const COLUMNS = {
  PRODUTO: 0,
  DATA: 1,
  LOCAL: 2,
  CHECKOUT: 3,
  LOTE: 4,
  PATH: 5,
  STATUS: 6
};

// Dados de fallback
const FALLBACK_DATA = {
  Data: "21/03 e 22/03",
  Local: "São Paulo",
  Checkout: "https://clkdmg.site/pay/formacao-sp-fev-prim-lote",
  Lote: 1
};

/**
 * Função para parsear CSV manualmente
 */
function parseCSVToArray(csvText) {
  const rows = [];
  const lines = csvText.split(/\r?\n/);
  
  for (const line of lines) {
    if (!line.trim()) continue;
    
    const cells = [];
    let currentCell = '';
    let insideQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        cells.push(currentCell.trim());
        currentCell = '';
      } else {
        currentCell += char;
      }
    }
    cells.push(currentCell.trim());
    
    rows.push(cells);
  }
  
  return rows;
}

export function useGoogleSheetsFPPG() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CSV_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        
        if (!csvText || csvText.length === 0) {
          console.warn("Sheet is empty, using fallback data");
          setData(FALLBACK_DATA);
          setLoading(false);
          return;
        }

        const rows = parseCSVToArray(csvText);
        
        if (rows.length <= TARGET_ROW_INDEX) {
          console.warn("Target row not found, using fallback");
          setData(FALLBACK_DATA);
          setLoading(false);
          return;
        }

        const row = rows[TARGET_ROW_INDEX];
        
        // Converte o valor do Lote para número (default: 1)
        const loteValue = parseInt(row[COLUMNS.LOTE], 10);
        const lote = isNaN(loteValue) ? 1 : loteValue;
        
        setData({
          Data: row[COLUMNS.DATA] || FALLBACK_DATA.Data,
          Local: row[COLUMNS.LOCAL] || FALLBACK_DATA.Local,
          Checkout: row[COLUMNS.CHECKOUT] || FALLBACK_DATA.Checkout,
          Lote: lote
        });
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching CSV:', err);
        setError('Failed to fetch data');
        setData(FALLBACK_DATA);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useGoogleSheetsFPPG;
