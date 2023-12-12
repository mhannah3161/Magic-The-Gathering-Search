import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

export default function CheckboxesTags() {
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedRarity, setSelectedRarity] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState('');
  const [cardType, setCardType] = React.useState('');
  const [cardSubtype, setCardSubtype] = React.useState('');
  const [cardArtist, setCardArtist] = React.useState('');
  const [convertedManaCost, setConvertedManaCost] = React.useState('');
  const [colorOptions, setColorOptions] = React.useState([]);
  const [rarityOptions, setRarityOptions] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [searchMenuOpen, setSearchMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Fetch colors and rarities when the component mounts
    fetchColors();
    fetchRarities();
  }, []);

  const fetchColors = async () => {
    // Fetch colors from the API or any data source
    const colors = ['White', 'Blue', 'Black', 'Red', 'Green'];
    setColorOptions(colors);
  };

  const fetchRarities = async () => {
    // Fetch rarities from the API or any data source
    const rarities = ['Common', 'Uncommon', 'Rare', 'Mythic'];
    setRarityOptions(rarities);
  };

  const handleSearchButtonClick = () => {
    setSearchMenuOpen(!searchMenuOpen);
  };

  const fetchCardData = async () => {
    try {
      const colorQuery = selectedColors.length > 0 ? `&colors=${selectedColors.join(',')}` : '';
      const rarityQuery = selectedRarity ? `&rarity=${selectedRarity}` : '';
      const typeQuery = cardType ? `&type=${cardType}` : '';
      const subtypeQuery = cardSubtype ? `&subtype=${cardSubtype}` : '';
      const artistQuery = cardArtist ? `&artist=${cardArtist}` : '';
      const convertedManaCostQuery = convertedManaCost ? `&cmc=${convertedManaCost}` : '';

      const response = await fetch(
        `https://api.magicthegathering.io/v1/cards?name=${searchInput}${colorQuery}${rarityQuery}${typeQuery}${subtypeQuery}${artistQuery}${convertedManaCostQuery}`
      );

      const data = await response.json();
      setSelectedCard(data.cards[0]); // Assuming you want to display the first card in the result
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ backgroundColor: '#add8e6', padding: '20px', borderRadius: '10px', width: searchMenuOpen ? '50%' : '100%' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearchButtonClick}
        >
          {searchMenuOpen ? 'Hide Search' : 'Show Search'}
        </Button>
        <Collapse in={searchMenuOpen}>
          <div>
            <TextField
              label="Search for Card Names"
              variant="outlined"
              fullWidth
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Autocomplete
              multiple
              id="checkboxes-colors"
              options={colorOptions}
              disableCloseOnSelect
              getOptionLabel={(color) => color}
              value={selectedColors}
              onChange={(event, newValue) => setSelectedColors(newValue)}
              style={{ width: 500 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Colors"
                  variant="outlined"
                />
              )}
            />
            <Autocomplete
              id="checkboxes-rarity"
              options={rarityOptions}
              getOptionLabel={(rarity) => rarity}
              value={selectedRarity}
              onChange={(event, newValue) => setSelectedRarity(newValue)}
              style={{ width: 200 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Rarity"
                  variant="outlined"
                />
              )}
            />
            <TextField
              label="Card Type"
              variant="outlined"
              fullWidth
              onChange={(e) => setCardType(e.target.value)}
            />
            <TextField
              label="Card Subtype"
              variant="outlined"
              fullWidth
              onChange={(e) => setCardSubtype(e.target.value)}
            />
            <TextField
              label="Card Artist"
              variant="outlined"
              fullWidth
              onChange={(e) => setCardArtist(e.target.value)}
            />
            <TextField
              label="Converted Mana Cost"
              variant="outlined"
              fullWidth
              onChange={(e) => setConvertedManaCost(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={fetchCardData}
            >
              Search
            </Button>
          </div>
        </Collapse>
      </div>
      {selectedCard && (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', width: '50%', marginTop: '20px' }}>
          {/* Display the selected card information */}
          <>
            <div>Selected Card: {selectedCard.name}</div>
            <div>Type: {selectedCard.type}</div>
            <div>Subtype: {selectedCard.subtype}</div>
            <div>Artist: {selectedCard.artist}</div>
            <div>Converted Mana Cost: {selectedCard.cmc}</div>
            <img
              src={selectedCard.imageUrl}
              alt={selectedCard.name}
              style={{ maxWidth: '100%', marginTop: '10px' }}
            />
          </>
        </div>
      )}
    </div>
  );
}